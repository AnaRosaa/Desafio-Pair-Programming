import React from "react";
import { GlobalStyle } from "./Global/style.js";
import Header from "./Components/Header/header.jsx";
import Footer from "./Components/Footer/footer.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  );
}
