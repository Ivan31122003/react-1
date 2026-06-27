import classes from './MyInput.module.scss';

export function MyInput({
  label,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={classes.myInputContainer}>
      <label htmlFor={label} className={classes.myInputLabel}>{label}</label>
      <input id={label} {...props} className={classes.myInput} />
    </div>
  );
}
