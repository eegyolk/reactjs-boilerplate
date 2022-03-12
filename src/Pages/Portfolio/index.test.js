import { render, screen } from '@testing-library/react';
import Portfolio from './index.js';

test('renders This is my portfolio page.', () => {
  render(<Portfolio />);
  const linkElement = screen.getByText(/This is my portfolio page./i);
  expect(linkElement).toBeInTheDocument();
});
