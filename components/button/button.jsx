import { StyledButton } from "./button.styles";

export default function Button({ children, ...props }) {
  return (
    <div {...props}>
      <StyledButton>{children}</StyledButton>
    </div>
  );
}
