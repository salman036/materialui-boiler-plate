import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginContainer, SignUpContainer} from "../containers";

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<LoginContainer />} path="/" />
          <Route element={<SignUpContainer />} path="/sign-up" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoute