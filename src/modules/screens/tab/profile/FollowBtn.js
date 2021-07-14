import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {normalize, vh, vw} from '../../../dimensions/Dim';
import {humanfollow} from '../../../../actions/Action'

const FollowBtn = props => {
  const [follow, getFollow] = useState(false);
const dispatch =useDispatch()
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          dispatch(humanfollow(props.item))



          getFollow(!follow);
        }}>
        { (!props.img)? (
          <View style={styles.followView}>
            <Text style={styles.folText}>Follow</Text>
          </View>
        ) : (
          <View style={styles.followingView}>
            <Image
              source={require('../../../../assets/follow/tick.png')}
              style={styles.followingImg}
            />
            <Text style={styles.followingText}>Following</Text>
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  followView: {
    width: vw(90),
    height: vh(30),
    borderWidth: vw(1),
    borderRadius: vh(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF9904',
  },
  folText: {
    color: '#FF9904',
    fontSize: normalize(14),
  },
  followingView: {
    width: vw(90),
    height: vh(30),
    borderWidth: 1,
    borderRadius: vh(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  followingImg: {
    height: vh(15),
    width: vw(15),
    resizeMode: 'contain',
  },
  followingText: {
    marginLeft: vw(5),
    fontSize: normalize(14),
  },
});

export default FollowBtn;
