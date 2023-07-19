import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function PrimaryButton({ text, className, ...rest }: ButtonProps) {
  const styles = "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded " + className
  return (
    <button className={styles} {...rest}>
      {text}
    </button>
  );
}