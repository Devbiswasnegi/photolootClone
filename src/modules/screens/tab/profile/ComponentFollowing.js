import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../../../dimensions/Dim';

const ComponentFollowing = props => {
  return (
    <SafeAreaView style={{}}>
      <View>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={props.onProfile}>
            <View style={styles.imgView}>
              <Image source={props.img} style={styles.imgProf} />
              <Text style={styles.imgText}>{props.name}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchView} onPress={props.fire}>
            <Image
              source={require('../../../../assets/follow/tick.png')}
              style={styles.imgtick}
            />
            <Text style={styles.textFollowing}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(15),
    marginTop: vh(20),
    alignItems: 'center',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgProf: {
    height: vw(50),
    width: vw(50),
    borderRadius: vw(25),
    resizeMode: 'cover',
  },
  imgText: {
    fontSize: normalize(17),
    marginLeft: vw(5),
    fontWeight: 'bold',
  },
  touchView: {
    width: vw(90),
    height: vh(30),
    borderWidth: 1,
    borderRadius: vh(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgtick: {
    height: vh(15),
    width: vw(15),
    resizeMode: 'contain',
  },

  textFollowing: {
    marginLeft: vw(5),
    fontSize: normalize(14),
  },
});

export default ComponentFollowing;

//array.filter(e=>{e%2==0})
