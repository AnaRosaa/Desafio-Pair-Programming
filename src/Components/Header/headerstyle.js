import styled from "styled-components";
import Fundoheader from "../img/fundoheader.png";

export const Header = styled.header`
  background-image: url(${Fundoheader});
  background-repeat: no-repeat;
  background-size: 98%;
  background-position: center;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 15px;
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 40%;
  justify-content: space-evenly;
  li {
    width: 28%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li:hover {
    cursor: pointer;
    border: solid 3px;
    height: 40px;
    text-align: center;
  }
  @media (max-width: 620px) {
    width: 60%;
  }
`;
export const H1 = styled.h1`
  color: #373737;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 150px;
  padding: 25%;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 80px;
    padding: 20% 0% 25% 0%;
  }
  @media (max-width: 600px) {
    font-size: 50px;
  }
`;