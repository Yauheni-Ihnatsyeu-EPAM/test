import React, {PureComponent} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Button} from 'react-native';
import { Input } from '../../containers/StartingScreen'

export default class Popup extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    let hideModal = false;
    if(this.props.userName){
      hideModal= true;
    }
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible && !hideModal}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',}}>
            
            <Input />
            </View>
          
        </Modal>
        <Button
          title="GetStarted"
          onPress={() => this.setModalVisible(true)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
  });