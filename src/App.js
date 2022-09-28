import React from "react";
import { GlobalStyle } from "./Global/style.js";
import Header from "./Components/Header/header.jsx";
import Main from "./Components/Main/main.jsx";
import MainTwo from "./Components/MainTwo/maintwo.jsx"
import Footer from "./Components/Footer/footer.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <MainTwo />
      <Footer />
    </>
  );
}
