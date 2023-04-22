import { useState } from 'react';
import styles from './expense.module.scss';
import { ExpenseFilter } from '../expense-filter/expense-filter';
import Card from '../card';
import { ExpensesItemProps } from './expensesItem';
import ExpensesList from './expnesesList';

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
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
