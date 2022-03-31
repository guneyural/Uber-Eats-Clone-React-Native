import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffe & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <FlatList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={index}
            style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
};

export default Categories;
