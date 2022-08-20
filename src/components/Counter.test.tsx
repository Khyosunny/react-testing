import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('counter test', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');

  const increaseButtonElement = screen.getByText('+1');
  const decreaseButtonElement = screen.getByText('-1');
  fireEvent.click(increaseButtonElement);
  expect(countElement).toHaveTextContent('1');
  fireEvent.click(increaseButtonElement);
  expect(countElement).toHaveTextContent('2');
  fireEvent.click(decreaseButtonElement);
  expect(countElement).toHaveTextContent('1');
  fireEvent.click(decreaseButtonElement);
  expect(countElement).toHaveTextContent('0');
  fireEvent.click(decreaseButtonElement);
  expect(countElement).toHaveTextContent(/^-1$/);
  fireEvent.click(decreaseButtonElement);
  expect(countElement).toHaveTextContent(/^-2$/);
});
