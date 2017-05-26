'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// Navigation
import { NavigatorRoot } from './RootNavConfig'
import { NavigatorDrawer } from './Drawer/DrawerNavConfig'
import { NavigatorHome } from './Home/HomeNavConfig'
import { MemberTabBar, memberTabBarReducer } from './Member/MemberNavConfig'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger(), thunk)
}

export default createStore(
  combineReducers({
    //they are organised according from top level to the most bottom level
    //root consumes drawer consumes home consumes memberTabBar
    root: (state, action) => NavigatorRoot.router.getStateForAction(action, state), //StackNavigator w/ Modals
    drawer:  (state, action) => { return NavigatorDrawer.router.getStateForAction(action, state) || state }, //DrawerNavigator
    home: (state, action) => NavigatorHome.router.getStateForAction(action, state), //StackNavigator
    memberTabBar: memberTabBarReducer,
  }),
  middleware(),
)
