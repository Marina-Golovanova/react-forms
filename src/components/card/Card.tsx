import React from "react";
import { IFormItem } from "../types";

import styles from "./card.module.scss";

type CardProps = {
  card: IFormItem;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__item}>name: {props.card.firstName}</div>
      <div className={styles.card__item}>surname: {props.card.lastName}</div>
      <div className={styles.card__item}>
        birth date: {props.card.birthDate}
      </div>
      <div className={styles.card__item}>country: {props.card.country}</div>
    </div>
  );
};
