import React, {PureComponent} from 'react';
import { ScrollView, Button, Text } from 'react-native';
import { FriendRow } from '../../components'

var index = 0;

export default class FriendsList extends PureComponent {
    constructor(props) {
        super(props);
        this.props.fetchData(this.props.userName);
      }

      componentDidMount = () => {
        this.props.fetchData(this.props.userName);
      }
      
  render() {
    let friends = [];
    debugger;
    if(this.props.friends){
      friends = this.props.friends.map(friend =>{
       return (<FriendRow name={friend.name} photo={friend.photo} key={++index}/>)})
      }
    
    
    return (
      <ScrollView >
        {friends}
      </ScrollView>
    );
  }
}