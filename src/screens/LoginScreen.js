import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import Header from '../components/Header';
import Input from '../components/Input';
import { styles } from '../styles/LoginStyle';


class LoginScreen extends Component {
  state = {
      email: '',
      password: '',
      error: ''
  }

  onButtonPress() {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak password!')
            } else {
              this.onLoginFailure.bind(this)(errorMessage)
            }
          });
      });
  }  
  
  onLoginSuccess() {
    this.setState({
      email: '', password: '', error: '', loading: false
    })
  }  
  
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false })
  }

  render() {
    return (
    <KeyboardAvoidingView behavior='padding' style={styles.Container}>
     <View style={styles.Container}>
       <View style={styles.infoContainer}>
        <Header title='Codelab'/>
        <Input
        placeholder="Enter email..."
        placeholderTextColor="#fff"
        value={this.state.email}
        keyboardType="email-address"
        returnKeyType="next"
        autoCorrect={false}
        onChangeText={email => this.setState({ email })} 
        />
        <Input style={styles.input} 
        placeholder="Enter password..."
        placeholderTextColor="#fff"
        value={this.state.password}
        returnKeyType="go"
        secureTextEntry={true}
        autoCorrect={true}
        onChangeText={password => this.setState({ password })} 
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
         <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
       </View>
       <Text style={styles.errorTextStyle}>
        {this.state.error}
        </Text>
      </View>
    </KeyboardAvoidingView> 
    );
  }
}



export default LoginScreen;
