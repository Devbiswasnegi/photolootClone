import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView ,Image} from 'react-native'
import {vh,vw} from '../../../dimensions/Dim'


const FollowingBtn=(props)=>{
return(
    <SafeAreaView>
    
    <View
            style={{
              width: vw(90),
              height: vh(30),
              borderWidth: vh(1),
              borderRadius: vh(10),
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../../assets/follow/tick.png')}
              style={styles.followingImg}
            />
            <Text style={styles.followingText}>Following</Text>
            </View>
    
    
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  followingImg: {
    height: vh(15),
    width: vw(15),
    resizeMode: 'contain',
  },
  followingText: {
    marginLeft: vw(5),
    fontSize: normalize(14),
  },
})

export default FollowingBtn;