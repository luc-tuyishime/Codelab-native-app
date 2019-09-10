import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import { styles } from "../styles/ProfileStyle";
import { Button } from "react-native-elements";
import shareProfile from "../helpers/ShareProfile";

class ProfileScreen extends Component {
  render() {
    const {
      navigation: {
        state: {
          params: { item }
        }
      }
    } = this.props;
    const {
      repositories: { totalCount },
      starredRepositories
    } = item;
    const { login, url } = item;
    return (
      <View>
        <Text style={styles.profile}>Profile</Text>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: item.image
            }}
          />
          <Text style={styles.profile2}>{item.name}</Text>
          <Text style={styles.username}>{item.login}</Text>
          <Text style={styles.repos}>
            {totalCount > 1
              ? `Repositories: ${totalCount}`
              : `Repository: ${totalCount}`}
          </Text>
          <Text style={styles.repos}>
            {starredRepositories.totalCount
              ? `Stars: ${starredRepositories.totalCount}`
              : ""}
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL(item.url)}>
            {item.url}
          </Text>
          <View style={styles.buttonWidth}>
            <Button title="Share" onPress={() => shareProfile(login, url)} />
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
