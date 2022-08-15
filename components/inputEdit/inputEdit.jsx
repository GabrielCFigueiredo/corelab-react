import { forwardRef } from "react";
import { StyledInputEdit, WrapperInputEdit } from "./inputEdit.styles";

// eslint-disable-next-line react/display-name
const InputEdit = forwardRef(({ label, defaultValue = "", ...props }, ref) => {
  return (
    <WrapperInputEdit>
      <label>{label}</label>
      <StyledInputEdit label={label} {...props} ref={ref} defaultValue={defaultValue} />
    </WrapperInputEdit>
  );
});
export default InputEdit;
