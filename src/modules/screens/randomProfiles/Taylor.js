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


const Taylor = props => {
  
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Taylor"
        onpress={() => props.navigation.goBack()}
      />

      <View style={styles.pencilView}>
        <ProfilePic 
        source={require("../../../assets/follow/ppic5.jpeg")}
        profileName="Taylor"
        email="taylor@gm.com"
        bio="Enjoying adventure"
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

export default Taylor;
