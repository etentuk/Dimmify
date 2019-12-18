import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/root.navigator';
import { store } from './src/redux/store';
import navigationService from './navigationService';

const App = () => (
  <Provider store={store}>
    <AppNavigator
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
