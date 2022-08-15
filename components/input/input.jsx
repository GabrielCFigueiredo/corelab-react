import { forwardRef } from "react";
import { ContainerInput, StyledInput, StyledLabel } from "./input.styles";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, defaultValue = "", ...props }, ref) => {
  return (
    <ContainerInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput label={label} {...props} ref={ref} />
    </ContainerInput>
  );
});
export default Input;
