import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

function Button({ className = '', type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={`rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 ${className}`}
      {...props}
    />
  );
}

export default Button;
