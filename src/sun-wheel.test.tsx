import React from 'react'
import { render, screen } from '@testing-library/react'
import { KlaushierianTime } from './klaushierian-time'
import SunWheel from './sun-wheel'

describe('SunWheel component', () => {
  it('renders sun (outer) wheel', () => {
    render(<SunWheel time={new KlaushierianTime()} />)
    const sunWheel = screen.getByTitle('Sun Wheel')
    expect(sunWheel).toBeInTheDocument()
  })
})
