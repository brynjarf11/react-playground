import AddNewExpense from './add-new-expense/add-new-expense';
import { ExpenseFormData } from './expense-form';
import styles from './new-expense.module.scss';

/* eslint-disable-next-line */
export interface NewExpenseProps {
  addExpenseData: (data: NewExpenseData) => void;
}

export interface NewExpenseData extends ExpenseFormData {
  id: string;
}

const NewExpense = (props: NewExpenseProps) => {

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
    const expenseData: NewExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    } 
    props.addExpenseData(expenseData);
  }
  return (
    <div className={styles['new-expense']}>
      <AddNewExpense onSubmittData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
