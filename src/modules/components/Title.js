import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {normalize, vh, vw} from '../dimensions/Dim';
import notification from '../screens/tab/Notification';

const title = props => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.textTitle}>{props.titleText}</Text>
        <Text style={styles.content}>{props.contentText}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    marginTop: vh(30),
  },
  textTitle: {
    fontSize: normalize(32),
    fontWeight: 'bold',
    marginVertical: vh(10),
  },

  content: {
    fontSize: normalize(18),
    color: '#808080',
  },
});
export default title;
