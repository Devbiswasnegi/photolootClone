import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../../dimensions/Dim';

const ProfilePic = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imgView}>
        <Image source={props.source} style={styles.pic} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{props.profileName}</Text>
          <Text style={styles.emailText}>{props.email}</Text>
          <Text style={styles.bio}>{props.bio}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: vw(400),
    marginLeft: vw(20),
    flexDirection: 'row',
  },
  pic: {
    height: vw(100),
    width: vw(100),
    borderWidth: 2,
    borderRadius: vw(50),
    borderColor: 'orange',
    resizeMode: 'cover',
  },
  imgView: {
    flexDirection: 'row',
  },
  nameView: {
    marginLeft: vw(20),
  },

  nameText: {
    fontWeight: 'bold',
    fontSize: normalize(18),
  },

  emailText: {
    color: 'grey',
    marginTop: vh(10),
    marginBottom: vh(30),
    fontSize: normalize(15),
  },

  bio: {
    color: 'grey',
    fontSize: normalize(16),
  },

  pencil: {
    height: vh(40),
    width: vw(40),
    resizeMode: 'contain',
  },
});

export default ProfilePic;
