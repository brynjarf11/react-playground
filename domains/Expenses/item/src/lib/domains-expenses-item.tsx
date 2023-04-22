import { useState } from 'react';
import styles from './domains-expenses-item.module.scss';

/* eslint-disable-next-line */
export interface ExpensesItemProps {
  date: Date;
  title: string;
  amount: number;
  id: string;
}

function ExpensesItem(props: ExpensesItemProps) {
  const { date } = props;
  const [title, setTitle] = useState(props.title);
  const { amount } = props;


  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setTitle('Updated!');
  };
  return (
    <div className={styles['expense-item']}>
      <ExpenseDate date={date} />
      <div className={styles['expense-item__description']}>
        <h2>{title}</h2>
        <div className={styles['expense-item__price']}>{amount} kr.</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </div>
  );
}

export function Expenses(props: {list: ExpensesItemProps[]}) {
  const { list } = props;
  return (
    <>
      {list.map((item) => {
        return <div key={item.id} className={styles['expenses']}>
          <ExpensesItem {...item}/>
        </div>
      })}
    </>
  )
}

function ExpenseDate(props: { date: Date }) {
  const year = props.date.toLocaleString('is-IS', { year: 'numeric' });
  const month = props.date.toLocaleString('is-IS', { month: 'long' });
  const day = props.date.toLocaleString('is-IS', { day: 'numeric' });

  return (
    <div className={styles['date']}>
      <div className={styles['day']}>{day}</div>
      <div className={styles['month']}>{month}</div>
      <div className={styles['year']}>{year}</div>
    </div>
  );
}
