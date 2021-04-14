import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import useInput from "../hooks/useInput";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
const LoginPage = () => {
  const history = useHistory();
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");

  const login = () => {
    const url = `${baseUrl}/paula-cruz/login`;
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <>
      <h1>LoginPage</h1>
      <div>
        <input value={email} onChange={handleEmail} placeholder="Email" />
        <input value={password} onChange={handlePassword} placeholder="Senha" />

        <button
          onClick={() => {
            goToLastPage(history);
          }}
        >
          Voltar
        </button>

        <button onClick={login}>Entrar</button>
      </div>
    </>
  );
};

export default LoginPage;
