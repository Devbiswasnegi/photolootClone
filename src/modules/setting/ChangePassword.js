import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import ProfileHeader from '../components/ProfileHeader';
import {vh, vw} from '../dimensions/Dim';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {changePass} from '../../actions/Action';
import ModalVR from '../screens/ModalVR';

const ChangePassword = props => {
  const [oldpass, getOldpass] = useState('');
  const [newpass, getNewpass] = useState('');
  const dispatch = useDispatch();
  const value = useSelector(state => state);
  const [isVisible, setIsVisible] = useState(false);

  console.log('pass', value.data.password);
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <ProfileHeader
          imageDir={require('../../assets/arrowWhite.png')}
          textTitle="Change Password"
          onpress={() => props.navigation.navigate('Setting')}
        />
        <View style={styles.view1}>
        
          <CustomInput ph="Old Password" oct={text => getOldpass(text)} />
          <CustomInput ph="New Password" oct={text => getNewpass(text)} />

          <ModalVR
            visible={isVisible}
            clear={() => {
              setIsVisible(!isVisible);
              props.navigation.navigate('SignIn');
            }}
            modalHeading="Password Change Successful"
            text="Your password was change successfully. Please sign in with your new password now."
            btnText="Okay"
            onClose={() => setIsVisible(!isVisible)}
          />
          <CustomButton
            btn="Update"
            onpress={() => {
              if (value.data.password === oldpass) {
                dispatch(changePass({name: value.signupData.name,
                  username: value.signupData.username,
                  signupEmail: value.signupData.signupEmail,
                  signupPassword: newpass,}));
                setIsVisible(!isVisible);
              } else {
                alert('old password not matched');
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1:{
    marginTop: vh(30)}
});

export default ChangePassword;
