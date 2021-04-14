import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
const LoginPage = () => {
  const history = useHistory();
  return (
    <>
      LoginPage
      <button
        onClick={() => {
          goToLastPage(history);
        }}
      ></button>
    </>
  );
};

export default LoginPage;
