import React from 'react'
import { shallow } from 'enzyme'
import { HelloWorld } from './HelloWorld'

const incMock = jest.fn()

describe('HelloWorld render check', () => {
  it('Default render with prop', () => {
    expect(
      shallow(<HelloWorld username="Artem"></HelloWorld>).matchesElement(
        <div>Hello world, Artem</div>,
      ),
    ).toBe(true)
  })
})
