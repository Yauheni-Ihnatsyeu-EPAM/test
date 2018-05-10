import React, { Component } from 'react';
import { StyleSheet , View, Text, TouchableOpacity } from 'react-native';

export default class NumText extends Component {
    constructor(props) {
      super(props);
    }
    render(){
    return (
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Friends")}>
            <Text style={styles.number}>{this.props.number}</Text>
            <Text style={styles.caption}>{this.props.caption}</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    number: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold'
    },
  });
