import React, { PureComponent  } from 'react';
import { View, ScrollView, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import { Login, Logout } from '../../actions'
import {NumText} from '../';                       //там есть контейнер, но не работало, пожтому такая ужасная навигация

const screenWidth = Dimensions.get('window').width;

export default class DashBoard extends PureComponent  {
  constructor(props) {
    super(props);
    this.state = { userName: 'Enter account name' };
    this.props.fetchData(this.props.userName);
  }
  componentDidMount = () => {
    this.props.fetchData(this.props.userName);
  }
  

  render() {
    let {photo, name, followers, following, followers_gained,
       followers_lost, followers_i_dont_follow, followers_not_following_back,
       users_blocking_me, deleted_comments, ...rest} = this.props.userInfo;
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
          <Image source={{ uri: photo}} style={styles.image}/>
                <View style={styles.imageText}>
                  <Text style={styles.accountName}>{name}</Text>
                    <View style={styles.text}>
                      <NumText number={followers} caption="followers" navigation={this.props.navigation}/>
                      <NumText number={following} caption="following" navigation={this.props.navigation}/> 
                    </View>
                </View>
            </View>
            <View style={styles.cellsContainer}>
              <View style={styles.cell}>
                <NumText number={followers_gained} caption="followers gained" navigation={this.props.navigation}/> 
              </View>
              <View style={styles.cell}>
                <NumText number={followers_lost} caption="followers lost" navigation={this.props.navigation}/> 
              </View>
              <View style={styles.cell}>
                <NumText number={followers_i_dont_follow} caption="followers i dont follow" navigation={this.props.navigation}/> 
              </View>
              <View style={styles.cell}>
                <NumText number={followers_not_following_back} caption="followers not following back" navigation={this.props.navigation}/> 
              </View>
              <View style={styles.cell}>
                <NumText number={users_blocking_me} caption="users blocking me" navigation={this.props.navigation}/> 
              </View>
              <View style={styles.cell}>
                <NumText number={deleted_comments} caption="deleted comments" navigation={this.props.navigation}/> 
              </View>
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  imageContainer:{
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    opacity: 0.35,
    width: screenWidth,
    height: 300,
  },
  imageText: {
    position: 'absolute',
  },
  text:{
    width: 200,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountName:{
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: 'center',
  },
  cellsContainer:{
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    height: 100,
    width: 100,
    margin: 30,
    backgroundColor: 'grey',
  }
});