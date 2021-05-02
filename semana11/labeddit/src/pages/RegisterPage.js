import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import styled from "styled-components";
import { TextField } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin-left: 400px;
  margin-top: 45px;

  & > h1 {
    color: #b05582;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > Button {
    margin-top: 10px;
    width: 500px;
  }
`;

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
        <InputContainer>
          <h1>Registre-se</h1>

          <TextField
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Nome de Usuário"
            variant={"outlined"}
            fullWidth
            margin={"normal"}
          />

          <TextField
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email"
            variant={"outlined"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            variant={"outlined"}
            fullWidth
            margin={"normal"}
          />
          <ButtonContainer>
            <Button color={"primary"} variant="contained">
              Entrar
            </Button>

            <Button
              color={"primary"}
              variant="contained"
              onClick={() => goToLastPage(history)}
            >
              Voltar
            </Button>
          </ButtonContainer>
        </InputContainer>
      </form>
    </>
  );
};
export default LoginPage;
