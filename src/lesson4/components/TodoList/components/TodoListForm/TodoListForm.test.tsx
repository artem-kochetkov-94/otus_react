import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoListForm } from './'
import { Input } from './styles'
import renderer from 'react-test-renderer'

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

    const todoListFormWrapper = mount(<TodoListForm onCreate={onClick} />)
    todoListFormWrapper
      .find('input')
      .simulate('change', { target: { value: 'test' } })
    todoListFormWrapper.find('button.add-task').simulate('click')
    expect(onClick).toHaveBeenCalled()
    expect(todoListFormWrapper.find('input').prop('value')).toEqual('')
  })
})
