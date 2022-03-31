import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

const OrderCompleted = () => {
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((current, prev) => current + prev, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <LottieView
        style={{height: 100, alignSelf: 'center'}}
        source={require('../assets/animations/check-mark.json')}
        autoPlay
        speed={0.8}
        loop={false}
      />
      <Text
        style={{fontWeight: '700', fontSize: 18, color: '#333', margin: 20}}>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <LottieView
        style={{height: 200, alignSelf: 'center'}}
        source={require('../assets/animations/cooking.json')}
        autoPlay
        speed={0.8}
      />
    </SafeAreaView>
  );
};

export default OrderCompleted;
