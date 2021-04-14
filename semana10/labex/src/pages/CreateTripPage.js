import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

const CreateTripPage = () => {
  const history = useHistory();
  return (
    <>
      <div>CreateTripPage</div>
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

export default CreateTripPage;
