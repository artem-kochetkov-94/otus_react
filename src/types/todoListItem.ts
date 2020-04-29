import { executer } from 'types/executer'

export interface TodoListItemData {
  id: string
  title: string
  completed: boolean
  date?: string
  executer?: executer
}
