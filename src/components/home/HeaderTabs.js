import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderTabs = ({activeTab, setActiveTab}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab == props.text ? 'black' : 'white',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
        activeOpacity={0.6}>
        <Text
          style={{
            color: props.activeTab == props.text ? 'white' : 'black',
            fontSize: 15,
            fontWeight: '900',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabs;
