import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Nav>
          <NavLink to="/" exact activeClassName="selected">
            {' '}
            Phone
          </NavLink>
          <NavLink to="/settings" activeClassName="selected">
            Settings
          </NavLink>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
