import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';

const ViewCart = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
      marginBottom: -1,
      borderTopEndRadius: 20,
      borderTopLeftRadius: 20,
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
      color: '#222',
    },
    subTotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    subTotalText: {
      textAlign: 'left',
      fontWeight: '900',
      fontSize: 15,
      marginBottom: 10,
    },
  });

  const addOrderToFireabse = () => {
    setLoading(true);
    setModalVisible(false);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OrderCompleted');
    }, 3000);
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => {
              return <OrderItem key={index} item={item} />;
            })}
            <View style={styles.subTotalContainer}>
              <Text stlye={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => addOrderToFireabse()}>
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'center',
            bottom: 30,
            zIndex: 999,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                marginTop: 20,
                backgroundColor: '#222',
                alignItems: 'center',
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
              onPress={() => setModalVisible(true)}>
              <Text style={{color: 'white', fontSize: 20, marginRight: 30}}>
                View Cart
              </Text>
              <Text style={{color: 'white', fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            zIndex: 9999,
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={1}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
