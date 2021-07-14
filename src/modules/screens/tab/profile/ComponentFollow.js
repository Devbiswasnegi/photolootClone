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
import FollowBtn from '../../../../modules/screens/tab/profile/FollowBtn';

const ComponentFollow = props => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={props.onProfile}>
            <View style={styles.imgView}>
              <Image source={props.img} style={styles.img} />
              <Text style={styles.name}>{props.name}</Text>
            </View>
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
    marginTop: vh(20),
    alignItems: 'center',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: vw(50),
    width: vw(50),
    borderRadius: vw(25),
    resizeMode: 'cover',
  },
  name: {
    fontSize: normalize(17),
    marginLeft: vw(5),
    fontWeight: 'bold',
  },
});

export default ComponentFollow;
