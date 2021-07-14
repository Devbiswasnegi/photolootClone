import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {vh, vw} from '../dimensions/Dim';
import Home from './tab/Home';
import Search from './tab/search/Search';
import Profile from './tab/profile/Profile';
import Notification from './tab/Notification';
import Setting from './Setting';
import HomeNav from '../../navigationWhole/HomeNav';
import ProfileNav from '../../navigationWhole/ProfileNav';

const homeOn = require('../../assets/homeOn.png');
const homeOff = require('../../assets/homeOff.png');
const searchOn = require('../../assets/searchOn.png');
const searchOff = require('../../assets/searchOff.png');
const profileOn = require('../../assets/profileOn.png');
const profileOff = require('../../assets/profileOff.png');
const notificationOn = require('../../assets/notificationOn.png');
const notificationOff = require('../../assets/notificationOff.png');
const settingOn = require('../../assets/settingOn.png');
const settingOff = require('../../assets/settingOff.png');

const Tab = createBottomTabNavigator();
const TabBar = (props) => {
  return (
    <Tab.Navigator lazy={true} tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarIcon: ({focused}) => (

            <View>
              <Image
                source={focused ? homeOn : homeOff}
                resizeMode="contain"
                style={{width: vw(40), height: vh(40)}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={focused ? searchOn : searchOff}
                resizeMode="contain"
                style={{width: vw(40), height: vh(40)}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNav"
        component={ProfileNav}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={focused ? profileOn : profileOff}
                resizeMode="contain"
                style={{width: vw(40), height: vh(40)}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={focused ? notificationOn : notificationOff}
                resizeMode="contain"
                style={{width: vw(40), height: vh(40)}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={focused ? settingOn : settingOff}
                resizeMode="contain"
                style={{width: vw(40), height: vh(40)}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
