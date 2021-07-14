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
import EditProfile from './EditProfile';
import FollowTabBar from './FollowTabBar';
import {useSelector} from 'react-redux';

const Profile = props => {
  const data = useSelector(state => state);
  console.log('data', data);
  console.log('ptofsdfvsd', props);
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
   
        textTitle={data.profile.username}
        onpress={() => props.navigation.goBack()}
      />

      <View style={styles.pencilView}>
        <EditProfile pencil={() => props.navigation.navigate('ProfileEdit',{nextRoute:"Profile"})} />
      </View>

      <FollowTabBar />

      <View></View>
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

export default Profile;
