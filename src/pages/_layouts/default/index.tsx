import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FiLogOut, FiMenu, FiUser } from 'react-icons/fi';
import {
  Wrapper,
  Header,
  HeaderActions,
  Profile,
  DrawerContent,
  DrawerProfile,
} from './styles';

import logo from '../../../assets/images/logo.png';
import { useAuth } from '../../../hooks/auth';

const Dashboard: React.FC = ({ children }) => {
  const history = useHistory();
  const { signOut, user } = useAuth();

  const name = user ? user.nome : undefined;
  const userInfo = user ? `${user.funcao}` : undefined;
  const avatar = <FiUser />;
  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const list = () => (
    <DrawerContent
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img className="gotohome" src={logo} alt="Lojão Total" />

      <DrawerProfile>
        {avatar}
        <div>
          <strong>{name}</strong>
          <span> {userInfo}</span>
        </div>
      </DrawerProfile>

      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/teste')}>
          <ListItemIcon>
            <FiUser />
          </ListItemIcon>
          <ListItemText primary="Teste" />
        </ListItem>
        <ListItem button onClick={() => history.push('/dashboard')}>
          <ListItemIcon>
            <FiUser />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <Wrapper>
      <Header>
        <IconButton onClick={toggleDrawer(true)}>
          <FiMenu />
        </IconButton>

        <Link to="/dashboard">
          <img className="gotohome" src={logo} alt="Lojão Total" />
        </Link>

        <HeaderActions>
          <Profile>
            <div>
              <span>Olá,</span>
              <strong>{user ? user.nome : undefined}</strong>
            </div>
            {avatar}
          </Profile>

          <IconButton onClick={signOut}>
            <FiLogOut />
          </IconButton>
        </HeaderActions>
      </Header>

      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      {children}
    </Wrapper>
  );
};

export default Dashboard;
