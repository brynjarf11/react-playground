import ChartBar from './chart-bar';
import styles from './chart.module.scss';

/* eslint-disable-next-line */
export interface ChartProps {
  dataPoints: ChartDataPoint[];
}

export interface ChartDataPoint {
  value: number;
  label: string;
}

export function Chart(props: ChartProps) {

  const dataPointValues = props.dataPoints.map(x => x.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className={styles['chart']}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
