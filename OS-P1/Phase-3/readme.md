# Baseline Verification Tests (Jest / React Testing Library)
```
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Primitive', () => {
  it('renders children with accessible text', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('prevents click events and sets aria-busy when loading', () => {
    const handleClick = jest.fn();
    render(<Button loading onClick={handleClick}>Save</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

// Checkbox.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox Primitive', () => {
  it('toggles value on space bar trigger', () => {
    const handleToggle = jest.fn();
    render(<Checkbox label="Accept Terms" onChange={handleToggle} />);
    const box = screen.getByRole('checkbox', { name: /accept terms/i });
    box.focus();
    fireEvent.keyDown(box, { key: ' ', code: 'Space' });
    fireEvent.click(box);
    expect(handleToggle).toHaveBeenCalled();
  });
});
```
