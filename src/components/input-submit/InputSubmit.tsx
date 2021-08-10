import React from "react";

import styles from "./input-submit.module.scss";

export const InputSubmit: React.FC = () => {
  return <input className={styles.submit} type="submit" value="send" />;
};
