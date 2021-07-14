import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {vh, vw} from '../../dimensions/Dim';
import ProfileHeader from '../../components/ProfileHeader';
import AddModal from './Modal';
import SmallPost from './profile/SmallPost';
import TopTabBar from './profile/TopTabBar';

const Gallery = props => {
  const [openModal, setOpenModal] = useState(false);
  const [getImg, setGetImg] = useState('');

  // const renderItemGallery=({item})=>{
  //     console.log("itemxa",item)
  //   return(
  //       <View style={{margin:vh(8)}}>
  //          <TouchableOpacity onPress={()=>{
  //              setOpenModal(!openModal)
  //              setGetImg(item.img)
  //          }}>
  //              <AddModal
  //              visible={openModal}
  //              imageSource={getImg}
  //              press={()=>{
  //                  setOpenModal(false)
  //              }}/>
  //           <Image source={item.img} style={{height:vh(90),width:vw(90),borderRadius:vh(10)}}/>
  //           </TouchableOpacity>
  //       </View>
  //   )
  // }

  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Gallery"
        onpress={() => props.navigation.goBack()}
      />

      <TopTabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default Gallery;
