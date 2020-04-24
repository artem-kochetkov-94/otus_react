export * from './Button'

export interface ButtonProps {
  customType?: string
  className?: any
  disabled?: boolean
  onClick: () => void
}
