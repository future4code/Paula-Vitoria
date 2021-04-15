import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import useForm from "../hooks/useForm";

initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  duration: "",
};

const CreateTripPage = () => {
  useProtectedPage();
  const history = useHistory();

  const createTrip = () => {
    const url = `${baseUrl}/paula-cruz/trips`;
    const token = window.localStorage.getItem("token");
    const body = {
      /* "name": "Fim de semana em Marte",
        "planet": "Marte",
        "date": "31/12/2019",
        "description": "Venha passar a virada pertinho do Sol!",
        "durationInDays": 5*/
    };

    axios
      .post(url, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <>
      <div>CreateTripPage</div>

      <input required placeHolder="nome" />
      <select name="select" required>
        <option value="valor1" selected>
          Escolha um planeta
        </option>
        <option value="valor2">Mercúrio</option>
        <option value="valor3">Vênus</option>
        <option value="valor4">Terra</option>
        <option value="valor3">Júpiter</option>
        <option value="valor3">Saturno</option>
        <option value="valor3">Urano</option>
        <option value="valor3">Netuno</option>
        <option value="valor3">Plutão</option>
      </select>
      <input required type="date" />
      <input required placeHolder="Descrição" />
      <input required placeHolder="Duração em dias" />

      <button>Criar</button>

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
