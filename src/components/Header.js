import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
  return (
    <Text style={styles.viewStyles}>{props.title}</Text>
  )
};

const styles = {
  viewStyles: {
    fontSize: 32,
    shadowColor: '#ddd',
    color: '#fff',
    height: 60,
    paddingTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 15
  }
}

export default Header;