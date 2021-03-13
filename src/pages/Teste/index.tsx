import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import CardSearch from '../../components/CardSearch';

const Teste: React.FC = () => {
  const handleCleaner = useCallback(() => alert('Limpando!'), []);
  const handleSearcher = useCallback(() => alert('Pesquisando!'), []);

  return (
    <CardSearch title="Teste" cleaner={handleCleaner} searcher={handleSearcher}>
      {[0, 1, 2, 3, 4].map((value) => (
        <Grid key={value} item>
          <TextField label="Teste" variant="outlined" size="small" />
        </Grid>
      ))}
    </CardSearch>
  );
};

export default Teste;
