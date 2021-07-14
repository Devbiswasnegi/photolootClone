import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {normalize, vh, vw} from '../../dimensions/Dim';
import ProfileHeader from '../../components/ProfileHeader';
import AddModal from '../../../modules/screens/tab/Modal';

const white = require('../../../assets/HomeIcon/white.png');

const DATAHAll = [
  {
    month: 'June',
    firstPic: require('../../../assets/hallOfFrame/screen1.jpeg'),
    secondPic: require('../../../assets/hallOfFrame/screen2.jpeg'),
    thirdPic: require('../../../assets/hallOfFrame/screen3.jpeg'),
    theme: 'Nature',
  },
  {
    month: 'May',
    firstPic: require('../../../assets/hallOfFrame/screen4.jpeg'),
    secondPic: require('../../../assets/hallOfFrame/screen5.jpeg'),
    thirdPic: require('../../../assets/hallOfFrame/screen6.jpeg'),
    theme: 'Sky',
  },
  {
    month: 'April',
    firstPic: require('../../../assets/hallOfFrame/screen7.jpeg'),
    secondPic: require('../../../assets/hallOfFrame/screen8.jpeg'),
    thirdPic: require('../../../assets/hallOfFrame/screen9.jpeg'),
    theme: 'Season vibes',
  },
  {
    month: 'March',
    firstPic: require('../../../assets/hallOfFrame/screen10.jpeg'),
    secondPic: require('../../../assets/hallOfFrame/screen11.png'),
    thirdPic: require('../../../assets/hallOfFrame/screen3.jpeg'),
    theme: 'Speed',
  },
  {
    month: 'February',
    firstPic: require('../../../assets/hallOfFrame/screen1.jpeg'),
    secondPic: require('../../../assets/hallOfFrame/screen2.jpeg'),
    thirdPic: require('../../../assets/hallOfFrame/screen3.jpeg'),
    theme: 'Festival',
  },
  {
    month: 'January',
    firstPic: require('../../../assets/hallOfFrame/screen4.jpeg'),
    secondPic: require('../../../assets/hallOfFrame/screen5.jpeg'),
    thirdPic: require('../../../assets/hallOfFrame/screen6.jpeg'),
    theme: 'Advanture',
  },
];

const HallOfFrame = props => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState(DATAHAll);
  const [visible, SetVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const renderItemHall = ({item, index}, props) => {
    console.log('item', item.firstPic);
    return (
      <View style={styles.renderView}>
        <Text style={styles.month}>{item.month}</Text>

        <View style={styles.div}>
          <View>
            <TouchableOpacity
              onPress={() => {
                SetVisible(!visible);
                setImgSrc(item.firstPic);
              }}>
              <AddModal
                visible={visible}
                press={() => SetVisible(!visible)}
                imageSource={imgSrc}
              />

              <Image source={item.firstPic} style={styles.first} />
              <View style={styles.smallView}>
                <Image
                  source={require('../../../assets/HomeIcon/gold.png')}
                  style={styles.medal}
                />
                <Text style={styles.position}>1st</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                SetVisible(!visible);
                setImgSrc(item.secondPic);
              }}>
              {/* <AddModal visible={visible} press={()=>SetVisible(!visible)}/> */}
              <Image source={item.secondPic} style={styles.first} />
              <View style={styles.smallView}>
                <Image
                  source={require('../../../assets/HomeIcon/silver.png')}
                  style={styles.medal}
                />
                <Text style={styles.position}>2nd</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                SetVisible(!visible);

                setImgSrc(item.thirdPic);
              }}>
              {/* <AddModal visible={visible} press={()=>SetVisible(!visible)}/> */}
              <Image source={item.thirdPic} style={styles.first} />
              <View style={styles.smallView}>
                <Image
                  source={require('../../../assets/HomeIcon/bronze.png')}
                  style={styles.medal}
                />
                <Text style={styles.position}>3rd</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.whiteView}>
          <Image source={white} style={styles.whiteImg} />
          <Text style={styles.theme}>{item.theme}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../assets/arrowWhite.png')}
        textTitle="Hall Of Frame"
        onpress={() => props.navigation.navigate('Home')}
      />

      <View style={styles.mainView}>
        <FlatList
          data={dataSource}
          renderItem={({item, index}) => renderItemHall({item, index}, props)}
          keyExtractor={({item, index}) => 'hall'.concat(Math.random())}
          showsVerticalScrollIndicator={false}
          // ListFooterComponent={listFooter}
          onEndReachedThreshold={0.1}
          onEndReached={() => setDataSource(dataSource.concat(dataSource))}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
    flex: 1,
  },
  mainView: {
    width: vw(320),
    alignSelf: 'center',
    flex: 1,
  },
  renderView: {
    marginVertical: 20,
  },
  month: {
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  div: {
    height: vw(160),
    width: '100%',
    backgroundColor: '#FFEDD3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: vh(15),
    borderRadius: vh(10),
    marginVertical: vh(6),
  },
  first: {
    height: vw(80),
    width: vw(80),
    borderRadius: vw(10),
  },

  smallView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: vw(60),
    borderRadius: vh(10),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: vw(60),
    padding: vh(2),
  },
  medal: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  position: {
    color: 'grey',
    marginLeft: vw(5),
    fontSize: normalize(12),
  },
  whiteView: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: vw(155),
  },
  whiteImg: {
    height: vh(85),
    width: vw(300),
    resizeMode: 'contain',
  },

  theme: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: normalize(17),
    alignSelf: 'center',
    marginTop: vh(26),
  },
});

export default HallOfFrame;
