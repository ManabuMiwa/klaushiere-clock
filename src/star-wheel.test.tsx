import React from 'react'
import { render, screen } from '@testing-library/react'
import { KlaushierianTime } from './klaushierian-time'
import StarWheel from './star-wheel'

describe('SunWheel component', () => {
  it('renders sun (outer) wheel', () => {
    render(<StarWheel time={new KlaushierianTime()} />)
    const sunWheel = screen.getByTitle('Star Wheel')
    expect(sunWheel).toBeInTheDocument()
  })
})
