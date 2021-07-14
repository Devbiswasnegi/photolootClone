import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import {vh, vw} from '../../../dimensions/Dim';
import ProfileHeader from '../../../components/ProfileHeader';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {profile} from '../../../../actions/Action';

const ProfileEdit = props => {
  const dispatch = useDispatch();
  const count = useSelector(state => state);

  const [profileName, getProfileName] = useState('');
  const [username, getUsername] = useState('');
  const [bio, getBio] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../../assets/close.png')}
        textTitle="Edit Profile"
        onpress={() => props.navigation.goBack()}
      />
      <View style={styles.mainView}>
        <TouchableOpacity>
          <Image
            source={require('../../../../assets/ProfileIcon/profileEdit.png')}
            style={styles.imgEdit}
          />
        </TouchableOpacity>

        <CustomInput ph="Name" oct={text => getProfileName(text)} />

        <CustomInput ph="Username" oct={text => getUsername(text)} />

        <TextInput
          style={styles.bioText}
          placeholder="Bio"
          onChangeText={text => getBio(text)}
        />
        <View style={styles.textView}>
          <Text>{count.data.email}</Text>
        </View>

        <CustomButton
          btn="Update"
          onpress={() => {
            dispatch(
              profile({
                profileName: profileName,
                username: username,
                bio: bio,
              }),
            );

            if (profileName == '' || username == '') {
              alert('fill all');
            } else {
              props.navigation.navigate('TabBar');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    width: vw(350),
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgEdit: {
    height: vw(100),
    width: vw(100),
    borderWidth: vw(2),
    borderRadius: vw(50),
    borderColor: 'orange',
    marginVertical: vh(30),
  },
  bioText: {
    height: vh(120),
    width: vw(320),
    alignSelf: 'center',
    borderRadius: vh(10),
    marginVertical: vh(5),
    padding: vh(10),
    backgroundColor: '#c9c9c950',
  },
  textView: {
    height: vh(45),
    width: vw(320),
    alignSelf: 'center',
    borderRadius: vh(10),
    marginVertical: vh(5),
    paddingLeft: vh(10),
    backgroundColor: '#c9c9c950',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

export default ProfileEdit;
