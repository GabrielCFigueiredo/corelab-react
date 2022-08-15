import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const CardCard = styled.div`
   @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 45%; 
  }

  @media (min-width: 1024px) {
    width: 20%; 
  }
  width: 400px;
  height: 500px;
`;

export const WrapperInput = styled.div`
  width: 100%;
  height: 70px;
`;
export const WrapperIconSearching = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    left: 11%;
    top: 17px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    left: 26%;
    top: 17px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    left: 36%;
    top: 20px;
  }
  position: absolute;
  left: 660px;
  top: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperIconsettings = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    left: 92%;
    top: 18px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    left: 76%;
    top: 18px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    left: 66%;
    top: 18px;
  }
  position: absolute;
  left: 1200px;
  top: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCardCar = styled.div`
@media (max-width: 767px) {
  padding: 0 2%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 2%;
  }

  @media (min-width: 1024px) {
    padding: 0 2%;
  }
  display: flex;
  justify-content: space-between;
  gap: 42px;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 60px;
`;
