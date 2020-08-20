/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  View, Text
} from 'react-native';
import AppContainer from './src/Navigation/Navigation'
import { Constants } from './src/network/Apicall';
import NetInfo from '@react-native-community/netinfo';
//import SafeAreaView from 'react-native-safe-area-view';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      internet: Constants.internet,
    }
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this)
  }
  componentDidMount() {
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = (connect) => {
    console.log("handle Connectivity change callback :" + connect.isConnected)
    if (connect.isConnected) {
      this.setState({ internet: true });
    } else {
      this.setState({ internet: false });
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('./src/Images/splash.jpg')}
        style={{ width: '100%', height: '100%' }}>
        {this.state.internet ? null : <View style={{ height: '5%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkred' }}>
          <Text style={{ color: 'white', alignSelf: 'center' }}>No Internet</Text>
        </View>
        }
        <AppContainer />
      </ImageBackground>

    );
  }
}

export default App;
