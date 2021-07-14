import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {normalize, vh, vw} from '../dimensions/Dim';
import ProfileHeader from '../components/ProfileHeader';
import ModalBottom from '../screens/tab/ModalBottom';
import ModalSetting from '../setting/ModalSetting';
import {deactivate} from '../../actions/Action';
import {useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('window');

const on = require('../../assets/settingIcon/notiOn.png');
const off = require('../../assets/settingIcon/notiOff.png');

const Setting = props => {
  const dispatch = useDispatch();
  const [modalShareVisible, setModalShareVisible] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);
  const [modalDeactivate, setModalDeactivate] = useState(false);
  const [notification, setNotification] = useState(true);

  const pressShare = () => {
    setModalShareVisible(!modalShareVisible);
  };

  const onpressLogIn = () => {
    setModalLogIn(!modalLogIn);
  };

  const onpressDeactivate = () => {
    setModalDeactivate(!modalDeactivate);
  };

  const onpressNotification = () => {
    setModalNotification(!modalNotification);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader textTitle="Settings" />
      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ChangePassword')}>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/changePass.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Change Password</Text>
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('TnC')}>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/tc.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Terms and Conditions</Text>
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Faq')}>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/fqa.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>FAQ</Text>
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/about.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>About Us</Text>
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/help.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Help & Support</Text>
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressShare}>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/contact.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Invite Contact</Text>
              <ModalBottom
                modalOpen={modalShareVisible}
                onpressModal={() => setModalShareVisible(!modalShareVisible)}
              />
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.mainView}>
          <View style={styles.viewNext}>
            <Image
              source={require('../../assets/settingIcon/notification.png')}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Notification</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setNotification(!notification);
            }}>
            <Image source={notification ? on : off} style={styles.notImg} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/search.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Clear Search History</Text>
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onpressDeactivate}>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/deactivate.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Deactivate Account</Text>
              <ModalSetting
                modalOpen={modalDeactivate}
                onpressModal={() => setModalDeactivate(!modalDeactivate)}
                modalHeading="Deactivate Account?"
                no={() => setModalDeactivate(false)}
                yes={() => {
                  dispatch(
                    deactivate(),
                  );
                  props.navigation.navigate('SignIn');
                  setModalDeactivate(false);
                }}
              />
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onpressLogIn}>
          <View style={styles.mainView}>
            <View style={styles.viewNext}>
              <Image
                source={require('../../assets/settingIcon/logout.png')}
                style={styles.icon}
              />
              <Text style={styles.textIcon}>Sign Out</Text>
              <ModalSetting
                modalOpen={modalLogIn}
                onpressModal={() => setModalLogIn(!modalLogIn)}
                modalHeading="Sign Out"
                no={() => setModalLogIn(false)}
                yes={() => {
                  props.navigation.navigate('SignIn');
                  setModalLogIn(false);
                }}
              />
            </View>
            <Image
              source={require('../../assets/settingIcon/next.png')}
              style={styles.arrow}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: 'white'},
  icon: {
    height: vh(50),
    width: vw(50),
    resizeMode: 'contain',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(15),
    marginTop: vh(20),
    alignItems: 'center',
  },

  textIcon: {
    fontSize: normalize(20),
    marginLeft: vw(10),
    fontWeight: 'bold',
  },
  arrow: {
    height: vh(20),
    width: vw(20),
  },
  viewNext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notImg: {
    height: vh(40),
    width: vw(60),
    resizeMode: 'contain',
  },
  scroll: {
    marginBottom: vh(5),
  },
});

export default Setting;
