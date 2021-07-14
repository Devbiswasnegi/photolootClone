import React, {useState} from 'react';
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
import ModalVR from './ModalVR';

const resetPassword = props => {
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
        onpress={() => props.navigation.navigate('SignIn')}
      />
      <View style={styles.mainView}>
        <Title
          titleText="Reset Password"
          contentText="Please enter your new password below."
        />
        <View tyle={styles.input}>
          <CustomInput />
        </View>

        <ModalVR
          visible={isVisible}
          clear={() => {
            setIsVisible(!isVisible);
            props.navigation.navigate('SignIn');
          }}
          modalHeading="Password Reset Successful"
          text="Your password was reset successfully. Please sign in with your new password now."
          btnText="Okay"
          onClose={() => setIsVisible(!isVisible)}
        />
        <CustomButton btn="Submit" onpress={onpress} />
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
});
export default resetPassword;
