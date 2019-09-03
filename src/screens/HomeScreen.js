import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Codelab....is for me</Text>
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

export default HomeScreen;
