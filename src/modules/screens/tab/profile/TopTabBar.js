import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import ProfileHeader from '../../../components/ProfileHeader';
import {vh, vw} from '../../../dimensions/Dim';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SmallPost from './SmallPost';
import ThumbnailPost from './ThumbnailPost';
import Extra from '../Extra';

const TOP = createMaterialTopTabNavigator();

const thumbOn = require('../../../../assets/ProfileIcon/thumbOn.png');
const thumbOff = require('../../../../assets/ProfileIcon/thumbOff.png');
const smallOn = require('../../../../assets/ProfileIcon/smallOn.png');
const smallOff = require('../../../../assets/ProfileIcon/smallOff.png');

const TopTabBar = () => {
  return (
    <View style={styles.mainView}>
      <TOP.Navigator swipeEnabled={true} tabBarOptions={{showLabel: false, showIcon: true} }>
        <TOP.Screen
          name="SmallPost"
          component={SmallPost}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? smallOn : smallOff} style={styles.img} />
            ),
          }}
        />

        <TOP.Screen
          name="ThumbnailPost"
          component={ThumbnailPost}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? thumbOn : thumbOff} style={styles.img} />
            ),
          }}
        />
      </TOP.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: 20,
    width: 20,
  },
});
export default TopTabBar;
