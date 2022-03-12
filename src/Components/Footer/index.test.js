import { render, screen } from '@testing-library/react';
import Footer from './index.js';

test('renders My Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/My Footer/i);
  expect(linkElement).toBeInTheDocument();
});
