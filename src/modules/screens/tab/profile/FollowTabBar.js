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
import {normalize, vh, vw} from '../../../dimensions/Dim';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ThumbnailPost from './ThumbnailPost';
import TopTabBar from './TopTabBar';
import Followers from './Followers';
import Following from './Following';

const TOP = createMaterialTopTabNavigator();

const FollowTabBar = () => {
  return (
    <View style={styles.mainView}>
      <TOP.Navigator
        tabBarOptions={{
          showLabel: true,
          showIcon: true,
          style: {backgroundColor: '#FFF8ED'},
          labelStyle:{fontWeight:"bold",color:"grey",fontSize: normalize(13),}
         
        }}>
        <TOP.Screen
          name="TopTabBar"
          component={TopTabBar}
          options={{
            tabBarLabel: 'Posts',
          
          }}
        />

        <TOP.Screen
          name="Followers"
          component={Followers}
          options={{
            tabBarLabel: 'Followers',
          }}
        />

        <TOP.Screen
          name="Following"
          component={Following}
          options={{
            tabBarLabel: 'Following',
          }}
        />
      </TOP.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: 'white'},
});
export default FollowTabBar;
