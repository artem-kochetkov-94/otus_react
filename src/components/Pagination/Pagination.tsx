import React from 'react'
import { ButtonPage, Pagination as PaginationStyled } from './styles'

interface PaginationProps {
  amount: number
  pageSize: number
  page: number
  setPage: (page: number) => void
  handlePageSizeChange: (e: React.ChangeEvent) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  amount,
  pageSize,
  page,
  setPage,
  handlePageSizeChange,
}) => {
  const buttons = []

  const totalPage = (amount + (pageSize - 1)) / pageSize

  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <ButtonPage key={i} isActive={page === i} onClick={() => setPage(i)}>
        {i}
      </ButtonPage>,
    )
  }

  return (
    <div>
      <p>
        pageSize:{' '}
        <input
          value={pageSize}
          onChange={handlePageSizeChange}
          type="number"
          min={5}
        />
      </p>
      <PaginationStyled>{buttons}</PaginationStyled>
    </div>
  )
}
