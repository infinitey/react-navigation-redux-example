'use strict'
import React from 'react'
import { View } from 'react-native'

import { TabNavigator } from 'react-navigation'

import Overview from './containers/Overview'
import Rewards from './containers/Rewards'

import styles from '../styles/styles'

const routeConfiguration = {
  Overview: { screen: Overview,
     navigationOptions: {
       tabBarLabel: 'Overview',
     }
  },
  Rewards: { screen: Rewards,
    navigationOptions: {
      tabBarLabel: 'Rewards',
    }
  },
}

const tabBarConfiguration = {
  //...other configs
  animationEnabled: true,
  tabBarPosition: 'top',
  swipeEnabled: true,
  lazy: false,
  backBehavior: 'none',
  tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#555',
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {height:3, backgroundColor:"#FFF"},
      style: styles.tabBarStyle,
      labelStyle: styles.tabLabelStyle,
      iconStyle: styles.tabIconStyle,

  },
}

export const MemberTabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const memberTabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return MemberTabBar.router.getStateForAction(action,state)
  }
}
