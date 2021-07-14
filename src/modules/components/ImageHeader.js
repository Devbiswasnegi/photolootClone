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

const ImageHeader = props => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <TouchableOpacity onPress={props.onpress}>
          <Image source={props.back} style={styles.back} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={props.logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: vh(150),
  },
  back: {
    marginLeft: vw(20),
    height: vh(30),
    width: vw(30),
  },

  logo: {
    height: vh(120),
    width: vw(120),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default ImageHeader;
