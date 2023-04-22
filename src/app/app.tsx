import { Expenses } from './components/expense/expense';

import NewExpense, {
  NewExpenseData,
} from './components/new-expense/new-expense';
import Card from './components/card';
import { useState } from 'react';

import styles from  './app.module.scss';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 2000,
    date: new Date(2020, 7, 12),
  },
  {
    id: 'e2',
    title: 'New Tv',
    amount: 450000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 45000,
    date: new Date(2022, 7, 12),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 300000,
    date: new Date(2022, 8, 12),
  },
];

export function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (data: NewExpenseData): void => {
    setExpenses((prevExpense) => {
      return [
        { ...data, amount: +data.amount, date: new Date(data.date) },
        ...prevExpense,
      ];
    });
  };

  return (
    <Card className={styles['max-height'] + ' ' + styles['padding-top']}>
      <NewExpense addExpenseData={addExpenseHandler} />
      <Expenses list={expenses} />
    </Card>
  );
}

export default App;
