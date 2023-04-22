import styles from './expense.module.scss';
export default function ExpenseDate(props: { date: Date }) {
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