import React from "react";
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

const AdminHomePage = () => {
  const history = useHistory();
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
    </>
  );
};
//Nao esquecer de chamar a função goToTripDetails em cima de cada trip
export default AdminHomePage;
