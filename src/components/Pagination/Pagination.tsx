import React from 'react'
import { ButtonPage, Pagination as PaginationStyled } from './styles'

interface PaginationProps {
  amount: number
  pageSize: number
  page: number
  setPage: (page: number) => void
  onPageSizeChange: (value: string) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  amount,
  pageSize,
  page,
  setPage,
  onPageSizeChange,
}) => {
  function handleChange(e: React.ChangeEvent) {
    onPageSizeChange((e.target as HTMLInputElement).value)
  }

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
        <input value={pageSize} onChange={handleChange} type="number" min={5} />
      </p>
      <PaginationStyled>{buttons}</PaginationStyled>
    </div>
  )
}
