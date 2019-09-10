import React, { Component } from "react";
import { Text, View, Image, Linking, WebView, Share } from "react-native";
import { styles } from "../styles/ProfileStyle";
import { Button } from "react-native-elements";

class ProfileScreen extends Component {


  shareProfile = async (login, url) => {
    try {
      await Share.share({
        message: `Click the Url to visit @${login}, ${url}`,
        title: "GitHub Profile"
      });
    } catch (error) {
      alert(error.message);
    }
  };

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
          <Text
            style={styles.link}
            onPress={() => this.props.navigation.navigate("Web", { url })}
          >
            {item.url}
          </Text>
          <View style={styles.buttonWidth}>
            <Button
              title="Share"
              onPress={() => this.shareProfile(login, url)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
