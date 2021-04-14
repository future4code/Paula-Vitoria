import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTrips, goToLoginPage } from "../routes/coordinator";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";

const ButtonContainer = styled.div``;

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <div>HomePage</div>
      <ButtonContainer>
        <button
          onClick={() => {
            goToListTrips(history);
          }}
        >
          Ver Viagens
        </button>
        <button
          onClick={() => {
            goToLoginPage(history);
          }}
        >
          Área do Admin
        </button>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
