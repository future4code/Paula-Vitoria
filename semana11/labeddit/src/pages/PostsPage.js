import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import PostCard from "../components/PostCard";
import CommentCard from "../components/CommentCard";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { RawDescriptionHelpFormatter } from "argparse";

const PostPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextPostContainer = styled.div`
  height: 120px;
  width: 506px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

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
};

const PostsPage = () => {
  useProtectedPage();
  const [form, onChange, resetForm] = useForm(initialForm);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form.text);
    resetForm();
  };

  return (
    <>
      <h1>Posts</h1>;
      <form onSubmit={handleClick}>
        <PostPageContainer>
          <PostCard />
          <TextPostContainer>
            <input
              name="text"
              value={form.text}
              onChange={onChange}
              placeholder="Escreva seu comentário"
            />
            <button>Comentar</button>
          </TextPostContainer>
          <CommentCard />
        </PostPageContainer>
      </form>
    </>
  );
};
export default PostsPage;
