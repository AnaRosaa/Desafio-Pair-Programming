import React from "react";
import * as S from "./maintwostyler";
import Colher from "./ImgTwo/colher.png";

export default function App() {
  return (
    <>
      <S.Container>
        <S.GlobalStyle />
        <S.SectionTwo>
          <S.Figure>
            <S.Img src={Colher} alt="colher" />
          </S.Figure>
          <S.Div>
            <S.H3>ABOUT</S.H3>
            <S.Button></S.Button>
            <S.P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
              tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
              dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
              lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
              mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
              id mauris. Pellentesque mattis hendrerit semper. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien
              facilisis aliquam.
            </S.P>
          </S.Div>
        </S.SectionTwo>
        <S.SectionThree>
          <h2>SUBSCRIBE</h2>
          <p>Sign up for newsletter</p>
          <S.BoxOne>
            <input type="text" placeholder="Your Email" />
            <button>SUBMIT</button>
          </S.BoxOne>
        </S.SectionThree>
      </S.Container>
    </>
  );
}