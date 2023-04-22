import { useState } from 'react';
import styles from './expense-form.module.scss';

/* eslint-disable-next-line */
export interface ExpenseFormProps {
  onSaveExpenseData: (expenseDate: ExpenseFormData) => void;
  onCancel: () => void;
}

export interface ExpenseFormData {
  title: string;
  amount: string;
  date: Date;
}
export function ExpenseForm(props: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [enteredFormState, setEnteredFormState] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // } as ExpenseFormState);

  const titleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // setEnteredFormState((previousState: ExpenseFormState) => {
    //   return {
    //     ...previousState,
    //     title: event.target.value
    //   };
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // setEnteredFormState((previousState: ExpenseFormState) => {
    //   return {
    //     ...previousState,
    //     amount: event.target.value
    //   };
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // setEnteredFormState((previousState: ExpenseFormState) => {
    //   return {
    //     ...previousState,
    //     date: event.target.value
    //   };
    // });
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const expenseData: ExpenseFormData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const cancelHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onCancel();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
