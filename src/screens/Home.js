import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, {
  localRestaurants,
} from '../components/home/RestaurantItems';
import {Divider} from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY =
  'q0YH3W0_RKyQi-35NqV6sRMuhLUcbeIZKumhR4DOlJSkz5U5xMzpZ2rGi8RC5PaNZC8lgeqlQZHj3sbPHPy4R7urTRKomZ0j6y4ts_sbqG9Cb-ZwUsxGJXshPt01YnYx';

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const URL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(URL, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLocaleLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar city={city} cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
         />
      </ScrollView>
      <Divider width={0.5} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
