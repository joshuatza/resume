import { render, screen } from '@testing-library/react';
import App from './App';

test('renders resume header', () => {
  render(<App />);
  expect(screen.getByText('Joshua Twycross')).toBeInTheDocument();
});
