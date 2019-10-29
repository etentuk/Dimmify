import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/root.navigator';
import { store } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
