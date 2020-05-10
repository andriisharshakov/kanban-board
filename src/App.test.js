import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders apps root', () => {
  const { getByPlaceholderText } = render(<App />);
  const board = getByPlaceholderText("kanban board");
  expect(board).toBeInTheDocument();
});

