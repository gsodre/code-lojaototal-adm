import React, { useCallback } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import { useHistory } from 'react-router-dom';

import {
  BiArrowBack,
  BiChevronDown,
  BiEraser,
  BiSearchAlt,
} from 'react-icons/bi';

import { CardHeader } from '@material-ui/core';
import { useStyles } from './styles';

interface CardProps {
  title: string;
  cleaner(): void;
  searcher(): void;
}

const CardSearch: React.FC<CardProps> = ({
  title,
  children,
  cleaner,
  searcher,
  ...rest
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const history = useHistory();

  const handleBack = useCallback(() => history.goBack(), [history]);
  const handleToggle = useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <IconButton aria-label="voltar" size="small" onClick={handleBack}>
            <BiArrowBack fontSize="inherit" />
          </IconButton>
        }
        action={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            aria-label="expand"
            aria-expanded={expanded}
            size="small"
            onClick={handleToggle}
          >
            <BiChevronDown />
          </IconButton>
        }
        title={title}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={1}>
            {children}
          </Grid>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Grid container justify="space-between" spacing={1}>
            <Button
              variant="outlined"
              size="small"
              endIcon={<BiEraser />}
              onClick={cleaner}
            >
              Limpar
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<BiSearchAlt />}
              onClick={searcher}
            >
              Pesquisar
            </Button>
          </Grid>
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default CardSearch;
