import {connect} from 'react-redux';
import { UserList } from '../../actions/';
import { FriendsList } from '../../components/';
import {bindActionCreators} from 'redux';

function fetchUserFriends (userName) {
  return fetch(`http://bakharevich.by/projects/pica/userlist.php?login=${userName}`);
}

function getUserFriends(userName) {
  return function (dispatch) {
    return fetchUserFriends(userName).then(response => {
      return response.json();
    })
    .then(
      data => {
          dispatch(UserList(data));
      }        
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.anyShit.userName,
    friends: state.anyShit.userList,
   };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (userName) => dispatch(getUserFriends(userName)),
  }
}

export default connectedInput = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

