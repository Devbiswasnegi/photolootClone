import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import {normalize, vh, vw} from '../../dimensions/Dim';

const white = require('../../../assets/HomeIcon/white.png');

const DATA = [
  {
    mainImage: require('../../../assets/HomeIcon/img1.png'),
    icon: require('../../../assets/HomeIcon/dollar.png'),
    topic: 'Current Challenges',
    event: '2 Ongoing',
  },
  {
    mainImage: require('../../../assets/HomeIcon/img2.png'),
    icon: require('../../../assets/HomeIcon/time.png'),
    topic: 'Upcoming Challenges',
    event: '0 Upcoming',
  },
  {
    mainImage: require('../../../assets/HomeIcon/img3.png'),
    icon: require('../../../assets/HomeIcon/win.png'),
    topic: 'Hall Of Frame',
    event: 'View Winners',
  },
];

const renderItem = ({item, index}, props) => {
  return (
    <View style={{flex:1}}>
      <TouchableOpacity onPress={() => onpress(props, index)}>
        <Image source={item.mainImage} style={styles.mainImg} />
        <View style={styles.titleView}>
          <Image source={white} style={styles.whiteBox} />
          <View style={styles.imgView}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.topicView}>
              <Text style={styles.topicText}>{item.topic}</Text>
              <Text style={styles.event}>{item.event}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const onpress = (props, index) => {
  console.log('faffs', index);
  if (index === 0) props.navigation.navigate('CurrentChallenges');
  else if (index === 1) props.navigation.navigate('UpcomingChallenges');
  else props.navigation.navigate('HallOfFrame');
};

const Home = props => {
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader textTitle="Home" />

      <FlatList
        data={DATA}
        renderItem={({item, index}) => renderItem({item, index}, props)}
        //  renderItem={({item,index})=><Renderitem item={item} props={props} index={index}/>}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  mainImg: {
    height: vw(150),
    width: vw(330),
    borderRadius: vh(10),
    marginVertical: vh(25),
  },
  titleView: {
    position: 'absolute',
    alignItems: 'center',

    alignSelf: 'center',
    top: vh(140),
  },
  whiteBox: {
    height: vw(85),
    width: vw(300),
    resizeMode: 'cover',
  },
  imgView: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: vw(12),
  },
  icon: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'contain',
  },

  topicText: {
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
  event: {
    fontSize: normalize(15),
  },
  topicView: {
    marginLeft: vw(10),
  },
});

export default Home;
