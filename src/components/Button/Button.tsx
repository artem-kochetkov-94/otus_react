import React from 'react'
import { ButtonStyled } from './styles'
import { ButtonProps } from './'

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}
