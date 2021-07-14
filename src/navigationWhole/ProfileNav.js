import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CurrentChallenges from '../modules/screens/tab/CurrentChallenges';

import UpcomingChallenges from '../modules/screens/tab/UpcomingChallenges';
import HallOfFrame from '../modules/screens/tab/HallOfFrame';
import Home from '../modules/screens/tab/Home';
import First from '../modules/screens/tab/First';
import Second from '../modules/screens/tab/Second';
import Profile from '../modules/screens/tab/profile/Profile';
import Gallery from '../modules/screens/tab/Gallery';

import Search from '../modules/screens/tab/search/Search';
import ProfileEdit from '../modules/screens/tab/profile/ProfileEdit';

const Stack = createStackNavigator();

export default class ProfileNav extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Profile" headerMode="false">
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        {/* <Stack.Screen name='ProfileName' component={ProfileName}/> */}
      </Stack.Navigator>
    );
  }
}
