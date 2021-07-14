import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
 
} from 'react-native';

import Swiper from 'react-native-swiper';

import {normalize, vh, vw} from '../dimensions/Dim';

const {width, height} = Dimensions.get('window');

export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.safe}>
        <Swiper style={styles.wrapper} showsButtons={false} loop={false}
        
        activeDotStyle={{marginTop:vh(width/12)}}
        dotStyle={{marginTop:vh(width/12)}}

        
        >
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onboarding.png')}
              style={styles.img}
            />
            <View style={styles.TextView}>
              <Text style={styles.text}>Photo Challenges</Text>
              <Text style={styles.mainText}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </Text>
            </View>
          </View>

          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onBoarding1.jpeg')}
              style={styles.img}
            />
            <View style={styles.TextView}>
              <Text style={styles.text}>Photo Challenges</Text>
              <Text style={styles.mainText}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </Text>
            </View>
          </View>

          <View style={styles.slide1}>
            <Image
              source={require('../../assets/onBoarding2.jpeg')}
              style={styles.img}
            />
            <View style={styles.TextView}>
              <Text style={styles.text}>Photo Challenges</Text>
              <Text style={styles.mainText}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </Text>
            </View>
          </View>
        </Swiper>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignIn')}>
          <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    backgroundColor: 'white',
  },
  slide1: {
    flex: 1,
    backgroundColor: 'white',
    width: vw(350),
    marginTop: vh(50),
    alignSelf: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: normalize(25),
    fontWeight: 'bold',
    marginVertical: vh(20),
  },
  img: {
    width: '100%',
    height: vh(450),
    alignSelf: 'center',
    borderRadius: vh(10),
    resizeMode: 'cover',
  },
  TextView: {
    alignItems: 'center',
    width: vw(350),
    backgroundColor: 'white',
    borderRadius: vh(10),
    padding: vh(20),
    paddingBottom: vh(50),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainText: {
    width: vw(320),
    textAlign: 'center',
    fontSize: normalize(14),
  },
  skip: {
    fontWeight: 'bold',
    fontSize: normalize(20),
    color: 'orange',
    marginBottom: vh(50),
    alignSelf: 'center',
    marginTop: vh(10),
  },
});
