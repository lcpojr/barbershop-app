import React, {Component} from 'react';
import ForgotPassword from './src/screen/ForgotPassword'
import Login from './src/screen/Login'
import CreateAccount from './src/screen/CreateAccount'
import Home from './src/screen/Home'

import {createStackNavigator, createAppContainer} from 'react-navigation';


const App = createStackNavigator({
  Login: {screen: Login},
  CreateAccount: {screen: CreateAccount},
  ForgotPassword: {screen: ForgotPassword},
  Home: {screen: Home},
}, {
  initialRouteName: 'Login'
});

export default createAppContainer(App)
