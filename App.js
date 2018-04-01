/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "mobx-react";
import AppState from './store/AppState';

import { View, StatusBar,  Alert } from 'react-native';
import { BackButton , NativeRouter as Router , Route , Switch } from 'react-router-native';
import Index from './component/Index';
import MyResume from './component/MyResume';
import Resume from './component/Resume';
import ResumeModify from './component/ResumeModify';
import ResumeAdd from './component/ResumeAdd';
import Settings from './component/Settings';
import Login from './component/Login';
import Logout from './component/Logout';
import Register from './component/Register';

function alert( info )
{
    Alert.alert( info );
}

function confirm( info , callback )
{
  Alert.alert(
    "确认",
    info,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => callback() },
    ],
    { cancelable: false }
  )
}

export default class App extends Component {
  render() {
    return (
      <Provider store={AppState}>
      <Router>
      <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />  
      <BackButton/>
        <Switch>
          <Route path="/settings" component={Settings}/>
          <Route path="/myresume" component={MyResume}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/register" component={Register}/>
          <Route path="/resume/:id" component={Resume}/>
          <Route path="/resume_modify/:id" component={ResumeModify}/>
          <Route path="/resume_add" component={ResumeAdd}/>
          <Route path="/" component={Index}/>
        </Switch>
      </View>
      </Router>
      </Provider>
    );
  }
}


