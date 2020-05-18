import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {Container, DiceBox, Button, TextB} from './style';

import diceLoop from '../../assets/json/dice-loop.json';
import diceOne from '../../assets/json/dice-one.json';
import diceTwo from '../../assets/json/dice-two.json';
import diceThree from '../../assets/json/dice-three.json';
import diceFour from '../../assets/json/dice-four.json';
import diceFive from '../../assets/json/dice-five.json';
import diceSix from '../../assets/json/dice-six.json';

// let dice = require('../../../dice-loop.json');

const DiceRoller = () => {
  // const [onOff, setOnOff] = useState(true);
  const [diceAnime, setDiceAnime] = useState(
    <Lottie source={diceLoop} style={styles.dice} />,
  );

  function DiceNumber() {
    const rnd = Math.floor(Math.random() * 6 + 1);
    console.log(rnd);

    setDiceAnime(
      <Lottie source={diceLoop} style={styles.dice} autoPlay loop={true} />,
    );

    setTimeout(() => {
      if (rnd === 1) {
        return setDiceAnime(
          <Lottie source={diceOne} style={styles.dice} autoPlay loop={false} />,
        );
      }

      if (rnd === 2) {
        return setDiceAnime(
          <Lottie source={diceTwo} style={styles.dice} autoPlay loop={false} />,
        );
      }

      if (rnd === 3) {
        return setDiceAnime(
          <Lottie
            source={diceThree}
            style={styles.dice}
            autoPlay
            loop={false}
          />,
        );
      }

      if (rnd === 4) {
        return setDiceAnime(
          <Lottie
            source={diceFour}
            style={styles.dice}
            autoPlay
            loop={false}
          />,
        );
      }

      if (rnd === 5) {
        return setDiceAnime(
          <Lottie
            source={diceFive}
            style={styles.dice}
            autoPlay
            loop={false}
          />,
        );
      }

      if (rnd === 6) {
        return setDiceAnime(
          <Lottie source={diceSix} style={styles.dice} autoPlay loop={false} />,
        );
      }
    }, 1000);
  }

  // useEffect(() => {
  //   DiceNumber();
  // }, [DiceAnime]);

  return (
    <Container>
      <DiceBox>{diceAnime}</DiceBox>
      <Button onPress={DiceNumber}>
        <TextB>Spin</TextB>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 180,
    height: 180,
  },
});
export default DiceRoller;
