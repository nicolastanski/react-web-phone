import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';

const Settings: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <form action="">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />

            <input type="text" name="server" placeholder="SIP Server" />

            <button type="submit">Save</button>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default Settings;
