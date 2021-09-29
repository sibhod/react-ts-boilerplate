import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonEl = styled.button`
  text-transform: uppercase;
  color: #c692e9;
`;

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <ButtonEl>{children}</ButtonEl>;
};
