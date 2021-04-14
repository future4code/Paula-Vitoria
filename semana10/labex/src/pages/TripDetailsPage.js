import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

const TripDetailsPage = () => {
  const history = useHistory();
  return (
    <>
      TripDetailsPage
      <button
        onClick={() => {
          goToLastPage(history);
        }}
      ></button>
    </>
  );
};

export default TripDetailsPage;
