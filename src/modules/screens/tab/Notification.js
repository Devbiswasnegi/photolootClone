import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView ,Image} from 'react-native'
import { normalize, vh, vw } from '../../dimensions/Dim'
import ProfileHeader from '../../components/ProfileHeader'

const notification=()=>{
return(
    <SafeAreaView style={{flex:1}}>
    <View style={{backgroundColor:"white",flex:1}}>
        <ProfileHeader textTitle="Notification"/>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}> 
    
    <Image source={require('./../../../assets/notificationAlert.png')} resizeMode="contain" style={{width:vw(100),height:vh(100)}}/>
    <Text style={{fontSize:normalize(40),fontWeight:"bold",color:"#FF9904"}}>Notification</Text>
    <Text style={{fontSize:normalize(17),color:"#B2B2B2"}}>There are no notification available right now.</Text>
    </View>
    </View>
    </SafeAreaView>
   
)
}

export default notification;