import {connect} from 'react-redux';
import NumText  from '../../components/Input';
import {bindActionCreators} from 'redux';



const mapDispatchToProps = (dispatch) => {
  return {
    switchScreen: (userName) => dispatch({type:"Friends"})
  }
}

export default connectedNumText = connect(null, mapDispatchToProps)(NumText);

