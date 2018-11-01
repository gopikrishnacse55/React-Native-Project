/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Dashboard from './Dashboard';
export default class Login extends Component 
{

  constructor(props)
  {
    super(props);
    this.state = {
      email : '',
      password : '',
      emailError : '',
      passwordError : '',
  
    }
  }


  clickItem() 
  {
    if (this.isValid())
    {
      this.props.navigation.navigate('Dash_board');
    }
    else
    {
      // alert("Enter data");
    }
  }

  formValidation(textValue,type)
  {

    if (type == "Email")
    {
      this.setState({email : textValue})
       if (textValue.length > 0)
       {
         this.validateEmail(textValue);
       }
       else
       {
         this.setState({emailError : 'Enter Email'})
       }
      
    }
    else if(type == "Password")
    {
      this.setState({password : textValue})
        if (textValue.length >= 8)
        {
          this.setState({passwordError : ''})
          
        }
        else
        {
          this.setState({passwordError : 'Enter Password'})
        }

    }
  
    
  }
  validateEmail(emailText) 
  {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(emailText) == false)
    {
        this.setState({emailError:'Enter valid Email'}) 
        this.setState({email : emailText});
    }
    else {
      this.setState({emailError:''})
      this.setState({email : emailText});
    }  
  }

  isValid() 
  {
    const { email, password } = this.state;
    if (email.length > 0 && password.length > 0) 
    {
      return true;
    }

    if (email.length === 0) 
    {
      alert("Enter Email");
      return false;

    }else if (password.length === 0)
     {
       alert("Enter Password")
       return false;
    }

    return true;
  }


  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style = {styles.container}>
        <View style ={styles.logoContainer}>
        <Text style = {styles.titleStyle}>Login</Text>
        </View>
        <View style = {styles.textInputContainer}>
          <TextInput placeholder ="Enter Email" placeholderTextColor="grey" style={styles.textInputStyle} onChangeText = {(getText) => this.formValidation(getText,"Email")}></TextInput>
          <Text style={styles.ErrorStyle}>{this.state.emailError}</Text>
          <TextInput placeholder ="Enter Password" placeholderTextColor="grey" secureTextEntry = {true} style={styles.textInputStyle} onChangeText = {(getText)=>this.formValidation(getText,"Password")}></TextInput>
          <Text style={styles.ErrorStyle}>{this.state.passwordError}</Text>
        </View>
        <View style ={styles.buttonContainer}>
          <TouchableOpacity style = {styles.buttonStyle} onPress = {()=>this.clickItem()}>
          <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
          <View style={styles.MainContainer}>
            <TouchableOpacity style = {styles.FacebookStyle}activeOpacity = {0.5}>
            <Image style = {styles.ImageIconStyle} source ={require('../Images/facebook.png')}/>
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}> Login Using Facebook </Text>
            </TouchableOpacity>
            
        </View>
        </View>
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
         backgroundColor : 'grey',
   },
   logoContainer : {
    flex : 1,
    justifyContent:'center',
    backgroundColor : 'white',
    alignItems : 'center',
    
   },
  titleStyle : {
    color : 'black',
    fontSize: 20,
    fontWeight : 'bold',
  },
  textInputContainer: {
    // flex : 2,
        flexDirection: 'column',
        backgroundColor : 'white',
  },
  textInputStyle : {
    margin : 10,
    height : 50,
    borderColor : 'grey',
    borderWidth : 1,
    borderRadius : 2
    
  },
  buttonContainer : {

    flex : 3,
    backgroundColor : 'white',
  },
  buttonStyle :
  {
    backgroundColor: '#1E90FF',
    padding: 10,
    margin: 10,
    height: 50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius : 2
    
  },
  buttonTextStyle : {
    color : 'white',
    fontSize: 20,
    fontWeight : 'bold',
    fontFamily : 'HelveticaNeue-Bold',
   
  },
  MainContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width:40,
    resizeMode : 'stretch',
  
 },
 SeparatorLine :{
 backgroundColor : '#fff',
 width: 1.5,
 height: 45
  
 },
 TextStyle :{
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
   
 },
 FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#485a96',
  borderWidth: .5,
  borderColor: '#fff',
  height: 50,
  borderRadius: 5 ,
  margin: 5,

},
ErrorStyle :
{
  color : 'red',
  margin : 8
}
})