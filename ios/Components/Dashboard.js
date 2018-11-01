/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
export default class Dashboard extends Component 
{

  
sendDatatoFrontView = () =>
{
  this.props.navigation.goBack();
}


  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style = {styles.container}>
    </View>
    );
  }
}


const styles = StyleSheet.create ({
   container: {
     flex : 1,
         flexDirection: 'column',
         justifyContent:'center',
         alignItems : 'stretch',
        //  backgroundColor : 'grey',
   },
})