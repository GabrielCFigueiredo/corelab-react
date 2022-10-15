import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const WrapperLayout = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    background-position: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
  width: 100vw;
  height: 500px;
  background-image: url("https://img.freepik.com/fotos-gratis/um-carro-esporte-com-autotuning-branco-preto-dirigindo-para-a-floresta_114579-4076.jpg?w=1380&t=st=1660690526~exp=1660691126~hmac=b27b083a803a0b7c37af9bf014ca22823ef72372a00a6c838bbaf21ad8f8c67d");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  object-fit: fill;
`;

export const CardCard = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 47%;
  }

  @media (min-width: 1024px) {
    width: 23%;
  }
  width: 500px;
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
    padding: 2%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 3%;
    gap: 3%;
  }

  @media (min-width: 1024px) {
    padding-left: 2%;
    gap: 2%;
  }
  display: flex;
  justify-content: flex-start;
  gap: 46px;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 10px;
`;
