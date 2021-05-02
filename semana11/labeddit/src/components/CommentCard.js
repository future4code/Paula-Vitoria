import React, { useEffect } from "react";
import styled from "styled-components";
import SetaCima from "../components/img/seta-para-cima.png";
import SetaBaixo from "../components/img/seta-para-baixo.png";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import MoodIcon from "@material-ui/icons/Mood";

const PostCardContainer = styled.div`
  display: flex;
  height: 170px;
  width: 500px;
  border: 1px solid lightgray;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleContainer = styled.div`
  display: flex;
  width: 500px;
  height: 30px;
  align-items: center;
  justify-content: center;
  color: #b05582;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const TextContainer = styled.div`
  height: 170px;
  width: 500px;
  border: 1px solid lightgray;
  background-color: #f0f2f5;
`;

const ReactionsContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 20px;
    height: 20px;
  }

  button {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #b05582;
  }
`;

const CommentCard = (props) => {
  const voteComment = (postId, commentId, direction) => {
    const body = {
      direction: direction,
    };

    const url = `${baseUrl}/posts/${postId}/comment/${commentId}/vote`;
    axios
      .put(url, body, {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  voteComment("0NEWyXAKZRSbWUMyjGlH", "6stmZdOjAtqqkNPW60mB", 1);
  return (
    <>
      <PostCardContainer>
        <TitleContainer>
          <p>{props.username}</p>
        </TitleContainer>
        <TextContainer>{props.text}</TextContainer>
        <ReactionsContainer>
          <button onClick={() => voteComment(props.postId, props.commentId, 1)}>
            <img src={SetaCima} />
          </button>
          <p>{props.comments}</p>

          <button
            onClick={() => voteComment(props.postId, props.commentId, -1)}
          >
            <img src={SetaBaixo} />
          </button>
        </ReactionsContainer>
      </PostCardContainer>
    </>
  );
};
export default CommentCard;
