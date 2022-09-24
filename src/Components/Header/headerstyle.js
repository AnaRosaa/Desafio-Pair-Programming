import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 499px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const Box = styled.div`
    border: solid 1px blue;
    width: 96%;
    height: 96%;
    display: flex;
    justify-content: space-between;
        a{
            text-decoration: none;
            
            &:hover{
                text-shadow: 0 0 10px red;
                }
        }    
`
export const Logo = styled.div`
border: solid 1px;
height: 80px;
display: flex;
align-items: flex-end;
`
export const Menu = styled.div`
border: solid 1px;
width: 30%;
height: 80px;
display: flex;
align-items: flex-end;
ul{
        display: flex;
        justify-content: space-around;
    }
    li{
        font-size: 1.5rem;
        &:hover{
        text-decoration: none;
        transition: all 1s;
        transform: scale(1.2);
        text-decoration: dotted;
        cursor: pointer;
        }
    }
`