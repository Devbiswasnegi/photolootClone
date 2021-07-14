import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {vh, vw} from '../dimensions/Dim';
import CustomInput from '../components/CustomInput';
import ImageHeader from '../components/ImageHeader';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';

const forgotPassword = props => {
  console.log('fp', props);
  return (
    <SafeAreaView style={styles.safe}>
      <ImageHeader
        back={require('../../assets/backArrow.png')}
        logo={require('../../assets/logoSign.png')}
        onpress={() => props.navigation.navigate('SignIn')}
      />
      <View style={styles.mainView}>
        <Title
          titleText="Forgot Password?"
          contentText="Don't worry! enter your registered email ID in order to receive reset password instructions."
        />
        <View style={styles.inputView}>
          <CustomInput />
        </View>
        <CustomButton
          btn="Submit"
          onpress={() => props.navigation.navigate('Verification')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
    flex: 1,
  },
  mainView: {
    width: vw(320),
    alignSelf: 'center',
  },
  inputView: {
    marginTop: vh(20),
  },
});

export default forgotPassword;
