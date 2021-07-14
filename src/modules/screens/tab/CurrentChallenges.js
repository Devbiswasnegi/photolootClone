import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {vh, vw, normalize} from '../../dimensions/Dim';
import ProfileHeader from '../../components/ProfileHeader';

const white = require('../../../assets/HomeIcon/white.png');

const DATA = [
  {
    mainImage: require('../../../assets/HomeIcon/mountain.jpeg'),
    icon: require('../../../assets/HomeIcon/watch.png'),
    topic: 'Mountain',
    time: '30days left',
  },
  {
    mainImage: require('../../../assets/HomeIcon/screen10.jpeg'),
    icon: require('../../../assets/HomeIcon/watch.png'),
    topic: 'Food',
    time: '25days left',
  },
];

const onclick = (index, item, props) => {
  if (index === 0) {
    props.navigation.navigate('First', {
      mainImage: item.mainImage,
      icon: item.icon,
      topic: item.topic,
      time: item.time,
    });
  } else {
    props.navigation.navigate('Second', {
      mainImage: item.mainImage,
      icon: item.icon,
      topic: item.topic,
      time: item.time,
    });
  }
};

renderItem = ({item, index}, props) => {
  return (
    <View >
      <TouchableOpacity
        onPress={() => {
          onclick(index, item, props);
        }}>
        <Image source={item.mainImage} style={styles.mainImage} />

        <View
          style={styles.mainView}>
          <Image
            source={white}
            style={styles.white}
          />
          <View
            style={styles.view2}>
            <View
              style={styles.view3}>
              <Text
                style={styles.topicText}>
                {item.topic}
              </Text>
              <View style={styles.view5}>
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={styles.iconImg}
                />
                <Text style={styles.time}>
                  {item.time}
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Text style={styles.prizeText}>
                Total Prize
              </Text>
              <Text style={styles.dollar}>
                $
                <Text
                  style={styles.price}>
                  30.00
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CurrentChallenges = props => {
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Current Challenges"
        onpress={() => props.navigation.navigate('Home')}
      />
      <View>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => renderItem({item, index}, props)}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe:{
    alignItems: 'center', flex: 1},
  mainImage: {
    height: vh(200),
    width: vw(330),
    borderRadius: vh(10),
    marginBottom: vh(45),
    marginTop:vh(20)
  },
  mainView:{
    position: 'absolute',
    alignSelf: 'center',
    top: vh(180),
  },
white:{
  height: vh(85),
  width: vw(300),
  resizeMode: 'contain',
},
view2:{
 
  position: 'absolute',
  flexDirection: 'row',
  alignSelf: 'center',
  alignItems: 'center',
  
  top: vw(11),
},
view3:{
  marginRight: vw(60),
},
topicText:{
  fontWeight: 'bold',
  fontSize: normalize(13),
},
view5:{
  flexDirection: 'row', marginTop: vh(10),alignSelf:"center"},
iconImg:{
  height: vh(15), width: vw(15),alignSelf:"center"},
time:{
  color: 'grey', fontSize: normalize(13)},
prizeText:{
  color: 'grey', fontSize: normalize(13)},
dollar:{
  color: '#FF9904', fontSize: normalize(13)},
price:{
  color: '#FF9904',
  fontSize: normalize(20),
  fontWeight: 'bold',
},

});

export default CurrentChallenges;
