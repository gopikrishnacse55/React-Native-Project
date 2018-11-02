/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,FlatList,Image,ActivityIndicator,TouchableOpacity} from 'react-native';
import APIData from '../Components/APIData';
import { createStackNavigator } from 'react-navigation';
export default class Dashboard extends Component 
{

  constructor(props)
  {
    super(props)
    this.state = {
      dealsArray : [],
      isLoadingIndicator : true,
    }
  }

  // getItemFromListView(itemTitle,itemPrice)
  // {

  //   alert(itemTitle,itemPrice);
  //   this.props.navigation.navigate('Item_Details',{itemTitle,itemPrice})
  // }

FlatListItemSeparator = () =>
 {
    return(
      <View style = {styles.separatorStyle}>
      </View>
    )
    
}

async componentDidMount()
{
  const deals = await APIData.fetchDataFromAPI();
  this.setState({
    dealsArray : deals,
    isLoadingIndicator : false
  })
}

  render() 
  {
    var {navigate} = this.props.navigation;
      if (this.state.isLoadingIndicator)
      {
        return (
          <View style={styles.indicatorStyle}>
              <ActivityIndicator  size="large" color="black"/>
          </View>
        )
      }
      else
      {

        return(
          <View style = {styles.container}>
          <FlatList
                   data={this.state.dealsArray}
                   ItemSeparatorComponent = {this.FlatListItemSeparator}
                   renderItem={({item}) => 
                   <TouchableOpacity onPress = {()=>navigate("Item_Details",{item})}>
                    <View style = {styles.container}>
                        <Text  style = {styles.welcome}>Title : {item.title}</Text>
                        <Text  style = {styles.priceStyle}>Price : {item.price}</Text>
                       <Image style = {styles.imageStyle} source={{uri: item.media[0]}}/>
                   </View>
                   </TouchableOpacity>
                 }
               />
        </View>
        )
      }

  }
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom : 5
    },
    welcome: {
      fontSize: 15,
      color:'black',
      padding:15,
      paddingBottom : 5
      },
   priceStyle :
      {
      fontSize: 13,
      color:'black',
      marginHorizontal : 20,
      paddingBottom : 10
      },
    imageStyle : {
        width : 60,
        height : 60,
         marginHorizontal : 20,
        paddingTop : 5,
    },
    indicatorStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    separatorStyle :
    {
      height: 1,
      width: "100%",
      backgroundColor: "#808080",
    }
})