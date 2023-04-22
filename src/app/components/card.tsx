import { PropsWithChildren } from 'react';

import styles from './card.module.scss';
export default function Card(
  props: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
) {
  const classes = props.className
    ? styles['card'] + ' ' + props.className
    : styles['card'];
  return <div className={classes}>{props.children}</div>;
}
