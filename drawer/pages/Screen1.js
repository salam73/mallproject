import React from 'react';
import { Text, View } from 'react-native';
import Tab1 from './Tab1'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

class HomeScreen3 extends React.Component {
  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>الادارة</Text>
      </View>
    );
  }
}

class SettingsScreen3 extends React.Component {
  render() {
    return (
      <View style={{  justifyContent: 'center', alignItems: 'center' }}>
        <Text>الكادر التدريسي</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  الادارة: Tab1,
  الكادرالتدريسي: SettingsScreen3,
  
},


{
  tabBarOptions: {
    activeTintColor: 'red',
    labelStyle: {
      fontSize: 16,
      color:'white'
    },
    style: {
      backgroundColor: 'black',
    },
  }
},
{
  drawerPosition: 'right',

}

);

export default createAppContainer(TabNavigator);