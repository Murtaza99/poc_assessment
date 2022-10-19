import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {BottomTabs} from './navigation';
import {store} from './redux/store';

export const App = (): ReactElement => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
};
