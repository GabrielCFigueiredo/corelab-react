import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height: 60px;
  width: 100%;
`;

export const StyledLabel = styled.label `
@media (max-width: 767px) {
  right: 28%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    right: 18%;
  }

  @media (min-width: 1024px) {
    right: 9%;
  }
  position: relative;
  right: 210px;
`

export const StyledInput = styled.input`
  @media (max-width: 767px) {
    width: 80%;
    height: 70%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    height: 70%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 70%;
  }

  border-radius: 50px;
  border: 1px solid black;
  outline: none;
  padding-left: 40px;
  cursor: pointer;
`;
