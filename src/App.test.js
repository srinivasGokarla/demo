import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Enter Message label', () => {
  render(<App />);
  const labelElement = screen.getByText(/Enter Message/i);
  expect(labelElement).toBeInTheDocument();
});
