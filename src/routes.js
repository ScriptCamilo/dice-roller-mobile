import 'react-native-gesture-handler';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Dice from '~/pages/Dice';
import Double from '~/pages/Double';
import NumberG from '~/pages/NumberG';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dice"
        tabBarOptions={{
          activeTintColor: '#cc0000',
          labelStyle: styles.labelStyle,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Dice') {
              iconName = focused ? 'dice-five' : 'dice-one';
            } else if (route.name === 'Double') {
              iconName = 'dice';
            } else if (route.name === 'Number Generator') {
              iconName = 'pencil-alt';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Dice" component={Dice} />
        <Tab.Screen name="Double" component={Double} />
        <Tab.Screen name="Number Generator" component={NumberG} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
});

export default Routes;
