import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

const TripDetailsPage = () => {
  useProtectedPage();
  const history = useHistory();

  const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");
    const url = `${baseUrl}/paula-cruz/trip/${id}
    `;
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data.trip.name);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const decideCandidate = (tripId, candidateId) => {
    const body = {
      approve: true,
    };
    const url = `${baseUrl}/paula-cruz/trips/${tripId}/candidates/${candidateId}/decide}`;
    const token = window.localStorage.getItem("token");
    axios
      .put(url, { headers: { auth: token } }, body)
      .then((res) => {
        console.log("aprovado!");
      })
      .catch((err) => {
        console.log("Não conseguimos decidir. Tente novamente.");
      });
  };

  decideCandidate("9z7UFwvAFcdYtMxezXnv,"); //terminar
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
