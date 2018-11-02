/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView,Button} from 'react-native';
// import {StackNavigator} from 'react-navigation';
export default class ItemList extends Component 
{


  render() {
    var {params} = this.props.navigation.state;
    return (
        <View style={{flex: 1}}>
        <View style={{flex : 3,  flexDirection: 'row', backgroundColor: 'powderblue'}}>
            <View style={{flex : 2, backgroundColor : 'red'}}>
            </View>
            <View style={{flex : 2,backgroundColor : 'orange'}}>
            </View>
        </View>
        <View style={{flex : 3,flexDirection: 'row', backgroundColor: 'skyblue'}}>
        <View style={{flex : 2, backgroundColor : 'blue'}}>
            </View>
            <View style={{flex : 2,backgroundColor : 'purple'}}>
            </View>
        </View>
        <View style={{flex : 3,flexDirection: 'row', backgroundColor: 'skyblue'}}>
        <View style={{flex : 2, backgroundColor : 'yellow'}}>
            </View>
            <View style={{flex : 2,backgroundColor : 'green'}}>
            </View>
        </View>
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