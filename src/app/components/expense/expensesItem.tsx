import Card from '../card';
import styles from './expense.module.scss';
import ExpenseDate from './expenseDate';

export interface ExpensesItemProps {
  date: Date;
  title: string;
  amount: number;
  id: string;
}

export default function ExpensesItem(props: ExpensesItemProps) {
  const { date } = props;
  const { amount } = props;
  const { title } = props;
  return (
    <li>
      <Card className={styles['expense-item']}>
        <ExpenseDate date={date} />
        <div className={styles['expense-item__description']}>
          <h2>{title}</h2>
          <div className={styles['expense-item__price']}>{amount} kr.</div>
        </div>
      </Card>
    </li>
  );
}
