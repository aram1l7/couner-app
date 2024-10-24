import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe('Stage C:', () => {
  test('randomizes the count', () => {
    render(<Counter />);
    const randomButton = screen.getByText('Randomize');
    fireEvent.click(randomButton);
    const countText = screen.getByText(/Count:/);
    expect(countText).toBeInTheDocument();
  });
});
