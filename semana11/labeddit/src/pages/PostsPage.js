import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import PostCard from "../components/PostCard";
import CommentCard from "../components/CommentCard";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { Button, TextField } from "@material-ui/core";

const PostPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    color: #b05582;
  }
`;

const TextPostContainer = styled.div`
  height: 120px;
  width: 506px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & > button {
    height: 50px;
    cursor: pointer;
  }
`;

const initialForm = {
  text: "",
};

const PostsPage = () => {
  useProtectedPage();
  const [form, onChange, resetForm] = useForm(initialForm);
  const [post, setPost] = useState({});
  useProtectedPage();

  const params = useParams();

  const handleClick = (event) => {
    event.preventDefault();
    createComment();
    resetForm();
  };

  useEffect(() => {
    const url = `${baseUrl}/posts/${params.id}`;
    axios
      .get(url, {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((res) => {
        setPost(res.data.post);
      })
      .catch((err) => {});
  }, [params.id, post]);

  const getItemPost = () => {
    return (
      post && (
        <PostCard
          id={post.id}
          username={post.username}
          title={post.title}
          text={post.text}
          votesCount={post.votesCount}
          commentsCount={post.commentsCount}
        />
      )
    );
  };

  const getItemCommentCard = () => {
    const commentsDetails =
      post.comments &&
      post.comments.map((comment) => {
        return (
          <CommentCard
            username={comment.username}
            text={comment.text}
            comments={comment.votesCount}
            commentId={comment.id}
            postId={post.id}
          />
        );
      });
    return commentsDetails;
  };
  const createComment = () => {
    const body = {
      text: form.text,
    };
    const url = `${baseUrl}/posts/${params.id}/comment`;

    axios
      .post(url, body, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);

        alert("comentário criado com sucesso!");
      })
      .catch((err) => {});
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <PostPageContainer>
          <h1>{post.title}</h1>
          {getItemPost()}
          <TextPostContainer>
            <TextField
              name="text"
              value={form.text}
              onChange={onChange}
              placeholder="Escreva seu comentário"
            />
            <Button color={"primary"} variant="contained">
              Comentar
            </Button>
          </TextPostContainer>
          {getItemCommentCard()}
        </PostPageContainer>
      </form>
    </>
  );
};
export default PostsPage;
