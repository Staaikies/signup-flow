
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
    expect(h1.textContent).toBe('Policy Signup')
  })
});

// Would love to have written more tests but I struggled to know how to test with React Router.
// Definitely something I'm going to research and get better at doing.