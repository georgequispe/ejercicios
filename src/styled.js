import styled from "styled-components";

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




    
  
