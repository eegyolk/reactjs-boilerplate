import { render, screen } from '@testing-library/react';
import Header from './index.js';

test('renders My Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/My Header/i);
  expect(linkElement).toBeInTheDocument();
});
