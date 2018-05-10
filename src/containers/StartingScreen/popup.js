import {connect} from 'react-redux';
import {Popup} from '../../components';


function mapStateToProps(state) {
  return {
    userName: state.anyShit.userName,
   };
}



export default connectedPopup = connect(mapStateToProps)(Popup);

