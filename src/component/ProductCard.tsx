import React, {ReactElement} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {addZeroes} from '../Common/Utils';
import {useDispatch} from 'react-redux';
import {addProductToCart} from '../redux/action/product';

interface productProps {
  item: any;
}
export const ProductCard = ({item}: productProps): ReactElement => {
  const dispatch = useDispatch();
  const ProductItem = item.item;

  const handleCartButton = (): void => {
    //Add item to cart
    dispatch(addProductToCart(ProductItem));
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${ProductItem.img}`,
          height: 250,
          cache: 'reload',
        }}
        onError={e => 'NA'}
        style={styles.imageView}
      />

      <View style={styles.bodyContainer}>
        <Text style={styles.priceText}>{`$${addZeroes(
          `${ProductItem.price}`,
        )}`}</Text>
        <Text numberOfLines={2} style={styles.productNameView}>
          {ProductItem.name}
        </Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={handleCartButton}>
        <Text style={{color: 'white'}}>ADD TO BAG</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    justifyContent: 'space-between',
    borderBottomColor: '#dfe4ea',
    height: 380,
    shadowColor: '#e424e4',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10.24,
    elevation: 13,
  },
  imageView: {
    height: 250,
    resizeMode: 'stretch',
  },
  productNameView: {
    fontSize: 12,
    marginTop: 5,
  },
  quantityValue: {
    fontSize: 24,
  },
  quantityButton: {
    backgroundColor: '#f2f2f2',
    fontSize: 24,
    width: 30,
    height: 32,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 4,
    justifyContent: 'space-around',
    textAlign: 'center',
    marginHorizontal: 6,
  },
  priceText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },
  bodyContainer: {
    paddingHorizontal: 8,
  },
  cartButton: {
    backgroundColor: 'green',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 10,
  },
});
