import { EditResume } from '@/widgets/edit-resume';
import { MyMarquee } from '@/shared/ui/my-marquee';
import classes from './HomePage.module.scss';

export function HomePage() {
  const titlePhrase = 'Создай свое резюме';
  const separator = '<>';

  return (
    <div className={classes.homePage}>
      <div className={classes.homePageTitle}>
        <MyMarquee text={titlePhrase} separator={separator} />
      </div>

      <div className={classes.homePageContent}>
        <EditResume />
      </div>
    </div>
  );
}
