import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
  Pressable,
  StyleSheet,
} from 'react-native';

import {normalize, vh, vw} from '../dimensions/Dim';

const ModalVR = props => {
  return (
    <View style={styles.mainView}>
      <Modal animationType={'fade'} visible={props.visible} transparent={true}>
        <TouchableOpacity onPressOut={props.onClose} style={styles.background}>
          <View style={styles.modalView}>
            <Image
              source={require('../../assets/success.png')}
              resizeMode="contain"
              style={styles.img}
            />
            <Text style={styles.textHeading}>{props.modalHeading}</Text>
            <Text style={styles.textInside}>{props.text}</Text>

            <TouchableOpacity onPress={props.clear} style={styles.cutBtn}>
              <Text style={styles.textBtn}>{props.btnText}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000000AA',
  },
  modalView: {
    width: vh(300),
    height: vw(300),
    alignItems: 'center',
    backgroundColor: 'white',
    padding: vh(20),
    borderRadius: vh(10),
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
    width: vw(80),
    height: vh(80),
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: normalize(20),
    marginVertical: vh(20),
    textAlign: 'center',
  },
  textInside: {
    textAlign: 'center',
    fontSize: normalize(13),
  },
  cutBtn: {
    marginVertical: vh(20),
    height: vh(40),
    width: vw(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh(10),
    backgroundColor: '#FF9904',
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default ModalVR;
