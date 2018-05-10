import {connect} from 'react-redux';
import { UserInfo } from '../../actions/';
import {DashBoard} from '../../components/';
import {bindActionCreators} from 'redux';

function fetchUserInfo (userName) {
  return fetch(`http://bakharevich.by/projects/pica/userinfo.php?login=${userName}`);
}

function getUserInfo(userName) {
  return function (dispatch) {
    return fetchUserInfo(userName).then(response => {
      return response.json();
    })
    .then(
      data => {
          dispatch(UserInfo(data));
      }        
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.anyShit.userName,
    userInfo: state.anyShit.userInfo || {},
   };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (userName) => dispatch(getUserInfo(userName)),
  }
}

export default connectedDashBoard = connect(mapStateToProps, mapDispatchToProps)(DashBoard);

