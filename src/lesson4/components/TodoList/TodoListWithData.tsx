import React, { useState, useEffect } from 'react'
import { TodoListContainer as TodoList } from './'
import { TodoListItemData } from 'types/todoListItem'

export const TodoListWithData: React.FC<{}> = () => {
  const [todoList, setTodoList] = useState<TodoListItemData[]>([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    xhr.send()

    xhr.onload = function () {
      if (xhr.status === 200) {
        const newTodoList = JSON.parse(xhr.response)
        // setTodoList(newTodoList)
        setTodoList([])
      }
    }
  }, [])

  return <TodoList todoList={todoList} />
}
