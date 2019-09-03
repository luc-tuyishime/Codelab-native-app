import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {

    componentDidMount = () => { // call the method the first time screen load
        this.checkIfLoggedIn(); 
    }

 checkIfLoggedIn = () => {
    const { navigation: { navigate }} = this.props;
   firebase.auth().onAuthStateChanged((user) => {
     return user ? navigate('HomeScreen') : navigate('LoginScreen')
   })
 }
  render() {
    return (
      <View style={styles.Container}>
        <ActivityIndicator size="large" color="#2196f3"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    fontSize: 30,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoadingScreen;
