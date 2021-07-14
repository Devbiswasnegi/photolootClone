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
import {normalize, vh, vw} from '../../dimensions/Dim';

export default function ModalBottom(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.centeredView}>
          <Modal transparent={true} animated="slide" visible={props.modalOpen}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  onPress={props.onpressModal}
                  style={styles.closeBtn}>
                  <Text style={styles.closeText}>close</Text>
                </TouchableOpacity>

                <View style={styles.ViewAlign}>
                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/whatsapp.png')}
                      style={styles.icon}
                    />
                    <Text>WhatApp</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/facebook.png')}
                      style={styles.icon}
                    />
                    <Text>Facebook</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/gmail.png')}
                      style={styles.icon}
                    />
                    <Text>Gmail</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.ViewAlign}>
                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/twitter.png')}
                      style={styles.icon}
                    />
                    <Text>Twitter</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/snapchat.png')}
                      style={styles.icon}
                    />
                    <Text>Snapchat</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/instagram.png')}
                      style={styles.icon}
                    />
                    <Text>Instagram</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.ViewAlign}>
                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/duo.png')}
                      style={styles.icon}
                    />
                    <Text>Duo</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/linkedin.png')}
                      style={styles.icon}
                    />
                    <Text>Linkedin</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconName}>
                    <Image
                      source={require('../../../assets/modalBottom/telegram.png')}
                      style={styles.icon}
                    />
                    <Text>Telegram</Text>
                  </TouchableOpacity>
                </View>
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
    borderRadius: vh(20),
    backgroundColor: 'white',
    height: '45%',
    width: '100%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeBtn: {
    marginLeft: vw(300),
    marginTop: vh(20),
  },
  closeText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  ViewAlign: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: vh(20),
  },
  icon: {
    width: vw(45),
    height: vh(45),
    resizeMode: 'contain',
  },
  iconName: {
    alignItems: 'center',
  },
});
