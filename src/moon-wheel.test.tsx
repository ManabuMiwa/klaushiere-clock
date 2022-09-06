import React from 'react'
import { render, screen } from '@testing-library/react'
import { KlaushierianTime } from './klaushierian-time'
import MoonWheel from './moon-wheel'

describe('SunWheel component', () => {
  it('renders sun (outer) wheel', () => {
    render(<MoonWheel time={new KlaushierianTime()} />)
    const sunWheel = screen.getByTitle('Moon Wheel')
    expect(sunWheel).toBeInTheDocument()
  })
})
