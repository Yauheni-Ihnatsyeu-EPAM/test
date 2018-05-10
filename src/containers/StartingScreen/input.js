import { Login, Logout } from '../../actions/';
import  Input  from '../../components/Input';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


function fetchUserInfo (userName) {
  return fetch(`http://bakharevich.by/projects/pica/checkuser.php?login=${userName}`);
}

function checkAccount(userName) {
  return function (dispatch) {
    return fetchUserInfo(userName).then(response => {
      return response.json();
    })
    .then(
      data =>{
        if(data.result == 1){
          dispatch(Login(userName));
        }
        else{ 
          return dispatch(Logout());
        }
      }        
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onLogin: (userName) => dispatch(checkAccount(userName))
    }
}

export default connectedInput = connect(null, mapDispatchToProps)(Input);

