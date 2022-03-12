import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './index.js';

test('renders learn react link', () => {
  render(<App />, { wrapper: MemoryRouter });
});
