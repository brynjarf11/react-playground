import { render } from '@testing-library/react';

import ExpenseFilter from './expense-filter';

describe('ExpenseFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseFilter />);
    expect(baseElement).toBeTruthy();
  });
});
