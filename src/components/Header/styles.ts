import styled from 'styled-components';

export const Container = styled.div`
  background: #1b91ff;
  height: 60px;
  margin-bottom: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1120px;
`;

export const Nav = styled.nav`
  text-align: center;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 16px;
    text-transform: uppercase;
  }

  .selected {
    border-bottom: 1px solid #fff;
  }
`;
