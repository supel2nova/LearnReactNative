/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailCoin from './src/screens/DetailCoin';
import ListCoin from './src/screens/ListCoin';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen
            name="listCoin"
            component={ListCoin}
            options={{title: 'List Coin'}}
          />
          <Stack.Screen
            name="detailCoin"
            component={DetailCoin as any}
            options={{title: 'Detail Coin'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
