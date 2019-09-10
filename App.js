import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ApolloProvider } from "react-apollo";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { client } from "./src/helpers/Connection";

import firebase from "firebase";
import { firebaseConfig } from "./config";
import ShareProfile from "./src/helpers/ShareProfile";

firebase.initializeApp(firebaseConfig);

const navigator = createStackNavigator({
  LoadingScreen: LoadingScreen,
  HomeScreen: HomeScreen,
  Web: ShareProfile,
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  ProfileScreen: ProfileScreen
});

const AppNavigator = createAppContainer(navigator);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
