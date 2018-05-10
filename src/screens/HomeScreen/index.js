import React from 'react';
import { View, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DashBoard } from '../../containers/HomeScreen';

export default class HomeScreen extends React.Component {  
    render() {
      return (<DashBoard navigation={this.props.navigation}/>
      );
    }
  }
