import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

import Button from "@material-ui/core/Button";

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit">Labeddit</Button>
        <Button onClick={() => goToLoginPage(history)} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
