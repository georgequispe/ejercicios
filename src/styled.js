import styled, { css } from "styled-components";
import flecha from './assets/images/flecha.png';
import foto_gym from './assets/images/foto_gym.jpg';
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
export const StartButton = styled.button`
  padding: 0.8rem 1.4rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4b4b;
  }
`;
export const StartButton2 = styled.button`
  padding: 0.8rem 1.4rem;
  background-color: #6bff97ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #055211ff;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

export const SmallCard = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ active }) =>
    active ? '0 0 10px rgba(0, 123, 255, 0.5)' : '0 2px 5px rgba(0,0,0,0.1)'};
  border: ${({ active }) => (active ? '2px solid #007bff' : 'none')};
  transition: all 0.3s ease;
  margin-bottom: 1rem;
`; 

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  background-color: #fefefe;
`;
export const HeaderBar = styled.header`
  background-color: #222;
  color: white;
  padding: 1rem;
  text-align: center;
`;
export const FooterBar = styled.footer`
  background-color: #222;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 1.6rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "#aaa"};
  }
`;
export const WelcomeWrapper = styled.div`
  background-image: url(${foto_gym});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ocupa toda la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;







