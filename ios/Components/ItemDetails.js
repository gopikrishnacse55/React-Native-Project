/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView,Button} from 'react-native';
import ItemList from './ItemList';
// import {StackNavigator} from 'react-navigation';
export default class ItemDetails extends Component 
{

  static navigationOptions = ({navigation}) =>
  ({
    title : "Item Details",
    headerStyle : {
        backgroundColor : '#1E90FF',
    },   
    headerTintColor : 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize : 20
      },
      headerRight : (
        <Button onPress = {() => navigation.navigate("Item_List")} title="Add" color='white'></Button>
      )
  });

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