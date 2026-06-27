import classes from './MyMarquee.module.scss';

export function MyMarquee({
  text,
  separator,
}: {
  text: string;
  separator: string;
}) {
  const phrase =
    ` ${separator} ` +
    Array.from({ length: 30 }, () => text).join(` ${separator} `);

  return <span className={classes.myMarqueeTrack}>{phrase}</span>;
}
