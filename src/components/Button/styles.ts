import styled from 'styled-components';

interface ButtonProps {
  size?: number;
}

export const Container = styled.button<ButtonProps>`
  color: #000;
  padding: 10px 20px;
  margin: 10px;
  font-size: ${(props) => `${props.size ? props.size : '32'}px`};
  border: none;
  background: transparent;
  border-bottom: ${(props) =>
    `${props.size ? props.size : '1px solid #c4c4c4'}`};

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
