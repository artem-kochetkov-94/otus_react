import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoListForm } from './'

describe('Default render tests', () => {
  const onClick = jest.fn()

  it('Render input', () => {
    expect(
      shallow(<TodoListForm onCreate={onClick} />).find('input'),
    ).toHaveLength(1)
  })

  it('Render button', () => {
    expect(
      shallow(<TodoListForm onCreate={onClick} />).find('button.add-task'),
    ).toHaveLength(1)
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
