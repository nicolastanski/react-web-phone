import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
}

const Button: React.FC<ButtonProps> = ({ children, size, ...rest }) => (
  <Container type="button" size={size} {...rest}>
    {children}
  </Container>
);

export default Button;
