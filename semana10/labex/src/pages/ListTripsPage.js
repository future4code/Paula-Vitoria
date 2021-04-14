import React from "react";
import { goToApplicationForm, goToLastPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const history = useHistory();
  return (
    <>
      ListTripsPage
      <button
        onClick={() => {
          goToApplicationForm(history);
        }}
      >
        Inscreva-se
      </button>
      <button
        onClick={() => {
          goToLastPage(history);
        }}
      >
        Voltar
      </button>
    </>
  );
};

export default ListTripsPage;
