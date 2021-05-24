import React, { ReactChildren } from 'react';
import styles from "./Avatar.module.css";
interface Props  {
    children : React.ReactChild;
}
export default function Container({children}: Props) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
}
