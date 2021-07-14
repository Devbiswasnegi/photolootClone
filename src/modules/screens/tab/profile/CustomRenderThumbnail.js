import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../../../dimensions/Dim';
import ModalBottom from '../ModalBottom';

const voteSelected = require('../../../../assets/hallOfFrame/voteSelected.png');
const voteUnselected = require('../../../../assets/hallOfFrame/voteUnselected.png');

const CustomRenderThumbnail = props => {
  const [like, setLike] = useState(false);
  const [getImg, setGetImg] = useState('');
  const [modalShareVisible, setModalShareVisible] = useState(false);

  const pressShare = () => {
    setModalShareVisible(!modalShareVisible);
  };

  const presslike = () => {
    setLike(!like);
  };
  return (
    <View>
      <View>
        <Image source={props.item.img} style={styles.img} />
        <TouchableOpacity onPress={presslike} style={styles.votingBtn}>
          <Image
            source={like ? voteSelected : voteUnselected}
            resizeMode="contain"
            style={styles.votingImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Text style={styles.textVote}>76 Votes</Text>
        <View style={styles.view3}>
          <Image source={props.item.imgPic} style={styles.profPic} />
          <Text style={styles.profname}>{props.item.name}</Text>
        </View>
        <Text style={styles.caption}>loving memory ever</Text>
        <Text style={styles.tag}>#Heaven</Text>
      </View>

      <View>
        <View style={styles.line1}></View>
        <View style={styles.view4}>
          <TouchableOpacity onPress={pressShare}>
            <View style={styles.viewSR}>
              <Image
                source={require('../../../../assets/hallOfFrame/report.png')}
                style={styles.shareImg}
              />
              <Text style={styles.textSR}>Report</Text>
              <ModalBottom
                modalOpen={modalShareVisible}
                onpressModal={() => setModalShareVisible(!modalShareVisible)}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.line2}></View>

          <TouchableOpacity onPress={pressShare}>
            <View style={styles.viewSR}>
              <Image
                source={require('../../../../assets/hallOfFrame/share.png')}
                style={styles.shareImg}
              />
              <Text style={styles.textSR}>Share</Text>
              <ModalBottom
                modalOpen={modalShareVisible}
                onpressModal={() => setModalShareVisible(!modalShareVisible)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line3}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: vw(290),
    width: '100%',
    resizeMode: 'cover',
  },

  view2: {
    width: vw(280),
    marginLeft: vw(20),
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
  votingBtn: {
    position: 'absolute',

    top: vw(265),
    left: vw(220),
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
  line1: {
    borderWidth: vh(1),
    marginTop: vh(25),
    borderColor: 'grey',
  },
  view4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewSR: {
    flexDirection: 'row'

  },
  shareImg: {
    width: vw(20),
    height: vh(20),
    resizeMode: 'contain',
    alignSelf:"center"
  },
  textSR: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: normalize(18),
    marginLeft: vw(10),
  },

  line2: {
    height: vh(35),
    borderWidth: vh(1),

    borderColor: 'grey',
  },
  line3: {
    borderWidth: 1,

    borderColor: 'grey',
    marginBottom: vh(20),
  },
});

export default CustomRenderThumbnail;
