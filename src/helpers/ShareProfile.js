import React, { Component } from 'react'
import { Text, View ,WebView} from 'react-native'

export default class ShareProfile extends Component {
  render() {
      const { navigation:{state:{params:{url:uri}}} } = this.props
    return (
      <View style={{flex:1}}>
       <WebView source={{uri}}/>
      </View>
    )
  }
}