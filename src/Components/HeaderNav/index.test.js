import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HeaderNav from './index.js';

test('render navigation About', () => {
  render(<HeaderNav />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navigation Home', () => {
  render(<HeaderNav />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navigation Portfolio', () => {
  render(<HeaderNav />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
