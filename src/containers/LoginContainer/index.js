import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Login } from "../../screens";

// For logic purpose
const LoginContainer = () => {
  const theme = createTheme();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login handleFormSubmit={handleFormSubmit} />
      </ThemeProvider>
    </>
  );
};

export default LoginContainer;
