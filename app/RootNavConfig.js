'use strict'
import React from 'react'
import { StackNavigator } from 'react-navigation'

import VoucherDetail from './Member/containers/components/VoucherDetail'
import HomeNavigation from './Home/HomeNavigation'
import DrawerNavigation from './Drawer/DrawerNavigation'

const routeConfiguration = {
  DrawerNavigation: {
    screen: DrawerNavigation,
  },
  //Modal
  VoucherDetail: {
    screen: VoucherDetail,
  },
  //Insert more modals below
  //...
}

export const NavigatorRoot = StackNavigator(routeConfiguration, {
  initialRoute: 'DrawerNavigation',
  mode: 'modal',
  headerMode: 'none',
})
