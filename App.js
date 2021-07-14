import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import Navigation from './src/navigationWhole/Navigation'
import {store,persistor} from './src/store/Store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <View style={{flex: 1,backgroundColor:"white"}}>
        <Navigation />
      </View>
      </PersistGate>
      </Provider>
    );
  }
}
