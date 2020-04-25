import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ButtonProps } from './'

const ButtonBase = css`
  display: inline-flex;
  justify-content: center;
  min-width: 200px;
  padding: 5px 15px;
  font-size: 16px;
  color: #000;
`

const ButtonPrimary = css`
  background-color: blue;
  color: #fff;
`

const ButtonDangerous = css`
  background-color: red;
  color: #fff;
`

const ButtonDisabled = css`
  opacity: 0.2;
`

export const ButtonStyled = styled.button`
  ${ButtonBase};
  ${({ disabled }: ButtonProps) => (disabled ? ButtonDisabled : '')};
  ${({ customType }: ButtonProps) => {
    switch (customType) {
      case 'primary':
        return ButtonPrimary
      case 'dangerous':
        return ButtonDangerous
      default:
        return ''
    }
  }}
`
