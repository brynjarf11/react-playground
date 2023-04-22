import { render } from '@testing-library/react';

import NewExpense, { NewExpenseData } from './new-expense';

describe('NewExpense', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewExpense addExpenseData={function (data: NewExpenseData): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(baseElement).toBeTruthy();
  });
});
