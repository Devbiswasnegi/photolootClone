import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../../../dimensions/Dim';
import {useSelector} from 'react-redux';

const EditProfile = props => {
  const data = useSelector(state => state);
  console.log('data', data);

  return (
    <View style={styles.mainView}>
      <View style={styles.imgView}>
        <View style={styles.picView}>
        <Image
          source={require('../../../../assets/ProfileIcon/profileEdit.png')}
          style={styles.pic}
        />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{data.profile.profileName}</Text>
          <Text style={styles.emailText}>{data.data.email}</Text>
          <Text style={styles.bio}>{data.profile.bio}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={props.pencil}>
        <Image
          source={require('../../../../assets/ProfileIcon/pencil.png')}
          style={styles.pencil}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: vw(400),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pic: {
    height: vw(100),
    width: vw(100),
    
   
    
    resizeMode: 'contain',
  },
  imgView: {
    flexDirection: 'row',
  },
  nameView: {
    marginLeft: vw(10),
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
  picView:{
    height: vw(104),
    width: vw(104),
    borderWidth: 2,
    borderRadius:vw(52),
    borderColor: 'orange',
    resizeMode: 'contain',
  }
});

export default EditProfile;
