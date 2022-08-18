import { forwardRef } from "react";
import { StyledInputEdit, WrapperInputEdit } from "./inputEdit.styles";


const InputEdit = forwardRef(function Input({ label, defaultValue = "", ...props }, ref) {
  return (
    <WrapperInputEdit>
      <label>{label}</label>
      <StyledInputEdit label={label} {...props} ref={ref} defaultValue={defaultValue} />
    </WrapperInputEdit>
  );
});
export default InputEdit;
