import React from 'react';
import { ScrollView, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FriendsList } from '../../containers/Friends'

export default class FriendsScreen extends React.Component {
  render() {
    return (
        <FriendsList/>
    );
  }
}