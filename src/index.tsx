import React from 'react'
import { render } from 'react-dom'
import { TodoListWithData } from './lesson4/components/TodoList/TodoListWithData'

render(<h1>hello react</h1>, document.getElementById('root'))
render(<TodoListWithData />, document.getElementById('root'))
