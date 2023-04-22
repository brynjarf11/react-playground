import { useState } from 'react';
import styles from './add-new-expense.module.scss';
import ExpenseForm, { ExpenseFormData } from '../expense-form';

/* eslint-disable-next-line */
export interface AddNewExpenseProps {
  onSubmittData: (enteredExpenseData: ExpenseFormData) => void;
}

export function AddNewExpense(props: AddNewExpenseProps) {
  const openAddNewExepenseForm = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    setIsAddingState(true);
  };

  const closeFormHandler = () : void => {
    setIsAddingState(false);
  } 

  const addDataFromNewExepenseForm = (
    enteredExpenseData: ExpenseFormData
  ): void => {
    props.onSubmittData(enteredExpenseData);
    closeFormHandler();
  };
  const [isAddingState, setIsAddingState] = useState(false);
  if (!isAddingState) {
    return (
      <button type="button" onClick={openAddNewExepenseForm}>
        Add New Expense
      </button>
    );
  }
  return <ExpenseForm onCancel={closeFormHandler} onSaveExpenseData={addDataFromNewExepenseForm} />;
}

export default AddNewExpense;
