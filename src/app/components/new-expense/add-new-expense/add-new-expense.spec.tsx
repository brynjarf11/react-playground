import { render } from '@testing-library/react';

import AddNewExpense from './add-new-expense';
import { ExpenseFormData } from '../expense-form';

describe('AddNewExpense', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddNewExpense onSubmittData={function (enteredExpenseData: ExpenseFormData): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(baseElement).toBeTruthy();
  });
});
