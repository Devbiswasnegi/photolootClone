import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import CustomInput from '../modules/components/CustomInput'
import SignIn from '../modules/screens/Sign'
import ImageHeader from '../modules/components/ImageHeader'
import Title from '../modules/components/Title'
import CustomButton from '../modules/components/CustomButton'
import ForgotPassword from '../modules/screens/ForgotPassword'
import Verification from '../modules/screens/Verification'
import ResetPassword from '../modules/screens/ResetPassword'
import profileHeader from '../modules/components/ProfileHeader'
import Setting from '../modules/screens/Setting'
import TnC from '../modules/setting/TnC'
import Faq from '../modules/setting/Faq'
import TabBar from '../modules/screens/TabBar'
import Splash from '../modules/screens/Splash'
import OnboardingStart from '../modules/screens/OnboradingStart'
import TopTabBar from '../modules/screens/tab/profile/TopTabBar'
import Modal from '../modules/screens/tab/Modal'
import ModalBottom from '../modules/screens/tab/ModalBottom'
import ModalSetting from '../modules/setting/ModalSetting'
import ModalVR from '../modules/screens/ModalVR'
import SignUp from '../modules/screens/SignUp'
import EditProfile from '../modules/screens/tab/profile/EditProfile'
import SmallPost from '../modules/screens/tab/profile/SmallPost'
import ThumbnailPost from '../modules/screens/tab/profile/ThumbnailPost'
import FollowTabBar from '../modules/screens/tab/profile/FollowTabBar'
import ChangePassword from '../modules/setting/ChangePassword'
import ModalLike from '../modules/screens/tab/ModalLike'
import ProfileEdit from '../modules/screens/tab/profile/ProfileEdit'
import Followers from '../modules/screens/tab/profile/Followers'
import Following from '../modules/screens/tab/profile/Following'
import David from '../modules/screens/randomProfiles/David'
import Taylor from '../modules/screens/randomProfiles/Taylor'
import Kartik from '../modules/screens/randomProfiles/Kartik'
import Grace from '../modules/screens/randomProfiles/Grace'
import Paul from '../modules/screens/randomProfiles/Paul'
import Jane from '../modules/screens/randomProfiles/Jane'



const Stack= createStackNavigator();

export default class Navigation extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="false" >
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='Verification' component={Verification}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='TabBar' component={TabBar}/>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='OnboardingStart' component={OnboardingStart}/>
        

        <Stack.Screen name='TnC' component={TnC}/>
        <Stack.Screen name='Faq' component={Faq}/>

          <Stack.Screen name='CustomInput' component={CustomInput}/>
         <Stack.Screen name='ImageHeader' component={ImageHeader}/> 
         <Stack.Screen name='Title' component={Title}/>
         <Stack.Screen name='CustomButton' component={CustomButton}/>
         <Stack.Screen name='profileHeader' component={profileHeader}/>
        


         <Stack.Screen name='TopTabBar' component={TopTabBar}/>
         <Stack.Screen name='FollowTabBar' component={FollowTabBar}/>
         <Stack.Screen name='Modal' component={Modal}/>
         <Stack.Screen name='ModalLike' component={ModalLike}/>
         <Stack.Screen name='ModalBottom' component={ModalBottom}/>
         <Stack.Screen name='ModalSetting' component={ModalSetting}/>
         <Stack.Screen name='ModalVR' component={ModalVR}/>
         <Stack.Screen name='EditProfile' component={EditProfile}/>
         


         <Stack.Screen name='SmallPost' component={SmallPost}/>
         <Stack.Screen name='ThumbnailPost' component={ThumbnailPost}/>

         <Stack.Screen name='ProfileEdit' component={ProfileEdit}/>
         

         <Stack.Screen name='Followers' component={Followers}/>
         <Stack.Screen name='Following' component={Following}/>


         <Stack.Screen name='David' component={David}/>
         <Stack.Screen name='Taylor' component={Taylor}/>
         <Stack.Screen name='Jane' component={Jane}/>
         <Stack.Screen name='Grace' component={Grace}/>
         <Stack.Screen name='Kartik' component={Kartik}/>
         <Stack.Screen name='Paul' component={Paul}/>
         
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
 