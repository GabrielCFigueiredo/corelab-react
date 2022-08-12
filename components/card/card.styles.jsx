import styled from "styled-components";

export const Wrapper = styled.div`
@media (max-width: 767px) {
  width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    
  }

  @media (min-width: 1024px) {
   
  }
  border: 1px solid red;
  width: 300px;
  height: 500px;
`;


export const WrapperCarIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10px;
  width: 300px;
  gap:16px;
`;
export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
@media (max-width: 767px) {
  
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    
  }

  @media (min-width: 1024px) {
    
  }
  
  width: 100%;
  height: 200px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 4px;
`;