import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoList, TodoListItem, TodoListForm } from './'
import { TaskCompleted } from './components/TodoListItem/styles'

const todoList = [
  {
    id: '1',
    title: 'task 1',
    completed: false,
  },
]

describe('Default render tests', () => {
  it('Render TodoListForm', () => {
    expect(shallow(<TodoList todoList={[]} />).find(TodoListForm)).toHaveLength(
      1,
    )
  })

  it('Render TodoList with data', () => {
    expect(
      shallow(<TodoList todoList={todoList} />).find(TodoListItem),
    ).toHaveLength(1)
  })

  it('Render TodoList without data', () => {
    expect(shallow(<TodoList todoList={[]} />).find(TodoListItem)).toHaveLength(
      0,
    )
    expect(
      shallow(<TodoList todoList={[]} />).find('p.todo-list-empty'),
    ).toHaveLength(1)
  })
})

describe('Action tests', () => {
  it('Create new task', () => {
    const todoListWrapper = mount(<TodoList todoList={todoList} />)
    todoListWrapper
      .find('.todo-list-form input')
      .simulate('change', { target: { value: 'test' } })
    todoListWrapper.find(TodoListForm).find('button.add-task').simulate('click')
    expect(todoListWrapper.find(TodoListItem)).toHaveLength(2)
  })

  it('Remove task', () => {
    const todoListWrapper = mount(<TodoList todoList={todoList} />)
    todoListWrapper
      .find(TodoListItem)
      .find('button.remove-task')
      .simulate('click')
    expect(todoListWrapper.find(TodoListItem)).toHaveLength(0)
  })

  it('Close task', () => {
    const todoListWrapper = mount(<TodoList todoList={todoList} />)
    todoListWrapper
      .find(TodoListItem)
      .find('button.close-task')
      .simulate('click')
    expect(
      todoListWrapper.find(TodoListItem).find('button.close-task'),
    ).toHaveLength(0)
    expect(todoListWrapper.find(TodoListItem).find(TaskCompleted)).toHaveLength(
      1,
    )
  })
})
