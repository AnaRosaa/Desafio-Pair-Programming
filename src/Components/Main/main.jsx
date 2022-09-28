import React from "react";
import * as S from "./mainstyled.js";
import Bolo from "../img/bolo.png";
import Pizza from "../img/pizza.png";
import Copo from "../img/copo.png";

export default function App() {
  return (
    <>
      <S.Container>
        <S.GlobalStyle />
        <S.DivOne>
          <S.H2One>LATEST RECIPES</S.H2One>
          <S.ButtonOne></S.ButtonOne>
        </S.DivOne>
        <S.FigureOne>
          <S.Img src={Bolo} alt="bolo" />
          <S.Img src={Pizza} alt="pizza" />
          <S.Img src={Copo} alt="copo" />
        </S.FigureOne>
        <S.Section>
          <S.DivTwo>
            <S.ButtonTwo></S.ButtonTwo>
            <S.H2Two>Red Velvet Cake</S.H2Two>
          </S.DivTwo>
          <S.DivThree>
            <S.ButtonThree></S.ButtonThree>
            <S.H2Three>Margherita Pizza</S.H2Three>
          </S.DivThree>
          <S.DivFour>
            <S.ButtonFour></S.ButtonFour>
            <S.H2Four>Peanut Smoothie</S.H2Four>
          </S.DivFour>
        </S.Section>
     </S.Container>
    </>
  );
}