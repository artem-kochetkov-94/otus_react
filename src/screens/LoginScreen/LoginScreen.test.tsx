import React from 'react'

import { LoginScreen } from './LoginScreen'
import { shallow } from 'enzyme'
import { login } from 'src/api/auth'

const mockHistory = { push: jest.fn() }
jest.mock('react-router-dom', () => ({
  useHistory: () => mockHistory,
}))

jest.mock('src/api/auth', () => ({
  login: jest.fn(),
}))

describe('LoginScreen', () => {
  it('navigates to user page on submit', async () => {
    const name = 'Artem'
    const screen = shallow(<LoginScreen />)

    screen.find('input').simulate('change', { target: { value: name } })
    await screen.find('form').simulate('submit', { preventDefault: () => null })

    expect(login).toHaveBeenCalledWith(name)
    expect(mockHistory.push).toHaveBeenCalledWith(`/`)
  })
})
