import React from "react";
import { useForm } from "react-hook-form";
import { InputSubmit } from "../input-submit/InputSubmit";
import { FormItem } from "../form-item/FormItem";
import { InputCheckbox } from "../input-checkbox/InputCheckbox";
import { IFormItem } from "../types";
import { Switcher } from "../switcher/Switcher";

import styles from "./form.module.scss";

type FormProps = {
  onSend: (item: IFormItem) => void;
};

export const Form: React.FC<FormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormItem>({
    defaultValues: { country: "Russia", agreePromotion: false, agree: false },
  });

  const onSubmit = (data: IFormItem) => {
    reset();
    props.onSend(data);
  };

  React.useEffect(() => {
    register("firstName", {
      validate: (value) => !!value.length || "Name shoud be set!",
    });
    register("lastName", {
      validate: (value) => !!value.length || "Surname shoud be set!",
    });
    register("birthDate", {
      validate: (value) => !!value.length || "Birth date shoud be set!",
    });
    register("agree", {
      validate: (value) =>
        value || "Please tick this box if you want to proceed",
    });
  }, [register]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        tag="input"
        field="Name"
        {...register("firstName")}
        type="text"
        error={errors.firstName?.message}
      />
      <FormItem
        tag="input"
        field="Surname"
        {...register("lastName")}
        type="text"
        error={errors.lastName?.message}
      />
      <FormItem
        tag="input"
        field="Birth date"
        {...register("birthDate")}
        type="date"
        error={errors.birthDate?.message}
      />
      <FormItem tag="select" field="Country" {...register("country")} />
      <Switcher {...register("agreePromotion")} />
      <InputCheckbox {...register("agree")} error={errors.agree?.message} />
      <InputSubmit />
    </form>
  );
};
