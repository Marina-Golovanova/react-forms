import React from "react";

import styles from "./input-checkbox.module.scss";

type InputCheckboxProps = {
  value?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  error?: string;
};

export const InputCheckbox = React.forwardRef<
  HTMLInputElement,
  InputCheckboxProps
>(function InputCheckbox(props, ref) {
  return (
    <label className={styles.label} htmlFor="agree">
      <input
        ref={ref}
        className={styles.label__input}
        type="checkbox"
        name="agree"
        checked={props.value}
        onChange={props.onChange}
      />
      I agree with...
      {props.error && <div className={styles.label__error}>{props.error}</div>}
    </label>
  );
});
