import React from 'react'
import { mount } from 'enzyme'
import { TodoListForm } from './'
import renderer from 'react-test-renderer'

describe('Snapshot test', () => {
  const onClick = jest.fn()

  jest.mock('moment', () => () => ({
    format: () => '3000-01-01',
  }))

  it('matches snapshot', () => {
    expect(
      renderer.create(<TodoListForm onSubmit={onClick} />).toJSON(),
    ).toMatchSnapshot()
  })
})

describe('Actions tests', () => {
  it('The button is locked if the field is empty', () => {
    const onClick = jest.fn()

    const todoListFormWrapper = mount(<TodoListForm onSubmit={onClick} />)

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
