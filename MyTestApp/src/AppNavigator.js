import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './views/Home';
import DetailsScreen from './views/Details';
import SigninScreen from "./views/SigninScreen";

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }
        }  ,
        Details: {

            screen: DetailsScreen,

            navigationOptions: { title: 'Details' }

        } ,
        Signin: {

            screen: SigninScreen,

            navigationOptions: { title: 'Signin' }

        }

    },
    {
        initialRouteName: "Home"
    }
);


const TabNav  = createMaterialBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Signin: { screen: SigninScreen },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  )
export default createAppContainer(TabNav );