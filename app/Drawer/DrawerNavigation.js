'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorDrawer } from './DrawerNavConfig'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
 return {
  navigationState: state.drawer
  }
}

class DrawerNavigation extends React.Component {

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorDrawer navigation={
        addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })
      }
      />
    )
  }
}
export default connect(mapStateToProps)(DrawerNavigation)
