import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, label, ...rest }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input {...rest} ref={ref} />
        {errors && <p>{errors.message}</p>}
      </div>
    );
  }
);
