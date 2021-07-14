import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ComponentFollowing from './ComponentFollowing';
import {unfollow} from '../../../../actions/Action'


const Following = props => {
  const human=useSelector(state=>state.array)
  const dispatch=useDispatch()
  const [arr,setArr]= useState(Array)
  const [newArr,setNewArr]=useState([])
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        {human.map((ele,idx) => {
          return (
            <View>
              <ComponentFollowing
                img={ele.img}
                name={ele.name}
                onProfile={()=>props.navigation.navigate(ele.id)}
                fire={()=>{dispatch(unfollow(idx))}}
              />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Following;
