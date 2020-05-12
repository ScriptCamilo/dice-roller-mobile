import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Container} from './style';

import diceLoop from '../../assets/Json/dice-loop.json';
import diceOne from '../../assets/Json/dice-one.json';
import diceTwo from '../../assets/Json/dice-two.json';
import diceThree from '../../assets/Json/dice-three.json';
import diceFour from '../../assets/Json/dice-four.json';
import diceFive from '../../assets/Json/dice-five.json';
import diceSix from '../../assets/Json/dice-six.json';

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
    }, 2950);
  }

  // useEffect(() => {
  //   DiceNumber();
  // }, [DiceAnime]);

  return (
    <Container>
      {diceAnime}
      <Button title="Spin" onPress={DiceNumber} />
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
