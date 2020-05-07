import styled from '@emotion/styled'
import { css } from '@emotion/core'

const ButtonPageBase = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #000;
  font-size: 14px;
  color: #000;
`

const ButtonPageActive = css`
  background-color: blue;
  color: white;
`

const PaginationBase = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

export const ButtonPage = styled.div`
  ${ButtonPageBase};
  ${({ isActive }) => (isActive ? ButtonPageActive : '')};
`

export const Pagination = styled.div`
  ${PaginationBase}
`
