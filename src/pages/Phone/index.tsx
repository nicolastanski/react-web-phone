import React, { useCallback, useState, ChangeEvent } from 'react';

import { FiPhone, FiDelete } from 'react-icons/fi';

import { isNumber } from 'util';
import { Container, Content, DialBox, DialedNumbers, DialPad } from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';

const Phone: React.FC = () => {
  const [dialedNumber, setDialedNumber] = useState('');

  const handleDialNumber = useCallback(
    (number: string) => {
      const concatened = dialedNumber + String(number);
      setDialedNumber(concatened);

      console.log(concatened);
    },
    [dialedNumber]
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (isNumber(e.target.value)) {
      setDialedNumber(e.target.value);
    }
  }, []);

  const handleDelete = useCallback(() => {
    const updatedDialedNumber = dialedNumber.slice(0, -1);

    setDialedNumber(updatedDialedNumber);
  }, [dialedNumber]);

  const handleDial = useCallback(() => {
    // const socket = new JsSIP.WebSocketInterface('wss://sip.com.br');
    // const configuration = {
    //   sockets: [socket],
    //   uri: 'sip:nicolas@sip.com.br',
    //   password: '123123',
    // };
    // const ua = new JsSIP.UA(configuration);
    // ua.start();
  }, []);

  const handleHangup = useCallback(() => {}, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <DialBox>
            <DialedNumbers value={dialedNumber} onChange={handleInputChange} />

            <Button type="button" onClick={handleDelete} size={5}>
              <FiDelete size={30} color="#000" />
            </Button>
          </DialBox>

          <DialPad>
            <Button onClick={() => handleDialNumber('1')}>1</Button>
            <Button onClick={() => handleDialNumber('2')}>2</Button>
            <Button onClick={() => handleDialNumber('3')}>3</Button>

            <Button onClick={() => handleDialNumber('4')}>4</Button>
            <Button onClick={() => handleDialNumber('5')}>5</Button>
            <Button onClick={() => handleDialNumber('6')}>6</Button>

            <Button onClick={() => handleDialNumber('7')}>7</Button>
            <Button onClick={() => handleDialNumber('8')}>8</Button>
            <Button onClick={() => handleDialNumber('9')}>9</Button>

            <Button onClick={() => handleDialNumber('*')}>*</Button>
            <Button onClick={() => handleDialNumber('0')}>0</Button>
            <Button onClick={() => handleDialNumber('#')}>#</Button>
          </DialPad>
        </Content>
      </Container>
    </>
  );
};

export default Phone;
