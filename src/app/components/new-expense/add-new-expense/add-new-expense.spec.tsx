import { render } from '@testing-library/react';

import AddNewExpense from './add-new-expense';

describe('AddNewExpense', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddNewExpense />);
    expect(baseElement).toBeTruthy();
  });
});
