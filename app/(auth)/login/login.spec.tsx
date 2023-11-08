import React from 'react'
import Login from './login'
import { render } from '@testing-library/react-native'


describe('Login Screen', () => {
  test('should render login screen correctly', () => {
    render(<Login />)
  })
})
