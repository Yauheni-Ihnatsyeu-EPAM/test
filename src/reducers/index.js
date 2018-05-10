import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators';
import { LOGIN, LOGOUT, USER_INFO, USER_LIST } from '../actions';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Start');
const secondAction = AppNavigator.router.getActionForPathAndParams('Home');
const thirdAction = AppNavigator.router.getActionForPathAndParams('Friends');
const tempNavState = AppNavigator.router.getStateForAction(secondAction);
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState,
  thirdAction
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Start' }),
        state
      );
      break;
      case "Friends":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Friends' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialShitState = { isLoggedIn: false, userInfo: {} };

function anyShit(state = initialShitState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, userName: action.userName };
    case LOGOUT:
      return { ...state };
    case USER_INFO:
      return { ...state, userInfo: action.info };
    case USER_LIST:
      return { ...state, userList: action.list };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  anyShit,
});

export default AppReducer;