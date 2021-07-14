import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../dimensions/Dim';

const CustomButton = props => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.onpress}
        style={styles.touch}>
        <Text style={styles.btnText}>{props.btn}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touch: {
    height: vh(45),
    width: vw(320),
    alignSelf: 'center',
    borderRadius: vh(10),
    marginVertical: vh(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9904',
  },
  btnText: {
    color: 'white',
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
});
export default CustomButton;
