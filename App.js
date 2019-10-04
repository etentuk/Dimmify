import React from "react";
import { Provider } from 'react-redux';
import AppNavigator from "./src/navigation/root.navigator"
import {store} from './src/redux/store'



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
    );
  }
}

export default App
