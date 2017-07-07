import React from 'react';
import { 
  Alert, 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button 
} from 'react-native';

export default class Test extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
          </View>
          <View style={{flex: 1, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'red'}} />
        <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'green'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 25
  },
  alternativeLayoutButtonContainer: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
