import React from "react";
import Logo from "../img/logo.png";
import * as S from "./headerstyle.js";

export default function Header() {
  return (
    <S.Header>
      <S.Nav>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <S.Ul>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li>SUBSCRIBE</li>
        </S.Ul>
      </S.Nav>
      <S.H1>RECIPES</S.H1>
    </S.Header>
  );
}
