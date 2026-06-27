import classes from './MyButton.module.scss';

export function MyButton({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={classes.myButton}>
      {children}
    </button>
  );
}
