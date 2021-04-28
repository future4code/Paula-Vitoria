import React from "react";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import { useProtectedPage } from "../hooks/useProtectedPage";
import CommentTextCard from "../components/CommentCard";
import useForm from "../hooks/useForm";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const initialForm = {
  text: "",
  title: "",
};
const FeedPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);
  useProtectedPage();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  console.log(form.text);
  console.log(form.title);

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
      })
      .catch((err) => {});
  };

  createPost();
  return (
    <>
      <h1>Feed</h1>;
      <form onSubmit={handleClick}>
        <FeedContainer>
          <CreatePostContainer>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Título"
            />
            <input
              name="text"
              value={form.text}
              onChange={onChange}
              placeholder="Digite seu texto"
            />
            <button>Postar</button>
          </CreatePostContainer>
          <PostCard />
        </FeedContainer>
      </form>
    </>
  );
};
export default FeedPage;
