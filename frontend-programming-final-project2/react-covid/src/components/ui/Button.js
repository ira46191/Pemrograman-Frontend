import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  background-color: #468faf;

  // PROPS VARIANT 
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}

  // PROPS SIZE
  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 0.8rem;
      padding: 0.2rem 0.5rem;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
    `}
`;

export default Button;
