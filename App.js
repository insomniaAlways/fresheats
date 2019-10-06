import React from 'react';
import MainNavigator from './navigations';
import {createAppContainer} from 'react-navigation';
import store from './src/store';
import { Provider } from 'react-redux';

const Navigation = createAppContainer(MainNavigator);

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}
export default App;
