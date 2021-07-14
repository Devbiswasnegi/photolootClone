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
import ModalLike from '../ModalLike';
import CustomRender from './CustomRender';

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

const SmallPost = props => {
  const [getdata, setGetData] = useState(DATAGALLERY);
  const [openModal, setOpenModal] = useState(false);
  const [vote, setVote] = useState(false);
  const [votesImg, getVoteImg] = useState(voteUnselected);
  const [getImg, setGetImg] = useState('');

  const renderItemGallery = ({item, index}) => {
    console.log('itemxa', item);
    console.log('indexxcxc', index);
    return <CustomRender item={item}  />;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.mainView}>
        <FlatList
          data={getdata}
          numColumns="3"
          renderItem={renderItemGallery}
          keyExtractor={({item, index}) => 'gallery'.concat(Math.random())}
          extraData={openModal}
          showsVerticalScrollIndicator={false}
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
  mainView: {
    width: vw(320),
    alignSelf: 'center',
  },
});

export default SmallPost;
