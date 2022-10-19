import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {ProductState} from '../Model/ProductState';
import {CartScreen} from '../screen/CartScreen';
import {ProductScreen} from '../screen/ProductScreen';

export const BottomTabs = () => {
  const cartCount = useSelector((state: ProductState) =>
    state.cartCount ? state.cartCount : 0,
  );
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}): JSX.Element => {
            return <Image source={require('../images/home.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: cartCount > 0 ? cartCount : undefined,
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}): JSX.Element => {
            return <Image source={require('../images/cart.png')} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
