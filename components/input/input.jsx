import { forwardRef } from "react";
import { ContainerInput, StyledInput, StyledLabel } from "./input.styles";


const Input = forwardRef(function Input({ label, defaultValue = "", ...props }, ref) {
  return (
    <ContainerInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput label={label} {...props} ref={ref} />
    </ContainerInput>
  );
});
export default Input;
