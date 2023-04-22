import styles from './expense-filter.module.scss';

/* eslint-disable-next-line */
export interface ExpenseFilterProps {
  changeFilterDate: (value: string) => void;
  filterValue: string;
}

export function ExpenseFilter(props: ExpenseFilterProps) {

  const onChangeFilterHandler = (event: React.ChangeEvent<HTMLSelectElement>) : void => {
    const {value} = event.target;
    props.changeFilterDate(value);
  }

  return (
    <div className={styles['expenses-filter']}>
      <div className={styles['expenses-filter__control']}>
        <label>Filter by year</label>
        <select value={props.filterValue} onChange={onChangeFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
