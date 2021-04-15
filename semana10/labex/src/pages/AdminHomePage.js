import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  goToListTrips,
  goToAdminHome,
  goToCreateTrip,
  goToLastPage,
} from "../routes/coordinator";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

const AdminHomePage = () => {
  useProtectedPage();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const getTrips = () => {
    const url = `${baseUrl}/paula-cruz/trips`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(getTrips, []);

  const deleteTrip = (id) => {
    const token = window.localStorage.getItem("token");
    const url = `${baseUrl}/paula-cruz/trips/${id}`;

    axios
      .delete(url, { headers: { auth: token } })
      .then((res) => {
        console.log("Deletado!");
      })
      .catch((err) => {
        console.log("Não foi possível deletar");
      });
  };

  deleteTrip("GzUezWWrPbBJbnXxUAJc");
  return (
    <>
      Admin Home Page
      <button
        onClick={() => {
          goToCreateTrip(history);
        }}
      >
        Criar Viagem
      </button>
      <button
        onClick={() => {
          goToLastPage(history);
        }}
      >
        Voltar{" "}
      </button>
      {trips.map((trip) => {
        return (
          <div>
            <button>{trip.description}</button>
          </div>
        );
      })}
    </>
  );
};
//Nao esquecer de chamar a função goToTripDetails em cima de cada trip
export default AdminHomePage;
