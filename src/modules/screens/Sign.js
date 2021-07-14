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
import {signInEmail, signInPassword} from '../../actions/Action';

const onEye = require('../../assets/onEye.png');
const offEye = require('../../assets/offEye.png');

const signIn = props => {
  const [log, getLog] = useState('false');
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.mainView}>
        <ImageHeader logo={require('../../assets/logoSign.png')} />
        <Title titleText="Sign In" />
        <View style={styles.viewHeight}>
          <View style={styles.viewFlex}>
            <CustomInput
              ph="Email Address"
              oct={text => {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                if (reg.test(text) === false) {
                  console.log('llll', reg.test(text));
                  return false;
                } else {
                  console.log('kkkkk', reg.test(text));
                  setEmail(text);
                }
              }}
            />
          </View>

          <View style={styles.viewFlex}>
           <View>
              <CustomInput
                ph="Password"
                oct={text => setPassword(text)}
                secure={!eye}
              />
             <TouchableOpacity style={styles.toucheye} onPress={() => setEye(!eye)}>
                <Image
                  source={eye ?   onEye:offEye}
                  resizeMode="contain"
                  style={styles.eye}
                />
              </TouchableOpacity>
              
              </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotPassword')}
          style={styles.alignFlex}>
          <Text style={styles.textForgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton
          btn="Submit"
          onpress={() => {
            if (email == '' || password == '') {
              alert('fill all');
            } else {
              if (
                count.signupData.signupEmail == email &&
                count.signupData.signupPassword == password
              ) {
                dispatch(
                  signInEmail({
                    email: email,
                    password: password,
                    log:true
                    
                  }),
                );
                props.navigation.navigate('ProfileEdit', {nextRoute: 'SignIn'});
              } else {
                alert(
                  'please enter email,password correctly or signUp first!!!',
                );
              }
            }
          }}
        />

        <Text style={styles.connectText}>or Connect With</Text>

        <View style={styles.socialView}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require('../../assets/icFb.png')}
              resizeMode="contain"
              style={styles.imgSocial}
            />
            <Text style={styles.social}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require('../../assets/icInstagram.png')}
              resizeMode="contain"
              style={styles.imgSocial}
            />
            <Text style={styles.social}>Instagram</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accView}>
          <Text style={styles.dontText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.signUP}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: vh(40),
  },
  viewHeight: {
    height: vh(120),
  },
  viewFlex: {
    flex: 1,
  },
  eye: {
    height: vw(15),
    width: vw(25),
   
   
  },
  alignFlex: {
    alignSelf: 'flex-end',
  },

  textForgot: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#B2B2B2',
  },
  connectText: {
    fontSize: normalize(20),
    textAlign: 'center',
    marginVertical: vh(20),
    color: '#B2B2B2',
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialBtn: {
    flexDirection: 'row',
    height: vh(45),

    width: vw(130),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh(10),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imgSocial: {
    marginRight: vw(10),
  },
  social: {
    fontWeight: 'bold',
    fontSize: normalize(14),
  },

  accView: {
    flexDirection: 'row',
    marginTop: vh(30),
    alignSelf: 'center',
  },

  dontText: {
    fontSize: normalize(21),
    color: '#B2B2B2',
  },
  signUP: {
    fontSize: normalize(21),
    color: '#FF9904',
  },
  toucheye:{position:"absolute", left: vw(280),top: vh(18),}
});

export default signIn;
