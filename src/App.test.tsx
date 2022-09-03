import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

it('renders current time in Klaushierian system', () => {
  render(<App />);
  const linkElement = screen.getByText(/^\d{1,3}\s(pre|rep|dapre)$/);
  expect(linkElement).toBeInTheDocument();
});
