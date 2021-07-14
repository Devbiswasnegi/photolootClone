import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Easing,
  SafeAreaView,
} from 'react-native';
import {vw, vh, normalize} from '../../dimensions/Dim';
import verification from '../Verification';
import ModalBottom from './ModalBottom';
import Animated from 'react-native-reanimated';

const voteSelected = require('../../../assets/hallOfFrame/voteSelected.png');
const voteUnselected = require('../../../assets/hallOfFrame/voteUnselected.png');

const ModalLike = props => {
  console.log('props11', props.imageSource);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalShareVisible, setModalShareVisible] = useState(false);

  const Anim = () => {
    const like = useState(new Animated.Value(0))[0];

    React.useEffect(() => {
      {
        props.likevisible &&
          Animated.timing(like, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.linear,
          }).start(() => {
            Animated.timing(like, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
              easing: Easing.linear,
            }).start();
          });
      }
    }, []);

    return (
      <View>
        <Animated.Image
          source={voteSelected}
          resizeMode="contain"
          style={{
            height: vh(120),
            width: vw(120),
            transform: [
              {
                scale: like,
              },
            ],
          }}></Animated.Image>
      </View>
    );
  };

  const pressShare = () => {
    setModalShareVisible(!modalShareVisible);
  };
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={props.imageSource} style={styles.img} />
          <View style={styles.anim}>
            <Anim></Anim>
          </View>
          <TouchableOpacity onPress={props.votespress} style={styles.votingBtn}>
            <Image
              source={props.votes}
              resizeMode="contain"
              style={styles.votingImg}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={props.press} style={styles.cancelBtn}>
            <Image
              source={require('../../../assets/hallOfFrame/cancel.png')}
              style={styles.cancelImg}
            />
          </TouchableOpacity>

          <View style={styles.view2}>
            <Text style={styles.textVote}>76 Votes</Text>
            <View style={styles.view3}>
              <Image source={props.imgPic} style={styles.profPic} />
              <Text style={styles.profname}>{props.name}</Text>
            </View>
            <Text style={styles.caption}>loving memory ever</Text>
            <Text style={styles.tag}>#Heaven</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity onPress={pressShare}>
            <View style={styles.shareView}>
              <Image
                source={require('../../../assets/hallOfFrame/share.png')}
                style={styles.sharepic}
              />
              <Text style={styles.shareText}>Share</Text>
              <ModalBottom
                modalOpen={modalShareVisible}
                onpressModal={() => setModalShareVisible(!modalShareVisible)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000AA',
  },
  modalView: {
    flex:1,
    margin: vh(20),
    backgroundColor: 'white',
    borderRadius: vh(20),
    height: vh(550),
    width: vw(340),
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  img: {
    width: '100%',
    height: '65%',
    borderRadius: vh(20),
    resizeMode: 'cover',
  },
  anim: {
    position: 'absolute',
    top: vh(160),
  },

  votingBtn: {
    position: 'absolute',
     top:"60%",
    left: vw(180),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  votingImg: {
    height: vh(60),
    width: vw(60),
  },

  cancelBtn: {
    marginTop: vh(-10),
    position: 'absolute',
    left: vw(325),
  },
  cancelImg: {
    width: vw(25),
    height: vh(25),
    resizeMode: 'contain',
  },
  view2: {
    width: vw(280),
  },
  textVote: {
    fontWeight: 'bold',
    fontSize: normalize(14),
    marginTop: vh(15),
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(10),
  },
  profPic: {
    width: vw(50),
    height: vw(50),
    borderRadius: vw(25),
    resizeMode: 'cover',
  },
  profname: {
    marginLeft: vw(10),
    fontSize: normalize(18),
    color: 'grey',
  },
  caption: {
    fontSize: normalize(14),
  },
  tag: {
    marginTop: vh(10),
    fontSize: normalize(14),
  },
  line: {
    borderWidth: 1,
    marginTop: vh(25),
    borderColor: 'grey',
    marginBottom: vh(5),
  },
  shareView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:vh(20),
    alignItems: 'center',
  },

  sharepic: {
    width: vw(20),
    height: vh(20),
    resizeMode: 'contain',
  },
  shareText: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: normalize(18),
    marginLeft: vw(10),
  },
});

export default ModalLike;
