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
import {vh, vw} from '../../../dimensions/Dim';
import AddModal from '../Modal';
import ModalBottom from '../ModalBottom';
import CustomRenderThumbnail from './CustomRenderThumbnail';

const voteSelected = require('../../../../assets/hallOfFrame/voteSelected.png');
const voteUnselected = require('../../../../assets/hallOfFrame/voteUnselected.png');

const DATAGALLERY = [
  {
    id: 0,
    img: require('../../../../assets/hallOfFrame/screen1.jpeg'),
    name: 'Jane Lou',
    imgPic: require('../../../../assets/follow/ppic1.jpeg'),
  },
  {
    id: 1,
    img: require('../../../../assets/hallOfFrame/screen2.jpeg'),
    name: 'Kartik',
    imgPic: require('../../../../assets/follow/ppic2.jpeg'),
  },
  {
    id: 2, 
    img: require('../../../../assets/hallOfFrame/screen3.jpeg'),
    name: 'David',
    imgPic: require('../../../../assets/follow/ppic3.jpeg'),
  },
  {
    id: 3,
    img: require('../../../../assets/hallOfFrame/screen4.jpeg'),
    name: 'Paul hames',
    imgPic: require('../../../../assets/follow/ppic4.jpeg'),
  },
  {
    id: 4,
    img: require('../../../../assets/hallOfFrame/screen5.jpeg'),
    name: 'Taylor Methow',
    imgPic: require('../../../../assets/follow/ppic5.jpeg'),
  },
  {
    id: 5,
    img: require('../../../../assets/hallOfFrame/screen6.jpeg'),
    name: 'Grace Dartson',
    imgPic: require('../../../../assets/follow/ppic6.jpeg'),
  },
  {
    id: 6,
    img: require('../../../../assets/hallOfFrame/screen7.jpeg'),
    name: 'Grace Dartson',
    imgPic: require('../../../../assets/follow/ppic6.jpeg'),
  },
  {
    id: 7,
    img: require('../../../../assets/hallOfFrame/screen8.jpeg'),
    name: 'Taylor Methow',
    imgPic: require('../../../../assets/follow/ppic5.jpeg'),
  },
  {
    id: 8,
    img: require('../../../../assets/hallOfFrame/screen9.jpeg'),
    name: 'Kartik',
    imgPic: require('../../../../assets/follow/ppic2.jpeg'),
  },
  {
    id: 9,
    img: require('../../../../assets/hallOfFrame/screen10.jpeg'),
    name: 'Paul hames',
    imgPic: require('../../../../assets/follow/ppic4.jpeg'),
  },
  {
    id: 10,
    img: require('../../../../assets/hallOfFrame/screen11.png'),
    name: 'Kartik',
    imgPic: require('../../../../assets/follow/ppic2.jpeg'),
  },
  {
    id: 11,
    img: require('../../../../assets/hallOfFrame/screen1.jpeg'),
    name: 'Kartik',
    imgPic: require('../../../../assets/follow/ppic2.jpeg'),
  },
];

const ThumbnailPost = props => {
  const [getdata, setGetData] = useState(DATAGALLERY);
  const [like, setLike] = useState(false);
  const [getImg, setGetImg] = useState('');
  const [modalShareVisible, setModalShareVisible] = useState(false);

  const pressShare = () => {
    setModalShareVisible(!modalShareVisible);
  };

  const presslike = () => {
    setLike(!like);
  };

  const renderItemGallery = ({item}) => {
    console.log('tthumb', item);
    return <CustomRenderThumbnail item={item} />;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <FlatList
          data={getdata}
          renderItem={renderItemGallery}
          keyExtractor={({item, index}) => 'gallery'.concat(Math.random())}
        />
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
export default ThumbnailPost;
