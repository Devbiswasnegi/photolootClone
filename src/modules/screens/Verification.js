import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../dimensions/Dim';
import CustomInput from '../components/CustomInput';
import ImageHeader from '../components/ImageHeader';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';
import ModalVR from './ModalVR';

const verification = props => {
  console.log('fp', props);
  const [isVisible, setIsVisible] = useState(false);

  const onpress = () => {
    setIsVisible(!isVisible);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ImageHeader
        back={require('../../assets/backArrow.png')}
        logo={require('../../assets/logoSign.png')}
        onpress={() => props.navigation.navigate('ForgotPassword')}
      />
      <View style={styles.mainView}>
        <Title
          titleText="Verification"
          contentText="To verify it's you please enter the OTP sent to your registered email ID. "
        />
        <View style={styles.input}>
          <CustomInput />
        </View>
        <ModalVR
          visible={isVisible}
          clear={() => {
            setIsVisible(!isVisible);
            props.navigation.navigate('ResetPassword');
          }}
          modalHeading="Verification Successful"
          text="Your deatails have been verified successfully Welcome to Photoloot app."
          btnText="Let's Go"
        />
        <CustomButton btn="Submit" onpress={onpress} />
      </View>

      <View style={styles.resendBtn}>
        <Text style={styles.otpText}>Don't receive OTP? </Text>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
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
  input: {
    marginTop: vh(20),
  },
  resendBtn: {
    flexDirection: 'row',
    marginTop: vh(30),
    alignSelf: 'center',
  },
  otpText: {
    fontSize: normalize(21),
    color: '#B2B2B2',
  },
  resendText: {
    fontSize: normalize(21),
    color: '#FF9904',
  },
});

export default verification;
