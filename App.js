/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './ios/Components/Login'
import AppNavigator from './ios/Components/AppNavigator'
export default class App extends Component 
{
  render() {
    return (
     <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
     flex : 1,
         flexDirection: 'row'
   },
})