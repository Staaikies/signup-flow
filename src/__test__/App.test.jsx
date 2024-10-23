
import { describe, test, expect, fireEvent } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'

// Checks if we're on the homepage.
describe('<App />', () => {
  it('App mounts properly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy()

    const h1 = wrapper.container.querySelector('h1')
    expect(h1.textContent).toBe('Welcome!')
  })
});

describe('<App />', () => {
  it("renders the first page of the signup flow", () => {
    const wrapper = render(<App />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    userEvent.click(buttonElement)
  });
});

// describe('<App />', () => {
//   test("navigates to the next page on button click", () => {
//     render(
//       <MemoryRouter initialEntries={["/details"]}>
//         <App />
//       </MemoryRouter>
//     );
//     fireEvent.click(screen.getByText(/Next/i));
//     expect(screen.getByText(/Step 2/i)).toBeInTheDocument();
//   });
// });
