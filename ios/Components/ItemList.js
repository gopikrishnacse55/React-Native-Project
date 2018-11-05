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
               <TouchableOpacity onPress = {() => alert("This is First Image")}>
                 <Image style={styles.imagestyle} source={require('../Images/order.jpeg')}></Image>
               </TouchableOpacity>
            </View>
            <View style={{flex : 2,backgroundColor : 'orange'}}>
              <TouchableOpacity onPress = {() => alert("This is Second Image")}>
                 <Image style={styles.imagestyle} source={require('../Images/urgent.jpeg')}></Image>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex : 3,flexDirection: 'row', backgroundColor: 'skyblue'}}>
            <View style={{flex : 2, backgroundColor : 'blue'}}>
                <TouchableOpacity onPress = {() => alert("This is Third Image")}>
                  <Image style={styles.imagestyle} source={require('../Images/urgent.jpeg')}></Image>
                 </TouchableOpacity>
            </View>
            <View style={{flex : 2,backgroundColor : 'purple'}}>
                <TouchableOpacity onPress = {() => alert("This is Fourth Image")}>
                  <Image style={styles.imagestyle} source={require('../Images/order.jpeg')}></Image>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flex : 3,flexDirection: 'row', backgroundColor: 'skyblue'}}>
             <View style={{flex : 2, backgroundColor : 'yellow'}}>
                <TouchableOpacity onPress = {() => alert("This is Fifth Image")}>
                     <Image style={styles.imagestyle} source={require('../Images/order.jpeg')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{flex : 2,backgroundColor : 'green'}}>
              <TouchableOpacity onPress = {() => alert("This is Sixth Image")}>
                  <Image style={styles.imagestyle} source={require('../Images/urgent.jpeg')}></Image>
              </TouchableOpacity>
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
    imagestyle:{
        width: '100%',
        height: '100%',
        // marginVertical: 15,
        // borderWidth: 1,
        // borderColor: 'gray',
        // borderRadius:5,
        },
})