import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders  link', () => {
  const { getByText } = 
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});


