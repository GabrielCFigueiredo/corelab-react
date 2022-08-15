import styled from "styled-components";

export const Wrapper = styled.div`
  
`;

export const WrapperCar = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
  height: 400px;
  width: 400px;
  
`;

export const WrapperCarIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 16px;
`;
export const CardImage = styled.div`
 @media (max-width: 767px) {
    width: 100%;
    
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
   width: 100%;
  }
  width: 400px;
`;

export const Image = styled.img`

  width: 100%;
  height: 300px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;
