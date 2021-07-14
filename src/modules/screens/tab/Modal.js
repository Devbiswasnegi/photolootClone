import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {vw, vh,normalize} from '../../dimensions/Dim';
import verification from '../Verification';
import ModalBottom from './ModalBottom';

const AddModal = props => {
  console.log('props11', props.imageSource);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalShareVisible, setModalShareVisible] = useState(false);

  const pressShare = () => {
    setModalShareVisible(!modalShareVisible);
  };
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={props.imageSource}
            style={styles.img}
          />
          <TouchableOpacity
            onPress={props.press}
            style={styles.cancelBtn}>
            <Image
              source={require('../../../assets/hallOfFrame/cancel.png')}
              resizeMode="center"
              style={styles.cancelImg}
            />
          </TouchableOpacity>

          <View style={styles.view2}>
            <Text style={styles.textVote}>76 Votes</Text>
            <View
              style={styles.view3}>
              <Image
                source={require('../../../assets/hallOfFrame/ppic1.jpeg')}
                style={styles.profPic}
              />
              <Text style={styles.profname}>
                ANkit
              </Text>
            </View>
            <Text style={styles.caption}>loving memory ever</Text>
            <Text style={styles.tag}>#Heaven</Text>
            <View
              style={styles.line}></View>
          </View>
          <TouchableOpacity onPress={pressShare}>
            <View style={styles.shareView}>
              <Image
                source={require('../../../assets/hallOfFrame/share.png')}
                style={styles.sharepic}
              />
              <Text
                style={styles.shareText}>
                Share
              </Text>
              <ModalBottom
                modalOpen={modalShareVisible}
                onpressModal={() => setModalShareVisible(!modalShareVisible)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#000000AA"
  },
  modalView: {
    flex:0.8,
    margin: vh(20),
    backgroundColor: 'white',
    borderRadius: 20,
    height: vh(540),
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

export default AddModal;

{
  /* <View
style={{
  flexDirection: 'row',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  width: vw(60),
  borderRadius: 10,
  alignSelf: 'center',
  position: 'absolute',
  marginTop: vh(70),
  padding: vh(2),
}}>
<Image
  source={require('../../../assets/HomeIcon/gold.png')}
  style={{}}
/>
<Text style={{color: 'grey', marginLeft: 5}}>1st</Text>
</View> */
}
