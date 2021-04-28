import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

const initialForm = {
  email: "",
  password: "",
  username: "",
};

const LoginPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  const login = () => {
    const body = {
      email: form.email,
      password: form.password,
      username: form.username,
    };
    const url = `${baseUrl}/signup`;
    console.log(url);
    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data);
        console.log("token" + res.data.token);
        window.localStorage.setItem("token", res.data.token);
        history.push("/feed");
      })
      .catch((err) => {});
  };

  login();
  return (
    <>
      <form onSubmit={handleClick}>
        <h1>Register</h1>

        <input
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="Nome de Usuário"
        />

        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
        />

        <button>Entrar</button>
        <button onClick={() => goToLastPage(history)}>Voltar</button>
      </form>
    </>
  );
};
export default LoginPage;
