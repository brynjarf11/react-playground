import Chart from "../chart/chart";
import { ChartDataPoint } from '../chart/chart';
import { ExpensesItemProps } from "./expensesItem";

export interface ExpenseChartProps {
    expenses: ExpensesItemProps[]
}
export const ExpenseChart = (props: ExpenseChartProps) => {
    const chartDataPoints: ChartDataPoint[] = [
        {
            label: 'Jan',
            value: 0,
        },
        {
            label: 'Feb',
            value: 0,
        },
        {
            label: 'Mar',
            value: 0,
        },
        {
            label: 'Apr',
            value: 0,
        },
        {
            label: 'May',
            value: 0,
        },
        {
            label: 'Jun',
            value: 0,
        },
        {
            label: 'Jul',
            value: 0,
        },
        {
            label: 'Aug',
            value: 0,
        },
        {
            label: 'Sept',
            value: 0,
        },
        {
            label: 'Oct',
            value: 0,
        },
        {
            label: 'Nov',
            value: 0,
        },
        {
            label: 'Des',
            value: 0,
        },
    ];

    for (const expense of props.expenses) {
            const expenseMonth = expense.date.getMonth(); // statring at 0 => January, => 11 => December
            chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpenseChart;