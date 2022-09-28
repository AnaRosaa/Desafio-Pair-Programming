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
  display: flex;
`;
export const SectionTwo = styled.section`
  display:flex;
`;

export const Figure = styled.figure`
  width: 50vw;
  margin-top:3vh;
  display: flex;
  background-color: #f2f4f1;
  @media (max-width: 950px) {
    width: 50%;
  }
`;
export const Img = styled.img`
  width: 47vw;
  margin-top: 10vh;
  height: 64vh;
  @media (max-width: 950px) {
    width: 48vw;
  }
`;
export const Div = styled.div`
  width: 55vw;
  display: flex;
  height: 64vh;
  align-items: center;
  justify-items: center;
  background-color: #f2f4f1;
  background-color: #ffffff;
  margin-top: 12vh;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 50vw;
    height: 67vh;
  }
`;
export const H3 = styled.h3`
  display: flex;
  margin-top: 10vh;
`;
export const Button = styled.button`
  display: flex;
  width: 3vw;
  background-color: #373737;
  margin-top: 2vh;
  border-color: #373737;
`;
export const P = styled.p`
  display: flex;
  width: 57vh;
  margin-top: 5vh;
  color: #373737;
  @media (max-width: 867px) {
    width: 50vw;
    height: 19vh;
    font-size: 12px;
  }
`;
export const Subscribe = styled.section`
  background-color: #dfe4de;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #373737;
  padding: 10%;
  h2 {
    letter-spacing: 4.2px;
  }
  p {
    font-size: 1.5rem;
    letter-spacing: 2.05px;
  }
`;
export const Email = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    background-color: #eff1ee;
    width: 100%;
    border: none;
    height: 50px;
    margin-top: 3%;
    padding: 10px;
  }
  button {
    margin-top: 3%;
    width: 140px;
    height: 60px;
    background-color: #dfe4de;
    cursor: pointer;
  }
`;