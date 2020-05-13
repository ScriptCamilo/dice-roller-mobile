import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {Container, DiceBox, Button, TextB} from './style';

import diceLoop from '../../assets/Json/dice-loop.json';
import diceOne from '../../assets/Json/dice-one.json';
import diceTwo from '../../assets/Json/dice-two.json';
import diceThree from '../../assets/Json/dice-three.json';
import diceFour from '../../assets/Json/dice-four.json';
import diceFive from '../../assets/Json/dice-five.json';
import diceSix from '../../assets/Json/dice-six.json';

const DiceRoller = () => {
  // const [onOff, setOnOff] = useState(true);
  const [diceAnime, setDiceAnime] = useState(
    <Lottie source={diceLoop} style={styles.dice} />,
  );
  const [diceAnime2, setDiceAnime2] = useState(
    <Lottie source={diceLoop} style={styles.dice} />,
  );

  function DiceNumber() {
    const rnd = Math.floor(Math.random() * 6 + 1);
    const rnd2 = Math.floor(Math.random() * 6 + 1);
    console.log(rnd);
    console.log(rnd2);

    setDiceAnime(
      <Lottie source={diceLoop} style={styles.dice} autoPlay loop={true} />,
    );

    setDiceAnime2(
      <Lottie source={diceLoop} style={styles.dice} autoPlay loop={true} />,
    );

    // DICE NUMBER ONE
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

    // DICE NUMBER TWO
    setTimeout(() => {
      if (rnd2 === 1) {
        return setDiceAnime2(
          <Lottie source={diceOne} style={styles.dice} autoPlay loop={false} />,
        );
      }

      if (rnd2 === 2) {
        return setDiceAnime2(
          <Lottie source={diceTwo} style={styles.dice} autoPlay loop={false} />,
        );
      }

      if (rnd2 === 3) {
        return setDiceAnime2(
          <Lottie
            source={diceThree}
            style={styles.dice}
            autoPlay
            loop={false}
          />,
        );
      }

      if (rnd2 === 4) {
        return setDiceAnime2(
          <Lottie
            source={diceFour}
            style={styles.dice}
            autoPlay
            loop={false}
          />,
        );
      }

      if (rnd2 === 5) {
        return setDiceAnime2(
          <Lottie
            source={diceFive}
            style={styles.dice}
            autoPlay
            loop={false}
          />,
        );
      }

      if (rnd2 === 6) {
        return setDiceAnime2(
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
      <DiceBox>
        {diceAnime}
        {diceAnime2}
      </DiceBox>
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
