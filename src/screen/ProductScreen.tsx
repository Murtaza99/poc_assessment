import React, {ReactElement, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import {ProductCard} from '../component/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {addProductList, addProductToCart} from '../redux/action/product';
import {Product} from '../Model/Product';
import {ProductState} from '../Model/ProductState';

export const ProductScreen = (): ReactElement => {
  const dispatch = useDispatch();
  const productList = useSelector((state: ProductState) =>
    state.productList ? state.productList : [],
  );

  useEffect(() => {
    // Call API to get Product
    getProductList();
  }, []);

  const getProductList = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    );
    //store data in redux state
    dispatch(addProductList(response.data));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={productList}
        numColumns={2}
        style={styles.container}
        keyExtractor={(item: Product) => `${item.id}`}
        renderItem={(item: any) => <ProductCard item={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
