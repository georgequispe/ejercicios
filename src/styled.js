import styled, { css } from "styled-components";
import flecha from './assets/images/flecha.png';
export const Row = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  img{       
   
    width: 100%;
    height: auto;
    
  }
`;
export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
`;
export const Img = styled.img`
  width: 100%;
  border-radius: 50px;
  ${({ active}) => active ?
    `border: 4px solid red; z-index: 1;`
    :`border: 5px solid transparent;`}
`;
export const StartButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ff4b4b;
  }
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Btn = css`
  display: inline-block;
  cursor: pointer;
  background-image: url(${flecha});
  background-size:100% 100%;
  width: 30px;
  height: 30px;
`; 
export const BtnLeft = styled.span`
  ${Btn}
  margin-right: 10px;
`;
export const BtnRight = styled.span`
  ${Btn}
  transform: rotate(180deg);
  margin-left: 10px;
`;

