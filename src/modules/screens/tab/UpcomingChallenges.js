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
import ProfileHeader from '../../components/ProfileHeader';

const UpcomingChallenges = props => {
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Upcoming Challenges"
        onpress={() => props.navigation.navigate('Home')}
      />
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default UpcomingChallenges;
