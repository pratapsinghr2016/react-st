import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case "secondary":
        return `
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #545b62;
            transform: translateY(-2px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: #007bff;
          border: 2px solid #007bff;
          &:hover {
            background-color: #007bff;
            color: white;
            transform: translateY(-2px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case "danger":
        return `
          background-color: #dc3545;
          color: white;
          &:hover {
            background-color: #c82333;
            transform: translateY(-2px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      default:
        return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "large":
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
`;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
