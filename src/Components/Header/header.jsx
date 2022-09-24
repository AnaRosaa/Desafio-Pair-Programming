import React from 'react';

import * as S from './headerstyle';

export default function App() {
  return(
    <>
      <S.Header>
        <S.Box>
            <S.Logo>
              <h2>RC</h2>
            </S.Logo>
            
            <S.Menu>
              <ul>
                <li>ABOUT</li>
                <li>RECIPES</li>
                <li>SUBSCRIBE</li>
              </ul>
            </S.Menu>
        </S.Box>
      </S.Header>
    </>
  )
}