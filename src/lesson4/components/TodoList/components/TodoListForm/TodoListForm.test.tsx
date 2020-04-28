import React from 'react'
import { mount } from 'enzyme'
import { TodoListForm } from './'
import renderer from 'react-test-renderer'
import { Form } from './styles'

describe('Default render tests', () => {
  const onClick = jest.fn()

  it('renders snapshot', () => {
    expect(
      renderer.create(<TodoListForm onCreate={onClick} />).toJSON(),
    ).toMatchSnapshot()
  })
})

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
    const onClick = jest.fn()
    const fakeEvent = { preventDefault: () => console.log('preventDefault') }

    const todoListFormWrapper = mount(<TodoListForm onCreate={onClick} />)
    todoListFormWrapper
      .find('input[name="task-header"]')
      .simulate('change', { target: { value: 'test' } })
    // todoListFormWrapper.find('button.add-task').simulate('click')

    todoListFormWrapper.find(Form).simulate('submit', fakeEvent)

    expect(onClick).toHaveBeenCalled()
    expect(
      todoListFormWrapper.find('input[name="task-header"]').prop('value'),
    ).toEqual('')
  })
})
