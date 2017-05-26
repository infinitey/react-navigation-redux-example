'use strict'
import React from 'react'
import { View, Text, Button,  TouchableOpacity } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

// Screens
import Home from  './containers/Home'
import SignIn from './containers/SignIn'
import MemberTabBarNavigation from '../Member/MemberTabBarNavigation'




const routeConfiguration = {
  Home: {screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Main Menu',
      headerMode: 'screen',
      headerRight: <Button title="Sign In" onPress={() => navigation.navigate('SignIn') } ></Button>,
      headerLeft: <Button title="Menu" onPress={ () => navigation.navigate('DrawerOpen') } ></Button>
    }),
  },
  SignIn: {screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
    },
  },

  MemberTabBarNavigation: { screen: MemberTabBarNavigation,
    navigationOptions: {
      title: 'MY ACCOUNT',
    },
    tabBarPosition: 'top',
  },
}

const stackNavigatorConfiguration = {
  initialRoute: 'Home'
}

export const NavigatorHome = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
