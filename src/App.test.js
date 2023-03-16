import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

test('Check Button Initial State', () => {
 render(<Default/>);
 expect(screen.getByRole("button")).toHaveTextContent("Click Me")
});

test('Check Button Clicked State', () => {
    render(<Default/>);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole("button")).toHaveTextContent("Thanks")
});

// Extra tests!!
// Testing clicked twice, should revert back to 'Click Me'
test('Check Button Clicked Back State', () => {
    render(<Default/>);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole("button")).toHaveTextContent("Click Me")
});
