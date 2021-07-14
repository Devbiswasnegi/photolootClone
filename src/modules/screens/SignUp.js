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
import {useDispatch, useSelector} from 'react-redux';
import {signUpEmail, signUpPassword} from '../../actions/Action';

const onEye = require('../../assets/onEye.png');
const offEye = require('../../assets/offEye.png');

const check = require('../../assets/checkGreen.png');
const unCheck = require('../../assets/uncheckGreen.png');

const SignUp = props => {
  const [eye, setEye] = useState(false);
  const [getCheck, setGetCheck] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const signup = useSelector(state => state);
  const dispatch = useDispatch();

  console.log('scmsicmocm', signup);

  return (
    <SafeAreaView style={styles.safe}>
      <ImageHeader
        back={require('../../assets/backArrow.png')}
        logo={require('../../assets/logoSign.png')}
        onpress={() => props.navigation.navigate('SignIn')}
      />
      <View style={styles.mainView}>
        <Title titleText="Sign Up" />

        <CustomInput ph="Name" oct={text => setName(text)} />

        <CustomInput ph="Username" oct={text => setUsername(text)} />

        <CustomInput
          ph="Email Address"
          oct={text => {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(text) === false) {
              return false;
            } else {
              setSignupEmail(text);
            }
          }}
          value={signup.text}
        />

        <View>
          <CustomInput
            ph="Password"
            oct={text => setSignupPassword(text)}
            secure={eye}
          />

          <TouchableOpacity style={styles.toucheye} onPress={() => setEye(!eye)}>
            <Image source={eye ? offEye : onEye} style={styles.eye} />
          </TouchableOpacity>
        </View>
        <View style={styles.checkView}>
          <TouchableOpacity onPress={() => setGetCheck(!getCheck)}>
            <Image source={getCheck ? check : unCheck} />
          </TouchableOpacity>
          <Text style={styles.text1}>I agree to the </Text>
          <TouchableOpacity
            style={styles.tcBtn}
            onPress={() => props.navigation.navigate('TnC')}>
            <Text style={styles.tcText}>Terms & Conditions</Text>
          </TouchableOpacity>
          <Text style={styles.txt2}> of PhotoLoot</Text>
        </View>
        <CustomButton
          btn="Submit"
          onpress={() => {
            console.log(
              'get',
              getCheck,
              name,
              username,
              signupPassword,
              signupEmail,
            );

            if (
              name == '' ||
              username == '' ||
              signupEmail == '' ||
              signupPassword == '' ||
              !getCheck
            ) {
              alert('fill all');
            } else {
              dispatch(
                signUpEmail({
                  name: name,
                  username: username,
                  signupEmail: signupEmail,
                  signupPassword: signupPassword,
                  check: getCheck,
                }),
              );
              props.navigation.navigate('SignIn');
            }
          }}
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
  eye: {
    height: vh(15),
    width: vw(25),
    
   
    resizeMode: 'contain',
  },
  checkView: {
    flexDirection: 'row',
    marginVertical: vh(15),
  },
  text1: {
    marginLeft: vw(5),
    fontSize: normalize(13),
    textAlign: 'center',
    alignSelf: 'center',
  },
  tcBtn: {
    alignSelf: 'center',
  },
  tcText: {
    color: 'orange',
    fontSize: normalize(13),
    alignSelf: 'center',
  },
  txt2: {
    fontSize: normalize(13),
    textAlign: 'center',
    alignSelf: 'center',
  },
  toucheye:{position:"absolute", left: vw(280),top: vh(18),}
});

export default SignUp;
