// react imports
import { useState } from 'react';
// styles imports
import styles from './expense.module.scss';

// component imports
import { ExpenseFilter } from '../expense-filter/expense-filter';
import Card from '../card';
import { ExpensesItemProps } from './expensesItem';
import ExpensesList from './expnesesList';
import ExpenseChart from './expenseChart';

export function Expenses(props: { list: ExpensesItemProps[] }) {
  const { list } = props;

  const [filterState, setFilterState] = useState('2020');

  const changeFilterDateHandler = (value: string): void => {
    setFilterState(value);
  };

  const filteredExpenses = list.filter(
    (item) => item.date.getFullYear() === +filterState
  );

  return (
    <Card className={styles['expenses']}>
      <ExpenseFilter
        filterValue={filterState}
        changeFilterDate={changeFilterDateHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
