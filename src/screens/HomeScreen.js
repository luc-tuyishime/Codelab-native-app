import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  
} from "react-native";
import firebase from "firebase";
import { SearchBar, Button } from 'react-native-elements';
import { styles } from "../styles/LogoutStyle";
import { graphql } from "react-apollo";
import { getUsers } from "../helpers/graphqlQuery";
import { users } from "../helpers/displayUsers";
import { loadingIcon } from "../styles/LoadingStyle";
import { imageStyle } from "../styles/ImageStyle";


class HomeScreen extends Component {
  state = {
    searchUser: '',
  }

  updateSearch = search => {
    this.setState({ searchUser });
  };

  render() {
    const { searchUser } = this.state;
    const {
      data: { search, loading }
    } = this.props;
    const usersList = users(search);
    return loading ? (
      <View style={loadingIcon.Container}>
        <ActivityIndicator size="large" color="#2196f3" />
      </View>
    ) : (
      <View>
        
        <SearchBar
        lightTheme round 
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={searchUser}
      />
        
        <FlatList
          data={usersList}
          keyExtractor={(item, key) => `${item} ${key}`}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.item1}>
              <Image
                style={imageStyle.image}
                source={{
                  uri: item.image
                }}
              />
              </View>
              <View style={styles.item2}>
              <Text style={styles.name}>{item.name || item.username}</Text>
              <Text style={styles.username}>{item.username}</Text>
              </View>
  
              <View style={styles.item3}>
                <Text style={styles.repoNumber}>
                  {item.reposNumber} <Text>Repos</Text>
                </Text>
              </View>
              <View style={styles.hairline} />
            </View>
          )}
        />
        <View style={styles.buttonLogout}>
        <Button
          title="Sign Out"
          onPress={() => firebase.auth().signOut()}
        />
        </View>
      </View>
    );
  }
}




export default graphql(getUsers)(HomeScreen); // now we have all the data coming from the query(getUsers)
