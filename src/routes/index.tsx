import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Layout from '../pages/_layouts/default';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Teste from '../pages/Teste';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Layout>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/teste" component={Teste} isPrivate />
    </Layout>
  </Switch>
);

export default Routes;
