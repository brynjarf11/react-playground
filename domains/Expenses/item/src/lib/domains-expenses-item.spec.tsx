import { render } from '@testing-library/react';

import { Expenses, ExpensesItemProps } from './domains-expenses-item';

describe('DomainsExpensesItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Expenses
        list={[
          {
            date: new Date(),
            title: 'Some title',
            amount: 0,
          } as ExpensesItemProps,
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
