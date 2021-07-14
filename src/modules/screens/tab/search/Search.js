import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import ProfileHeader from '../../../components/ProfileHeader';
import {normalize, vh, vw} from '../../../dimensions/Dim';

const searchArr = [
  'Taylor',
  'David',
  'Jane',
  'Kartik',
  'Paul',
  'Grace',
];

var name;
const Search = props => {
  const [search, getSearch] = useState('');
  const [arr, getArr] = useState([]);
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        imageDir={require('../../../../assets/arrowWhite.png')}
        textTitle="Hall Of Frame"
        onpress={() => props.navigation.navigate('Home')}
      />
      <View style={styles.mainView}>
        <CustomInput
          ph="Search"
          oct={text => {
            getSearch(
              searchArr.filter(
                ele => ele.toLowerCase().indexOf(text.toLowerCase()) !== -1,
              ),
            );
            console.log('fill', search);

            name = search[0];
          }}
        />

        <Text style={styles.hint}>Hint:-(Taylor , Grace, Paul , Kartik ,David, Jane)</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate(name)}>
          <Text style={{fontSize:normalize(25),fontWeight:"bold"}}>{search}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    width: vw(320),
    alignSelf: 'center',
  },
  hint:{
    fontSize:normalize(20),
    color:"grey"
  }
});

export default Search;
