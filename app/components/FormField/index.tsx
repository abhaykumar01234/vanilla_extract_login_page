import type { ComponentPropsWithRef, ReactNode, FC } from "react";
import { forwardRef } from "react";
import * as s from "./formfield.css";

export type FormFieldProps = Omit<ComponentPropsWithRef<"input">, "id"> & {
  id: string;
  label: ReactNode;
};

export const FormField: FC<FormFieldProps> = forwardRef(
  ({ id, label, ...props }, ref) => {
    return (
      <div className={s.formGroupCSS}>
        <label htmlFor={id}>{label}</label>
        <input id={id} className={s.inputCSS} {...props} ref={ref} />
      </div>
    );
  }
);

FormField.displayName = "FormField";
