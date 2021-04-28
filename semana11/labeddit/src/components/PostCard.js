import react from "react";
import styled from "styled-components";
import SetaCima from "../components/img/seta-para-cima.png";
import SetaBaixo from "../components/img/seta-para-baixo.png";
import { divide } from "lodash";
import spawn from "cross-spawn";

const PostCardContainer = styled.div`
  display: flex;
  height: 250px;
  width: 500px;
  border: 1px solid black;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 500px;
  height: 50px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.div`
  height: 200px;
  width: 500px;
  border: 1px solid black;
`;

const ReactionsContainer = styled.div`
  height: 50px;
  width: 500px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

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
  return (
    <>
      <PostCardContainer>
        <TitleContainer>
          <p>{"Nome de usuário"}</p>
        </TitleContainer>
        <TextContainer>{"texto do post"}</TextContainer>
        <ReactionsContainer>
          <div>
            <button>
              <img src={SetaCima} />
            </button>
            <p>1</p>
            <button>
              <img src={SetaBaixo} />
            </button>
          </div>
          <div>
            <p>2</p>
            <p>Comentários</p>
          </div>
        </ReactionsContainer>
      </PostCardContainer>
    </>
  );
};
export default PostCard;
