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


const Kartik = props => {
  
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
      
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Kartik"
        onpress={() => props.navigation.goBack()}
      />

      <View style={styles.pencilView}>
        <ProfilePic
        source={require("../../../assets/follow/ppic1.jpeg")}
         profileName="Kartik"
        email="Kartik@gm.com"
        bio="Enjoying Kartik"
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

export default Kartik;
