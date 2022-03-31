import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <Icon icon="home" text="Home" active={true} />
      <Icon icon="search" text="Browse" active={false} />
      <Icon icon="shopping-bag" text="Cart" active={false} />
      <Icon icon="receipt" text="Orders" active={false} />
      <Icon icon="user" text="Profile" active={false} />
    </View>
  );
};

const Icon = props => {
  return (
    <TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <FontAwesome5
          name={props.icon}
          size={20}
          style={{
            marginBottom: 3,
            alignItems: 'center',
          }}
          color={props.active ? 'black' : '#444'}
        />
        <Text
          style={{
            color: props.active ? 'black' : 'gray',
            fontSize: 11,
            fontWeight: '600',
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;
