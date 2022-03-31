import React from 'react';
import {View, Text, Image} from 'react-native';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image:
    'https://media-cdn.tripadvisor.com/media/photo-w/16/6e/02/70/zeta-restaurant-lounge.jpg',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [
    {title: 'Thai'},
    {title: 'Comfort Food'},
    {title: 'Coffee'},
    {title: 'Ice Cream'},
    {title: 'Snacks'},
  ],
};

const About = props => {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  const formattedCategories = categories.map(cat => cat.title).join(' · ');

  const description = `${formattedCategories} ${
    price ? ' · ' + price : ''
  } · 💳 · ${rating} ⭐ · (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = props => {
  return (
    <Image source={{uri: props.image}} style={{width: '100%', height: 200}} />
  );
};

const RestaurantName = props => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
        color: '#333',
      }}>
      {props.name}
    </Text>
  );
};

const RestaurantDescription = props => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
      }}>
      {props.description}
    </Text>
  );
};

export default About;
