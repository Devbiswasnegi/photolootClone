import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {normalize, vh, vw} from '../dimensions/Dim';

const {width, height} = Dimensions.get('window');
const profileHeader = props => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={props.onpress}>
        <Image source={props.imageDir} style={styles.img} />
      </TouchableOpacity>

      <Text style={styles.textTitle}>{props.textTitle}</Text>

      <TouchableOpacity
        onPress={props.votePress}
        style={{
          height: vh(25),
          width: vw(90),
          backgroundColor: props.voting ? 'white' : null,
          borderRadius: 6,
          marginRight: vw(10),
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text>{props.voting}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: width,
    height: vh(60),
    backgroundColor: '#FF9904',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    marginLeft: vw(20),
    width: vw(25),
    height: vh(25),
    resizeMode:"contain"
  },
  textTitle: {
    color: 'white',
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginLeft: vw(45),
  },
});

export default profileHeader;
