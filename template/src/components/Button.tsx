import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const StyledButton = styled.button`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${(props: ButtonProps) => (props.primary ? "0" : "1px")} solid
    var(--main);
  background-color: ${(props: ButtonProps) =>
    props.primary ? "var(--primary)" : "var(--bg)"};

  font-size: 1.6rem;

  :disabled {
    background-color: var(--sub);
  }
`;

interface Props {
  text: string;
  click: () => void;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({ text, click, primary, disabled, loading }: Props) => {
  return (
    <StyledButton
      onClick={() => click()}
      disabled={disabled || loading}
      primary={primary}
    >
      {loading ? "Loading..." : text}
    </StyledButton>
  );
};

export default Button;
