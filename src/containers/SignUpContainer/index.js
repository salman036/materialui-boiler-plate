import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { SignUp } from "../../screens";

const SignUpContainer = () => {
  
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
        <SignUp handleFormSubmit={handleFormSubmit} />
      </ThemeProvider>
    </>
  );
};

export default SignUpContainer;
