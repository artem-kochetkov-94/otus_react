import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from './'
import { TaskCompleted } from './styles'

const mock = {
  id: 'test',
  title: 'test',
  completed: false,
  onDone: jest.fn,
  onRemove: jest.fn,
}

describe('Default render tests', () => {
  it('Render title', () => {
    expect(
      shallow(<TodoListItem {...mock} />).find('.task-title'),
    ).toHaveLength(1)
  })

  it('Render remove button', () => {
    expect(
      shallow(<TodoListItem {...mock} />).find('.remove-task'),
    ).toHaveLength(1)
  })

  it('Render close button', () => {
    expect(
      shallow(<TodoListItem {...mock} />).find('.task-title'),
    ).toHaveLength(1)
  })

  it('Render task completion header', () => {
    expect(
      shallow(<TodoListItem {...mock} completed={true} />).find(TaskCompleted),
    ).toHaveLength(1)
    expect(
      shallow(<TodoListItem {...mock} completed={true} />).find('.close-task'),
    ).toHaveLength(0)
  })
})
