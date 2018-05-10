import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator  } from 'react-navigation';

import { StartingScreen, HomeScreen, FriendsScreen } from '../screens/';
import { addListener } from '../utils/redux';

export const AppNavigator = createStackNavigator({
  Start: StartingScreen,
  Home: HomeScreen,
  Friends: FriendsScreen,
  },
  {
    initialRouteName: 'Start',
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);