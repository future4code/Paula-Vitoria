import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
//import useInput from "../hooks/useInput";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { useForm } from "../hooks/useForm";
const initialForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const history = useHistory();
  const [form, onChange, resetForm] = useForm(initialForm);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  const login = () => {
    const url = `${baseUrl}/paula-cruz/login`;
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(url, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
        console.log("sucesso!");
      })
      .catch((err) => {
        console.log("NÃO DEU!");
        //Alert(err.response.data.message); //tratar aqui
      });
  };

  login();
  return (
    <>
      <h1>LoginPage</h1>
      <div>
        <form onSubmit={(handleClick, login)}>
          <input
            required
            value={form.email}
            name="email"
            pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
            placeholder="Email"
            onChange={onChange}
          />
          <input
            required
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            name="password"
          />

          <button
            onClick={() => {
              goToLastPage(history);
            }}
          >
            Voltar
          </button>
          <button>Entrar</button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
