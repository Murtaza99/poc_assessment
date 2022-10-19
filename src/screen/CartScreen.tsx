import React, {ReactElement} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CartItemCard} from '../component/CartItemCard';
import {Product} from '../Model/Product';
import {ProductState} from '../Model/ProductState';

export const CartScreen = (): ReactElement => {
  const cartList = useSelector((state: ProductState) =>
    state.cartList ? state.cartList : [],
  );

  const NoCartItemMsg = (): JSX.Element => (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Text style={styles.errorMessage}>No Cart Item available</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {cartList.length > 0 ? (
        <FlatList
          data={cartList}
          style={styles.container}
          keyExtractor={(item: Product) => `${item.id}`}
          renderItem={(item: any) => <CartItemCard data={item.item} />}
        />
      ) : (
        <NoCartItemMsg />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorMessage: {
    color: 'black',
    fontSize: 16,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
