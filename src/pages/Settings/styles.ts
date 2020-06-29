import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 200px;
  margin: 0 auto;

  form {
    width: 300px;

    input {
      width: 100%;
      height: 40px;
      border: 0;
      color: #000;
      padding: 10px;
      margin: 5px 0;
      border-radius: 4px;

      &::placeholder {
        color: #ccc;
      }
    }

    button {
      width: 100%;
      height: 40px;
      border: 0;
      padding: 10px;
      border-radius: 4px;
      background: #1b91ff;
      color: #fff;
    }
  }
`;
