import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import CurrentChallenges from '../modules/screens/tab/CurrentChallenges'

import UpcomingChallenges from '../modules/screens/tab/UpcomingChallenges'
import HallOfFrame from '../modules/screens/tab/HallOfFrame' 
import Home from '../modules/screens/tab/Home'
import First from '../modules/screens/tab/First'
import Second from '../modules/screens/tab/Second'
import Profile from '../modules/screens/tab/profile/Profile'
import Gallery from '../modules/screens/tab/Gallery'
import ProfileName from '../modules/screens/tab/profile/ProfileEdit'
import Search from '../modules/screens/tab/search/Search'
import ProfileEdit from '../modules/screens/tab/profile/ProfileEdit'
import ProfileNav from './ProfileNav'
import ChangePassword from '../modules/setting/ChangePassword'




const Stack= createStackNavigator();

export default class HomeNav extends React.Component{
  render(){
    return(
    
        <Stack.Navigator initialRouteName="Home" headerMode="false" >
       

        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='CurrentChallenges' component={CurrentChallenges}/>
        <Stack.Screen name='First' component={First}/>
        <Stack.Screen name='Second' component={Second}/>
        <Stack.Screen name='UpcomingChallenges' component={UpcomingChallenges}/>
        <Stack.Screen name='HallOfFrame' component={HallOfFrame}/>
        <Stack.Screen name='ProfileNav' component={ProfileNav}/>
        <Stack.Screen name='Gallery' component={Gallery}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='ProfileEdit' component={ProfileEdit}/>
        <Stack.Screen name='ChangePassword' component={ChangePassword}/>

        {/* <Stack.Screen name='ProfileName' component={ProfileName}/> */}

        


        </Stack.Navigator>
      
    )
  }
}
 