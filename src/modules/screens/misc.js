import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView ,Image} from 'react-native'
import { vh, vw } from '../dimensions/Dim'
import ProfileHeader from '../components/ProfileHeader'

const image=()=>{
return(
    <SafeAreaView style={{width:vw(320),alignSelf:"center"}}>
    <View>
    <ProfileHeader
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Hall Of Frame"
        onpress={() => props.navigation.navigate('Home')}
      />
      <Text>#FF9904</Text>
    </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({})
export default image;