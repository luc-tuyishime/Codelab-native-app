import React from 'react'
import { Text, View, TextInput } from 'react-native';

const Input = (props) => {
  return (
    <View>
       <TextInput value={props.value} style={styles.textInputStyles} 
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        />
    </View>
  )
}

const styles = {
  textInputStyles: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10
  }
}

export default Input;