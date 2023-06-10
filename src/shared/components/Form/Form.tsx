import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
  encType:
    | 'multipart/form-data'
    | 'application/x-www-form-urlencoded'
    | 'text/plain';
}

export function Form({ children, encType, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} encType={encType} method="post">
      {children}
    </form>
  );
}
