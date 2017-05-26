'use strict'
import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import HomeNavigation from '../Home/HomeNavigation'

const stackNavigatorConfiguration = {
  initialRoute: 'RootNavigation',
  contentOptions: {
      activeTintColor: '#e91e63',
  },
}

export const NavigatorDrawer = DrawerNavigator({
  HomeNavigation: {
    screen: HomeNavigation,
  },
}, stackNavigatorConfiguration );
