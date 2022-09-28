import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`;
export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f2f4f1;
`;
export const DivOne = styled.div`
  width: 98%;
  height: 23vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

`;

export const H2One = styled.h2`
  color: #373737;
`;
export const ButtonOne = styled.button`
  display: flex;
  background-color: #373737;
  margin-top: 2vh;
  border-color: #373737;
  width: 6vw;
`;

export const FigureOne = styled.figure`
  width: 100%;
  display: flex;
  height: 30vh;
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
`;
export const Img = styled.img`
  height: 29vh;
  width: 28vw;
  @media (max-width: 950px) {
    width: 30%;
    height:27vh;
    margin-bottom: 5%;
    font-size: 20px;
  }
`;
export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-items: center;
  align-items: center;
  height: 22vh;
  justify-content: space-evenly;
`;

export const DivTwo = styled.div`
  width: 28vw;
  background-color: #ffffff;
  height: 23vh;
  justify-content: center;
  box-shadow: 0px 7px 6px #00000029;
  align-items: center;
  display: flex;
  flex-direction: column;
  
`;
export const H2Two = styled.h2`
  color: #373737;
  @media (max-width: 950px) {
    width: 50%;
    font-size: 16px;
  }
`;
export const ButtonTwo = styled.button`
  display: flex;
  width: 3vw;
  background-color: #373737;
  margin-bottom: 3vh;
  border-color: #373737;
`;
export const DivThree = styled.div`
  width: 28vw;
  height: 23vh;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  box-shadow: 0px 7px 6px #00000029;
  display: flex;
  flex-direction: column;
`;
export const H2Three = styled.h2`
  color: #373737;
  @media (max-width: 950px) {
    width: 50%;
    margin-right:12vw;
    font-size: 16px;
  }
`;
export const ButtonThree = styled.button`
  display: flex;
  background-color: #373737;
  margin-bottom: 3vh;
  border-color: #373737;
  width: 3vw;
`;
export const DivFour = styled.div`
  width: 28vw;
  height: 23vh;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  box-shadow: 0px 7px 6px #00000029;
  flex-direction: column;
`;
export const H2Four = styled.h2`
  color: #373737;
  @media (max-width: 950px) {
    width: 50%;
    margin-right:12vw;
    font-size: 16px;
  }
`;
export const ButtonFour = styled.button`
  display: flex;
  background-color: #373737;
  margin-bottom: 3vh;
  border-color: #373737;
  width: 3vw;
`;