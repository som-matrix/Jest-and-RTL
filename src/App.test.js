
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('renders Counter App 😃 title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Counter App 😃/);
  expect(titleElement).toBeInTheDocument();
});

test("increment button is clicked and the value increments by 1",()=>{
  render(<App/>)
  const displayValue = screen.getByTitle("Display");
  expect(displayValue.innerHTML).toBe("1");
  userEvent.click(screen.getByRole('button',{name: '+'}));
  expect(displayValue.innerHTML).toBe("2");
});

test("decrement button is clicked and the value decrements by 1",()=>{
  render(<App/>)
  const displayValue = screen.getByTitle("Display");
  expect(displayValue.innerHTML).toBe("1");
  userEvent.click(screen.getByRole('button',{name: '-'}));
  expect(displayValue.innerHTML).toBe("0");
});