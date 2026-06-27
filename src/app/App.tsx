import { Outlet } from 'react-router-dom';
import classes from '@/app/App.module.scss';

export function App() {
  return (
    <main className={classes.app}>
      <Outlet />
    </main>
  );
}
