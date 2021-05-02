import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToRegisterPage } from "../routes/coordinator";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core/";
import styled from "styled-components";
import Labeddit from "../components/img/Labeddit.png";

const initialForm = {
  email: "",
  password: "",
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin-left: 400px;
  margin-top: 25px;

  & > img {
    width: 100%;
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
    };
    const url = `${baseUrl}/login`;
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
        <FormContainer>
          <img src={Labeddit} />
          <TextField
            name="email"
            value={form.email}
            onChange={onChange}
            label="Email"
            variant={"outlined"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            name="password"
            value={form.password}
            onChange={onChange}
            label="Senha"
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type="password"
          />
          <ButtonContainer>
            <Button variant="contained" color="primary" fullWidth>
              Entrar
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => goToRegisterPage(history)}
            >
              Cadastre-se
            </Button>
          </ButtonContainer>
        </FormContainer>
      </form>
    </>
  );
};
export default LoginPage;
