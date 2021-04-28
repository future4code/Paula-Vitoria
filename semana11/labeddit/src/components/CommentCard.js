import react from "react";
import styled from "styled-components";
import SetaCima from "../components/img/seta-para-cima.png";
import SetaBaixo from "../components/img/seta-para-baixo.png";
import { divide } from "lodash";
import spawn from "cross-spawn";

const PostCardContainer = styled.div`
  display: flex;
  height: 170px;
  width: 500px;
  border: 1px solid black;
  flex-direction: column;
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 500px;
  height: 30px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.div`
  height: 170px;
  width: 500px;
  border: 1px solid black;
`;

const ReactionsContainer = styled.div`
  height: 30px;
  width: 500px;
  border: 1px solid black;
  display: flex;

  & > div:nth-child(1) {
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    div {
      display: flex;
      margin-right: 20px;
    }

    img {
      width: 20px;
      height: 20px;
      margin-top: 5px;
      color: red;
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
        <TextContainer>{"comentário"}</TextContainer>
        <ReactionsContainer>
          <div>
            <div>
              <img src={SetaCima} />
              <p>1</p>
            </div>
            <div>
              <img src={SetaBaixo} />
              <p>2</p>
            </div>
          </div>
        </ReactionsContainer>
      </PostCardContainer>
    </>
  );
};
export default PostCard;
