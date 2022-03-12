import { render, screen } from '@testing-library/react';
import About from './index.js';

test('renders This is my about page.', () => {
  render(<About />);
  const linkElement = screen.getByText(/This is my about page./i);
  expect(linkElement).toBeInTheDocument();
});
