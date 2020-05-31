import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders  link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/input/i);
  expect(linkElement).toBeInTheDocument();
});
