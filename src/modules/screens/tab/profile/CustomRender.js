import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {vh, vw} from '../../../dimensions/Dim';
import ModalLike from '../ModalLike';

const voteSelected = require('../../../../assets/hallOfFrame/voteSelected.png');
const voteUnselected = require('../../../../assets/hallOfFrame/voteUnselected.png');

const CustomRender = props => {
  const [openModal, setOpenModal] = useState(false);
  const [vote, setVote] = useState(false);
  const [votesImg, getVoteImg] = useState(voteUnselected);
  const [getImg, setGetImg] = useState('');
  return (
    <View>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            console.log('hellllloo', props.item.img);
            setOpenModal(!openModal);
            setGetImg(props.item.img);
          }}>
          <Image
            source={props.item.img}
            resizeMode="cover"
            style={styles.img}
          />

          <ModalLike
            visible={openModal}
            imageSource={getImg}
            imgPic={props.item.imgPic}
            name={props.item.name}
            press={() => {
              setOpenModal(false);
            }}
            votespress={() => {
              setVote(!vote);
            }}
            likevisible={vote}
            votes={vote ? voteSelected : voteUnselected}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    margin: vh(8),
  },
  img: {
    height: vw(90),
    width: vw(90),
    borderRadius: vw(10),
  },
});
export default CustomRender;
