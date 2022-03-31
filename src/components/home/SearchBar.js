import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({city, cityHandler}) => {
  return (
    <View
      style={{
        backgroundColor: '#eee',
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
      }}>
      <View style={{marginLeft: 10}}>
        <Ionicons name="location-sharp" size={24} color="black" />
      </View>
      <TextInput
        placeholder="Search"
        value={city}
        onChangeText={text => cityHandler(text)}
        style={{
          backgroundColor: '#eee',
          borderRadius: 20,
          fontWeight: '700',
          marginTop: 1,
          paddingVertical: 12,
          flex: 1,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 8,
          backgroundColor: 'white',
          padding: 9,
          borderRadius: 30,
        }}>
        <AntDesign
          name="clockcircle"
          size={11}
          color="black"
          style={{marginRight: 6}}
        />
        <Text>Search</Text>
      </View>
    </View>
  );
};

export default SearchBar;
