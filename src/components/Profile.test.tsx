import { render, screen } from '@testing-library/react';
import RaspberryCookieImg from '../assets/RaspberryCookie.png';
import Profile from './Profile';

test('renders profile', () => {
  render(<Profile username="Raspberry Cookie" image={RaspberryCookieImg} />);
  const paragraph = screen.getByText(/Raspberry Cookie/i);
  expect(paragraph).toBeInTheDocument();

  const imageElement = screen.getByTestId<HTMLImageElement>('image');
  expect(imageElement.src).toBe(imageElement.src);
  expect(imageElement).toHaveAttribute('src', 'RaspberryCookie.png');
});
