import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

import {vh, vw} from '../../dimensions/Dim';
import ProfileHeader from '../../components/ProfileHeader'
import FollowTabBar from '../tab/profile/FollowTabBar';
import ProfilePic from './ProfilePic';


const Jane = props => {
  
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
      
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Jane"
        onpress={() => props.navigation.goBack()}
      />

      <View style={styles.pencilView}>
        <ProfilePic
        source={require("../../../assets/follow/ppic1.jpeg")}
         profileName="Jane"
        email="Jane@gm.com"
        bio="Enjoying Jane"
        />
      </View>

      <FollowTabBar />

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
    flex: 1,
  },
  pencilView: {
    marginTop: vh(20),
  },
});

export default Jane;
