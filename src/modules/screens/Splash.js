import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {normalize, vh, vw} from '../../modules/dimensions/Dim';

const backImg = require('../../assets/splashback.png');
const frontImg = require('../../assets/splashFront.png');

const FadeView = props => {
  const log = useSelector(state => state);
  const small = useState(new Animated.Value(0))[0];
  const textScale = useState(new Animated.Value(0))[0];
  React.useEffect(() => {
    Animated.timing(small, {
      toValue: -150,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(textScale, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      log.data.log
        ? props.navigation.navigate('TabBar')
        : props.navigation.navigate('OnboardingStart');
    });
  }, []);

  return (
    <View style={{marginTop: vh(250)}}>
      <Animated.Image
        source={frontImg}
        resizeMode="contain"
        style={{
          width: vw(200),
          height: vh(200),

          alignSelf: 'center',
          transform: [
            {
              translateY: small,
            },
          ],
        }}></Animated.Image>

      <Animated.Text
        style={{
          color: 'white',
          fontSize: normalize(25),
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: vh(50),
          marginBottom: vh(10),
          transform: [
            {
              translateY: small,
            },
            {
              scale: textScale,
            },
          ],
        }}>
        PhotoLoot
      </Animated.Text>
      <Animated.Text
        style={{
          color: 'white',
          fontSize: normalize(20),
          fontWeight: 'bold',
          alignSelf: 'center',
          transform: [
            {
              scale: textScale,
            },
            {translateY: small},
          ],
        }}>
        Where creativity meets appreciation
      </Animated.Text>
    </View>
  );
};

const Splash = props => {
  return (
    <View style={styles.mainView}>
      <ImageBackground source={backImg} style={styles.img}>
        <FadeView {...props}></FadeView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default Splash;
