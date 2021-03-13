import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 8px;
  border: 1px solid red;
`;

export const useStyles = makeStyles({
  root: {
    margin: 8,
  },
  header: {
    background: shade(0.02, '#FFF'),
    padding: 8,
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
});
