/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class ItemDetails extends Component 
{
  render() {
    var {params} = this.props.navigation.state;
    return (
        <View style = {styles.container}>
            <Text>Title : {params.item.title}</Text>
            <Text>Price : {params.item.price}</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create ({
   container: 
   {
    flex : 1,
    justifyContent:'center',
    alignItems : 'center',
   },


})