import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import ComponentFollow from './ComponentFollow';
import FollowBtn from './FollowBtn';
import {vh, vw} from '../../../dimensions/Dim';
import { useSelector } from 'react-redux';

const Array = [
  {
    id:"Jane",
    name: 'Jane Lou',
    img: require('../../../../assets/follow/ppic1.jpeg'),
  },
  {
    id:"Kartik",
    name: 'Kartik',
    img: require('../../../../assets/follow/ppic2.jpeg'),
  },
  {
    id:"David",
    name: 'David',
    img: require('../../../../assets/follow/ppic3.jpeg'),
  },
  {
    id:"Paul",
    name: 'Paul hames',
    img: require('../../../../assets/follow/ppic4.jpeg'),
  },
  {
    id:"Taylor",
    name: 'Taylor Methow',
    img: require('../../../../assets/follow/ppic5.jpeg'),
  },
  {
    id:"Grace",
    name: 'Grace Dartson',
    img: require('../../../../assets/follow/ppic6.jpeg'),
  },
];



const Followers = props => {
  const [follow, setFollow] = useState(true);
  const unhuman=useSelector(state=>state.array)

  const navToProfile=(text)=>{
    console.log("profmname",text)
  }
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        {Array.map(ele => {
          return (
            <View style={styles.mainView}>
              <View>
                <ComponentFollow
                  img={ele.img}
                  name={ele.name}
                  onProfile={()=>props.navigation.navigate(ele.id)}
                />
              </View>
              <View>
                <FollowBtn 
                item={ele}
                img={unhuman.includes(ele)}
                />
              </View>
            </View>
          );
        })}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(15),
    alignItems: 'center',
  },
});

export default Followers;
