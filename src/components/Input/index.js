import React, { Component } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import { Login, Logout } from '../../actions'

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: 'bakharevich' };
  }

  render() {
    return (
        <View>
            <Text>
                Enter Instagram account
            </Text>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}
            />
            <Button onPress={()=>this.props.onLogin(this.state.userName)}  title="GO!" ></Button>
      </View>
    );
  }
}