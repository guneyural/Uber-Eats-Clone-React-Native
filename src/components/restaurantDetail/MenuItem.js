import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

const foods = [
  {
    title: 'Lahmacun',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://borakoctr.com/wp-content/uploads/2021/02/lahmacun.jpg',
  },
  {
    title: 'Sarma',
    description: 'Amazing Indian dish with tenderloin chicken off the sizzle',
    price: '$19.20',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/8a/a8/60/edirne-de-yemek-kulturune.jpg',
  },
  {
    title: 'İskender',
    description:
      'Chilaquiles with cheese and sauce. A deleicious Mexican food.',
    price: '$24.50',
    image:
      'https://st2.depositphotos.com/9050074/11946/i/950/depositphotos_119467282-stock-photo-iskender-kebab-turkish-traditional-food.jpg',
  },
  {
    title: 'Tembel Mantı',
    description:
      'Chilaquiles with cheese and sauce. A deleicious Mexican food.',
    price: '$14.50',
    image:
      'https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/kozalak-manti-asama-10.jpg',
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#333',
  },
});

const MenuItem = ({restaurantName}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartReducer.selectedItems.items);

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {...item, restaurantName, checkboxValue},
    });

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <View style={styles.menuItemStyle}>
                <BouncyCheckbox
                  iconStyle={{borderColor: 'lightgray', borderRadius: 5}}
                  fillColor="green"
                  onPress={checkboxValue => selectItem(item, checkboxValue)}
                  isChecked={items.find(
                    selectedItems =>
                      selectedItems.restaurantName == restaurantName &&
                      selectedItems.title == item.title,
                  )}
                />
                <FoodInfo food={item} />
                <FoodImage food={item} />
              </View>
              <Divider
                width={0.5}
                orientation="vertical"
                style={{marginHorizontal: 20}}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const FoodInfo = props => {
  return (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = props => {
  return (
    <View>
      <Image
        source={{uri: props.food.image}}
        style={{width: 100, height: 100, borderRadius: 8}}
      />
    </View>
  );
};

export default MenuItem;
