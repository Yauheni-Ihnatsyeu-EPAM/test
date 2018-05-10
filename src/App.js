import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators';
import { middleware } from './utils/redux';

const store = createStore(
  AppReducer,
  composeWithDevTools(
  applyMiddleware(middleware),
  applyMiddleware(thunk)),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;