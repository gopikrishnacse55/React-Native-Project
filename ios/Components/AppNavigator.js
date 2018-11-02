import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Dashboard from './Dashboard';
import ItemDetails from './ItemDetails';

const AppNavigator = createStackNavigator({
  Login:{ 
      screen: Login,
      navigationOptions: {
          header : null }
  },
  Dash_board : { screen : Dashboard,navigationOptions : {

    title : "Dashboard",
    headerStyle : {
        backgroundColor : '#1E90FF',
    },   
    headerTintColor : 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize : 20
      },
  }},

  Item_Details : { screen : ItemDetails,navigationOptions : {
    
        title : "Item Details",
        headerStyle : {
            backgroundColor : '#1E90FF',
        },   
        headerTintColor : 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize : 20
          },
      }},

});

export default AppNavigator;