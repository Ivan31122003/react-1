import classes from './MySelect.module.scss';

export function MySelect({
  label,
  children,
  ...props
}: {
  label: string;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={classes.mySelectContainer}>
      <label htmlFor={label} className={classes.mySelectLabel}>
        {label}
      </label>
      <select id={label} {...props} className={classes.mySelect}>
        {children}
      </select>
    </div>
  );
}
