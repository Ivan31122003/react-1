import { useState } from 'react';
import classes from './MyGroup.module.scss';

export function MyGroup({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.myGroup}>
      <div className={classes.myGroupHeader} onClick={() => setIsOpen(!isOpen)}>
        <label className={classes.myGroupLabel}>{label}</label>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      <div
        className={`${classes.myGroupContent} ${isOpen ? classes.open : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
