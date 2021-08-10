/* eslint-disable jsx-a11y/no-onchange */
import React from "react";
import cn from "classnames";

import styles from "./form-item.module.scss";

type FormItemProps = {
  tag: "input" | "select";
  field: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  name: string;
  type?: string;
  error?: string;
};

export const FormItem = React.forwardRef<HTMLElement, FormItemProps>(
  function FormItem(props, ref) {
    return (
      <label className={cn(styles.label, { [styles.errorLabel]: props.error })}>
        {props.field}
        {props.tag === "input" ? (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            className={styles.label__item}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        ) : (
          <select
            ref={ref as React.ForwardedRef<HTMLSelectElement>}
            className={styles.label__item}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          >
            <option>Russia</option>
            <option>Belarus</option>
            <option>Ukraine</option>
          </select>
        )}
        <div className={styles.label__error}>{props.error}</div>
      </label>
    );
  }
);
