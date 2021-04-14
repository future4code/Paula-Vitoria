import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ApplicationFormPage = () => {
  const history = useHistory();
  return (
    <>
      ApplicationFormPage
      <button
        onClick={() => {
          goToLastPage(history);
        }}
      >
        Voltar
      </button>
      ;
    </>
  );
};

export default ApplicationFormPage;
