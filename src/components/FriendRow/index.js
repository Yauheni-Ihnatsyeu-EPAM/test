import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';

export default class FriendRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {photo, name} = this.props;
        return (
            <View style={styles.container}>
                <Image source={{ uri: photo}} style={styles.image}/>
                <Text>{name}</Text>
                <Button title="Action"/>
            </View>
        )
  }
}


const styles = StyleSheet.create({
    container: {
      margin: 10,
      paddingLeft: 5,
      paddingRight: 5,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(192,170,170,0.5)',
      justifyContent: 'space-between',
      borderRadius: 25,
    },
    image:{
      opacity: 0.35,
      width: 40,
      height: 40,
      borderRadius: 50,
    },
  });