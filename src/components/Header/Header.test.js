import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

test('renders a MOTD title over the dashboard', () => {
  const { getByPlaceholderText } = render(<App />);
  const motd = getByPlaceholderText("motd");
  expect(motd).toBeInTheDocument();
});
