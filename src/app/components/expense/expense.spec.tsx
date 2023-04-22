import { render } from '@testing-library/react';

import Expense from './expense';

describe('Expense', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Expense />);
    expect(baseElement).toBeTruthy();
  });
});
