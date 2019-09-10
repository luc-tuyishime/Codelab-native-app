import React, { Component } from "react";
import { Text, View, FlatList, Image, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import firebase from "firebase";
import { SearchBar, Button } from "react-native-elements";
import { styles } from "../styles/LogoutStyle";
import { graphql } from "react-apollo";
import { getUsers } from "../helpers/graphqlQuery";
import { users } from "../helpers/displayUsers";
import { loadingIcon } from "../styles/LoadingStyle";
import { imageStyle } from "../styles/ImageStyle";

class HomeScreen extends Component {
  state = {
    searchUser: '',
    fullData: {},
    fullFilteredData: {},
    loading: true,
    query: ''
  };

  updateSearch = query => {
    this.setState(prevState => ({
      ...prevState,
      query
    }));

    const { fullData } = this.state;
    const results = fullData.edges.filter((object) => {
      let { login, name } = object.node;
      name = name ? name.toLowerCase() : '';
      login = login ? login.toLowerCase() : '';
      return login.includes(query.toLowerCase()) || name.includes(query.toLowerCase()) ? object : null;
    })
    this.setState(prevState => ({
      ...prevState,
      fullFilteredData: {
        edges: results
      }
    }));
  };

  componentWillReceiveProps(nextProps) {
    const {
      data: { search }
    } = nextProps;
    this.setState({ fullData: search, fullFilteredData: search, loading: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { query, fullFilteredData, loading } = this.state;

    const usersList = users(fullFilteredData);

    return loading ? (
      <View style={loadingIcon.Container}>
        <ActivityIndicator size="large" color="#2196f3" />
      </View>
    ) : (
      <View>
        <View style={styles.containerTop}>
          <View style={styles.searchWidth}>
            <SearchBar
              lightTheme
              round
              containerStyle={styles.searchContainer}
              placeholder="Search a user..."
              placeholderTextColor="black"
              searchIcon={{ backgroundColor: 'red'}}
              onChangeText={this.updateSearch}
              value={query}
            />
          </View>

          <View style={styles.buttonWidth}>
            <Button
              title="Log Out"
              type="outline"
              onPress={() => firebase.auth().signOut()}
            />
          </View>
        </View>
        <FlatList
          data={usersList}
          keyExtractor={(item, key) => `${item} ${key}`}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => navigate('ProfileScreen', { item: item })}>
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
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  }
}

export default graphql(getUsers)(HomeScreen); // now we have all the data coming from the query(getUsers)
