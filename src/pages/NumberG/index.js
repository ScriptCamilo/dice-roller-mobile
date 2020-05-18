import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  InputBox,
  Input,
  Button,
  TextB,
  Modal,
  OutputBox,
  Output,
  ErrorContainer,
  ErrorBox,
  ErrorTitle,
  Img,
} from './style';

const DiceRoller = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [errorOn, setErrorOn] = useState(false);
  const [outputOn, setOutputOn] = useState(false);
  const [round, setRound] = useState(0);

  const error = require('../../assets/images/error.png');

  const Generator = () => {
    const x = Math.ceil(max);
    const y = Math.floor(min);
    let rnd = Math.floor(Math.random() * (x - y + 1)) + y;

    if (x === y) {
      rnd = 'Max equal to Min';
    }

    if (x < y) {
      return setErrorOn(!errorOn);
    }

    setRound(rnd);
    return setOutputOn(!outputOn);
  };

  return (
    <Container backgroundColor="#f3e5f5">
      <InputBox>
        <Input holder="MAX" onChangeText={setMax} keyboardType="number-pad" />
        <Input holder="MIN" onChangeText={setMin} keyboardType="number-pad" />
      </InputBox>

      <Button bottom={30} onPress={Generator}>
        <TextB>Generator</TextB>
      </Button>

      {/* OUTPUT MESSAGE */}
      <Modal visible={outputOn} transparent={true} animationType={'slide'}>
        <TouchableWithoutFeedback
          onPress={() => {
            setOutputOn(!outputOn);
          }}>
          <OutputBox>
            <Output>{round}</Output>
          </OutputBox>
        </TouchableWithoutFeedback>
      </Modal>

      {/* ERROR ALERT MESSAGE */}
      <Modal visible={errorOn} transparent={true} animationType="fade">
        <ErrorContainer>
          <ErrorBox>
            <ErrorTitle>
              The MAX number must be greater than the MIN number!
            </ErrorTitle>
            <Img source={error} />
            <Button
              bottom={0}
              onPress={() => setErrorOn(!errorOn)}
              underlayColor="#722836"
              borderColor="#fc5a74">
              <TextB buttonTextColor="#fc5a74">OK</TextB>
            </Button>
          </ErrorBox>
        </ErrorContainer>
      </Modal>
    </Container>
  );
};

export default DiceRoller;
