import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../dimensions/Dim';


export default function ModalSetting(props) {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.centeredView}>
          <Modal transparent={true} animated="slide" visible={props.modalOpen}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={styles.mainView}>
                  <TouchableOpacity>
                    <Text style={styles.heading}>{props.modalHeading}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={props.onpressModal}>
                    <Text style={styles.textClose}>close</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={props.no} style={styles.touchBtn}>
                  <Image
                    source={require('../../assets/settingIcon/no.png')}
                    style={styles.img}
                  />
                  <Text style={styles.imgText}>NO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={props.yes} style={styles.touchBtn}>
                  <Image
                    source={require('../../assets/settingIcon/yes.png')}
                    style={styles.img}
                  />
                  <Text style={styles.imgText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000AA',
  },
  modalView: {
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    borderRadius: vh(20),
    padding: vh(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  textClose: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: vh(15),
  },
  touchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(10),
  },

  img: {
    height: vh(30),
    width: vw(30),
    resizeMode: 'contain',
  },
  imgText: {
    color: 'grey',
    marginLeft: vh(10),
    fontSize: normalize(14),
  },
  mainView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
