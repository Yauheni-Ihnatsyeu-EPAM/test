import React from 'react';
import { View, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Popup } from '../../containers/StartingScreen'

export default class StartingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Popup navigation={this.props.navigation}/>
      </View>
    );
  }
}