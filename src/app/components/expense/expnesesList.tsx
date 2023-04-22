import ExpensesItem, { ExpensesItemProps } from './expensesItem';

import styles from './expensesList.module.scss';

const ExpensesList = (props: { items: ExpensesItemProps[] }) => {
  if (props.items.length === 0) {
    return <h2 className={styles['expenses-list__fallback']}>Found no expenses.</h2>
  }
  return (
    <ul className={styles['expenses-list']}>
      {props.items.map((item) => (
        <div key={item.id} className={styles['expenses']}>
          <ExpensesItem {...item} />
        </div>
      ))}
    </ul>
  );
};

export default ExpensesList;
