import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { shade } from 'polished';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 8,
    },
    header: {
      background: shade(0.02, '#FFF'),
      padding: 8,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginTop: 8,
      marginRight: 16,
    },
    expandOpen: {
      transform: 'rotate(180deg)',
      marginTop: 8,
      marginRight: 16,
    },
    headerActions: {
      marginTop: 8,
      marginRight: 16,
    },
    cardActions: {
      background: shade(0.02, '#FFF'),
      paddingLeft: 24,
      paddingRight: 24,
    },
  }),
);
