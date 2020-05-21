import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Lottie from 'lottie-react-native';

import '~/config/ReactotronConfig';

import splashScreen from './assets/json/splashscreen.json';

import Routes from '~/routes';

const App = () => {
  const [app, setApp] = useState(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#242424" />
      <Lottie source={splashScreen} style={styles.dice} autoPlay loop />
      <Text style={styles.title}>NUMBER GENERATOR</Text>
    </View>,
  );

  const Going = () => {
    setTimeout(() => {
      setApp(<Routes />);
    }, 11700);
  };

  useEffect(() => {
    Going();
  }, []);

  return app;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
  },

  title: {
    fontSize: 25,
    fontFamily: 'serif',
    color: '#F592B6',
  },

  dice: {
    width: 500,
    height: 380,
  },
});

export default App;
