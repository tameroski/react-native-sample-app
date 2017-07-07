import React from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Button 
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Test"
        onPress={() => navigate('Test')}
      />
    );
  }
}