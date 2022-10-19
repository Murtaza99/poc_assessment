import React, {ReactElement} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  decrementCartItem,
  incrementCartItem,
  removeProduct,
} from '../redux/action/product';
import {addZeroes} from '../Common/Utils';
import {Product} from '../Model/Product';

interface CartItemProps {
  data: Product;
}

export const CartItemCard = ({data}: CartItemProps): ReactElement => {
  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    //remove from cart
    dispatch(removeProduct(data));
  };

  const handleDecrement = () => {
    if (data.quantity > 1) {
      //decrement value until it reaches 1
      dispatch(decrementCartItem(data));
    }
  };

  const handleIncrement = () => {
    //Increment cart item quantity
    dispatch(incrementCartItem(data));
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${data.img}`,
          cache: 'reload',
        }}
        onError={e => 'NA'}
        style={styles.imageView}
      />
      <View style={{width: '60%'}}>
        <Text numberOfLines={2} style={styles.productNameView}>
          {data.name}
        </Text>
        <Text style={styles.priceText}>{`$${addZeroes(`${data.price}`)}`}</Text>
        <View style={styles.quantityView}>
          <Text style={styles.quantityButton} onPress={handleDecrement}>
            -
          </Text>
          <Text style={styles.quantityValue}>
            {data.quantity ? data.quantity : 0}
          </Text>
          <Text style={styles.quantityButton} onPress={handleIncrement}>
            +
          </Text>
        </View>
        <View style={styles.removeButton}>
          <Button title="Remove" onPress={handleRemoveButton}></Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 170,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10.24,
    elevation: 13,
    borderRadius: 10,
  },
  imageView: {
    width: '35%',
    resizeMode: 'stretch',
    marginRight: 10,
  },
  priceText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },
  productNameView: {
    fontSize: 12,
  },
  quantityButton: {
    backgroundColor: '#f2f2f2',
    fontSize: 20,
    width: 25,
    height: 27,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 4,
    justifyContent: 'space-between',
    textAlign: 'center',
    marginEnd: 8,
  },
  quantityValue: {
    fontSize: 20,
    marginEnd: 8,
  },
  quantityView: {
    flexDirection: 'row',
    marginTop: 15,
  },
  removeButton: {
    backgroundColor: '#f2f2f2',
    width: 100,
    marginTop: 15,
    borderRadius: 5,
  },
});
