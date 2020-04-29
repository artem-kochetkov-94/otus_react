import React from 'react'
import { mount } from 'enzyme'
import { TodoListForm } from './'
import renderer from 'react-test-renderer'
import { Form } from './styles'
import moment from 'moment'

// describe('Default render tests', () => {
//   const onClick = jest.fn()

//   it('renders snapshot', () => {
//     expect(
//       renderer.create(<TodoListForm onCreate={onClick} />).toJSON(),
//     ).toMatchSnapshot()
//   })
// })

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
