import React from "react";
import styled from "styled-components";
import SetaCima from "../components/img/seta-para-cima.png";
import SetaBaixo from "../components/img/seta-para-baixo.png";
import { goToDetailsPost } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostCardContainer = styled.div`
  display: flex;
  height: 250px;
  width: 500px;
  cursor: pointer;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleContainer = styled.div`
  display: flex;
  width: 500px;
  height: 50px;
  border-top: 1px solid lightgray;
  background-color: lightgray;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #b05582;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
`;
const TextContainer = styled.div`
  height: 200px;
  width: 500px;
  border: 1px solid lightgray;
`;

const ReactionsContainer = styled.div`
  height: 50px;
  width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #b05582;
  background-color: lightgray;

  & > div:nth-child(1) {
    width: 200px;
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    margin-left: 180px;

    & > p {
      margin: 3px;
    }
  }
`;

const PostCard = (props) => {
  const vote = (postId, direction) => {
    const url = `${baseUrl}/posts/${postId}/vote`;
    const body = {
      direction: direction,
    };
    axios
      .put(url, body, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Mensagem:", res.data);
        console.log("deu certo");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PostCardContainer onClick={props.onClick}>
        <TitleContainer>
          <p>{props.username}</p>
        </TitleContainer>
        <TextContainer>{props.text}</TextContainer>
        <ReactionsContainer>
          <div>
            <button onClick={() => vote(props.id, 1)}>
              <img src={SetaCima} />
            </button>
            <p>{props.votesCount}</p>
            <button onClick={() => vote(props.id, -1)}>
              <img src={SetaBaixo} />
            </button>
          </div>
          <div>
            <p>{props.commentsCount}</p>
            <p>Comentários</p>
          </div>
        </ReactionsContainer>
      </PostCardContainer>
    </>
  );
};
export default PostCard;
