import React from 'react'
import { mount } from 'enzyme'
import { TodoListForm } from './'
import { Form } from './styles'

describe('Actions tests', () => {
  it('The button is locked if the field is empty', () => {
    const onClick = jest.fn()

    const todoListFormWrapper = mount(<TodoListForm onCreate={onClick} />)

    expect(
      todoListFormWrapper.find('button.add-task').props().disabled,
    ).toEqual(true)

    todoListFormWrapper.find('button.add-task').simulate('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('Create task', () => {
    const onSubmit = jest.fn()

    const todoListFormWrapper = mount(<TodoListForm onSubmit={onSubmit} />)
    todoListFormWrapper
      .find('input[name="task-header"]')
      .simulate('change', { target: { value: 'test' } })

    todoListFormWrapper.find('button[type="submit"]').simulate('submit')
    expect(onSubmit).toHaveBeenCalled()
  })
})
