import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';

import firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig)

const navigator = createStackNavigator(
  {
    LoadingScreen: LoadingScreen,
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
  }
);

const AppNavigator =  createAppContainer(navigator);

class App extends Component {
  render(){
    return(
      <AppNavigator />
    )
  }
}

export default App;