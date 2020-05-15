import React, {useState} from 'react';
import {Container, InputBox, Input, Button, TextB} from './style';

const DiceRoller = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const Generator = () => {
    const x = Math.ceil(max);
    const y = Math.floor(min);
    const rnd = Math.floor(Math.random() * (x - y + 1)) + y;

    if (min === max) {
      return max;
    }

    if (x < y) {
      return 'Error';
    }

    return rnd;
  };

  return (
    <Container>
      <InputBox>
        <Input holder="MAX" onChangeText={setMax} />
        <Input holder="MIN" onChangeText={setMin} />
      </InputBox>

      <Button
        onPress={() => {
          alert(`Your number is ${Generator()}`);
        }}>
        <TextB>Generator</TextB>
      </Button>
    </Container>
  );
};

export default DiceRoller;
