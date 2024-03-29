import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItems = ({navigation, ...props}) => {
  return (
    <>
      {props.restaurantData ? (
        props.restaurantData.map((restaurant, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              style={{marginBottom: 30}}
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  name: restaurant.name,
                  image: restaurant.image_url,
                  price: restaurant.price,
                  reviews: restaurant.review_count,
                  rating: restaurant.rating,
                  categories: restaurant.categories,
                })
              }>
              <View
                style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo
                  name={restaurant.name}
                  rating={restaurant.rating}
                />
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: '800', color: '#333'}}>
            Loading...
          </Text>
        </View>
      )}
    </>
  );
};

const RestaurantImage = props => {
  return (
    <>
      <Image
        source={{uri: props.image}}
        style={{width: '100%', height: 180, borderRadius: 10}}
      />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 13, color: 'gray'}}>30-45 ˙ min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#dedede',
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;
