import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import useRequestData from "../hooks/useRequestData";
import { goToDetailsPost } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    color: #b05582;
  }
`;
const CreatePostContainer = styled.div`
  height: 120px;
  width: 506px;
  display: flex;
  flex-direction: column;

  & > input {
    width: 500px;
    height: 150px;
  }

  & > button {
    height: 50px;
    cursor: pointer;
  }
`;
const PostCardsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;
const initialForm = {
  text: "",
  title: "",
};
const FeedPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);
  useProtectedPage();
  const posts = useRequestData([], `${baseUrl}/posts`);
  const history = useHistory();
  useProtectedPage();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  const onClickPost = (id) => {
    goToDetailsPost(history, id);
  };

  const createPost = () => {
    const body = {
      text: form.text,
      title: form.title,
    };
    const url = `${baseUrl}/posts`;
    axios
      .post(url, body, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Post criado com sucesso!");
      })
      .catch((err) => {});
  };

  const getPostCard = () => {
    const postItem =
      posts &&
      posts.map((post) => {
        return (
          <PostCard
            username={post.username}
            title={post.title}
            text={post.text}
            votesCount={post.votesCount}
            commentsCount={post.commentsCount}
            id={post.id}
            onClick={() => onClickPost(post.id)}
          />
        );
      });
    return postItem;
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <FeedContainer>
          <h1>Feed</h1>
          <CreatePostContainer>
            <TextField
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Título"
              variant={"outlined"}
            />
            <TextField
              name="text"
              value={form.text}
              onChange={onChange}
              placeholder="Escreva seu post aqui"
              variant={"outlined"}
            />
            <Button
              variant={"contained"}
              onClick={createPost}
              color={"primary"}
            >
              Postar
            </Button>
          </CreatePostContainer>
          <PostCardsList>{getPostCard()}</PostCardsList>
        </FeedContainer>
      </form>
    </>
  );
};
export default FeedPage;
