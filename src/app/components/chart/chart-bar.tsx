import styles from './chart-bar.module.scss';

/* eslint-disable-next-line */
export interface ChartBarProps {
  maxValue: number | null;
  value: number;
  label: string;
  key: string;
}

export function ChartBar(props: ChartBarProps) {
  const { label } = props;
  let fillValue = 0;
  if (props.maxValue) {
    fillValue = Math.round((props.value / props.maxValue) * 100);
  }
  const barFillHeight = `${fillValue}%`;
  return (
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles['chart-bar__label']}>{label}</div>
    </div>
  );
}

export default ChartBar;
