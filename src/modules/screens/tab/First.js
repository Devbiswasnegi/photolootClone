import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Easing,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {vh, vw, normalize} from '../../dimensions/Dim';

const {width, height} = Dimensions.get('window');




const first = props => {
  console.log('para', props);
  console.log('hiiiiiiii');
  const [visible, setVisible] = useState(false);
  const slideBox = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;
  const rot = useRef(new Animated.Value(0)).current;

 
  const onpressAmin=()=>{
    setVisible(!visible)

    {
      
        Animated.timing(slideBox, {
          toValue: -40,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
    }

    {
      
        Animated.timing(rot, {
          toValue: -90,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
    }

    {
      
        Animated.timing(slide, {
          toValue: -80,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start();
    }
  }
  

  return (
    <SafeAreaView style={styles.safe}>
      <Image source={props.route.params.mainImage} style={styles.mainImage} />
      <TouchableOpacity style={{ position: 'absolute',
    top: vh(10),
    left: vw(20),}} onPress={() => props.navigation.goBack()}>
        <Image
          source={require('../../../assets/arrowWhite.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.scroll}>
          <View style={styles.paramView}>
            <View>
              <Text style={styles.topic}>{props.route.params.topic}</Text>
              <View style={styles.paramView2}>
                <Image source={props.route.params.icon} style={styles.icon} />
                <Text style={styles.time}>{props.route.params.time}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.prize}>Total Prize</Text>
              <Text style={styles.dollar}>
                $<Text style={styles.cost}>30.00</Text>
              </Text>
            </View>
          </View>
          <View style={styles.prizeView}>
            <View style={styles.singleDiv}>
              <Image
                source={require('../../../assets/HomeIcon/gold.png')}
                resizeMode="contain"
                style={styles.medal}
              />
              <View>
                <Text style={styles.position}>1st Prize</Text>
                <Text style={styles.money}>$ 15.00</Text>
              </View>
            </View>

            <View style={styles.singleDiv}>
              <Image
                source={require('../../../assets/HomeIcon/silver.png')}
                resizeMode="contain"
                style={styles.medal}
              />
              <View>
                <Text style={styles.position}>2nd Prize</Text>
                <Text style={styles.money}>$ 10.00</Text>
              </View>
            </View>

            <View style={styles.singleDiv}>
              <Image
                source={require('../../../assets/HomeIcon/bronze.png')}
                resizeMode="contain"
                style={styles.medal}
              />
              <View>
                <Text style={styles.position}>3rd Prize</Text>
                <Text style={styles.money}>$ 5.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.imgDR}>
            <Image
              source={require('../../../assets/HomeIcon/discription.png')}
              resizeMode="contain"
            />
            <Text style={styles.DR}>Description</Text>
          </View>

          <Text style={styles.des}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,{' '}
          </Text>

          <View style={styles.imgDR}>
            <Image source={require('../../../assets/HomeIcon/rules.png')} />
            <Text style={styles.DR}>Rules</Text>
          </View>

          <View style={styles.ruleView}>
            <Image
              source={require('../../../assets/HomeIcon/rulesGreen.png')}
              style={styles.tickImg}
            />
            <Text style={styles.ruleText}>
              It is a long established fact that a reader
            </Text>
          </View>

          <View style={styles.ruleView}>
            <Image
              source={require('../../../assets/HomeIcon/rulesGreen.png')}
              style={styles.tickImg}
            />
            <Text style={styles.ruleText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>

          <View style={styles.ruleView}>
            <Image
              source={require('../../../assets/HomeIcon/rulesGreen.png')}
              style={styles.tickImg}
            />
            <Text style={styles.ruleText}>
              qui dolorem ipsum quia dolor sit amet, consectetur.
            </Text>
          </View>

          <View style={styles.ruleView}>
            <Image
              source={require('../../../assets/HomeIcon/rulesGreen.png')}
              style={styles.tickImg}
            />
            <Text style={styles.ruleText}>
              I must explain to you how all this mistaken.
            </Text>
          </View>

          <View style={styles.ruleView}>
            <Image
              source={require('../../../assets/HomeIcon/rulesGreen.png')}
              style={styles.tickImg}
            />
            <Text style={styles.ruleText}>
              It is a long established fact that a reader
            </Text>
          </View>

          <View style={styles.ruleView}>
            <Image
              source={require('../../../assets/HomeIcon/rulesGreen.png')}
              style={styles.tickImg}
            />
            <Text style={styles.ruleText}>
              It is a long established fact that a reader
            </Text>
          </View>

          <View style={styles.galleryView}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Gallery')}
              style={styles.galleryBtn}>
              <Text style={styles.galleryText}>View Gallery</Text>
            </TouchableOpacity>

            <View>
              <View>
              <View>
      <TouchableOpacity>
        <Animated.Image
          source={require('../../../assets/HomeIcon/camera.png')}
          resizeMode="contain"
          style={{
            width: vw(40),
            height: vh(40),
            borderRadius: 15,
            position: 'absolute',
            right: vw(17),

            transform: [
              {translateX: slideBox},
              {rotate:rot.interpolate({
                inputRange: [0, 90],
                outputRange: ['0deg', '360deg'],
              })}
              
            ],
          }}></Animated.Image>
      </TouchableOpacity>

      <TouchableOpacity>
        <Animated.Image
          resizeMode="contain"
          source={require('../../../assets/HomeIcon/gallery.png')}
          style={{
            width: vw(40),
            height: vh(40),
            borderRadius: 15,
           position: 'absolute',
            right: vw(17),
            transform: [
              {translateX: slide},
              {rotate:rot.interpolate({
                inputRange: [0, 90],
                outputRange: ['0deg', '360deg'],
              })}
            ],
          }}></Animated.Image>
      </TouchableOpacity>
    </View>
              </View>

              <TouchableOpacity
                onPress={()=>onpressAmin()}
                style={styles.plusBtn}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    alignSelf: 'center',
  },
  mainImage: {
    width: width,
    height: vh(200),
  },

  arrow: {
   
    width: vw(25),
    height: vh(25),
    resizeMode: 'contain',
  },
  scroll: {
    width: vw(340),
    alignSelf: 'center',
    marginBottom: vh(20),
  },
  paramView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(10),
  },
  topic: {
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
  paramView2: {
    flexDirection: 'row',
    marginTop: vh(8),
  },
  icon: {
    height: vh(15),
    width: vw(15),
    resizeMode: 'contain',
  },
  time: {
    color: 'grey',
    fontSize: normalize(13),
  },
  prize: {
    color: 'grey',
    fontSize: normalize(15),
  },
  dollar: {
    color: '#FF9904',
    fontSize: normalize(13),
  },
  cost: {
    color: '#FF9904',
    fontSize: normalize(20),
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  prizeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(15),
  },
  singleDiv: {
    flexDirection: 'row',
    padding: vw(10),
    borderRadius: vh(8),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medal: {
    height: vh(25),
    width: vw(20),
    marginTop: vh(5),
    marginRight: vw(10),
  },
  position: {
    color: 'grey',
    fontSize: normalize(13),
  },
  money: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: normalize(13),
  },
  imgDR: {
    flexDirection: 'row',
    marginTop: vh(20),
  },
  DR: {
    fontWeight: 'bold',
    marginLeft: vw(10),
    fontSize: normalize(14),
  },
  des: {
    marginLeft: vw(25),
    fontSize: normalize(14),
  },

  ruleView: {
    flexDirection: 'row',
    marginLeft: vw(20),
    marginTop: vh(5),
  },
  tickImg: {
    height: vh(14),
    width: vw(14),
    resizeMode: 'contain',
    marginTop: vh(3),
  },
  ruleText: {
    marginLeft: vw(5),
    fontSize: normalize(14),
  },
  galleryView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: vh(30),

  },
  galleryBtn: {
    height: vh(40),
    width: vw(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(5),
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  galleryText: {
    color: '#FF9904',
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  plusBtn: {
    height: vh(45),
    width: vw(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(5),
    backgroundColor: '#FF9904',
    position: 'absolute',
    right: vh(10),

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  plusText: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    alignSelf:"center"
  },
});

export default first;
