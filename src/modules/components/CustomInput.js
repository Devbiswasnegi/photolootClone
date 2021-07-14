import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {vh, vw} from '../dimensions/Dim';

const CustomInput = props => {
  const [shield,setShield]=useState(styles.textInput)

  const onFocus=()=>{
    setShield(styles.onfocus);
    props.of
  }
  const onBlur=()=>{
    setShield(styles.textInput)
  }
  return (
    <SafeAreaView>
      <View>
        {
          <TextInput
            style={shield}
            placeholder={props.ph}
            onChangeText={props.oct}
            value={props.value}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={props.ref}
            onSubmitEditing={props.ose}
            secureTextEntry={props.secure}
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="off"
          />
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: vh(45),
    width: vw(320),
    alignSelf: 'center',
    borderRadius: vh(10),
    marginVertical: vh(5),
    padding: vh(10),
    backgroundColor: '#c9c9c950',
  },

  onfocus:{
    height: vh(45),
    width: vw(320),
    alignSelf: 'center',
    borderRadius: vh(10),
    marginVertical: vh(5),
    padding: vh(10),
    backgroundColor: '#c9c9c950',
    borderWidth:1,
    borderColor:"#FF9904"
  }
});

export default CustomInput;
