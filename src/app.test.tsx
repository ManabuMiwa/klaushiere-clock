import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './app'

describe('App component', () => {
  it('renders current time in Klaushierian system', () => {
    render(<App />)
    const timeDisplay = screen.getByText(/^\d{1,3}\s(pre|rep|dapre)$/)
    expect(timeDisplay).toBeInTheDocument()
  })

  it('renders Klaushierian clock', () => {
    render(<App />)
    const clock = screen.getByTestId('clock')
    expect(clock).toBeInTheDocument()
  })
})
