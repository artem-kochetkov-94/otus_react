import React from 'react'
import { render } from 'react-dom'
import { TodoList } from './lesson4/components'

const todoList = [
  {
    id: '1',
    title: 'Сделать домашку',
    isCompleted: false,
  },
]

render(<h1>hello react</h1>, document.getElementById('root'))
render(<TodoList todoList={todoList} />, document.getElementById('root'))
