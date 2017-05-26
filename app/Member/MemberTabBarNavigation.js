'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { MemberTabBar } from './MemberNavConfig'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.memberTabBar,
  }
}

class MemberTabBarNavigation extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <MemberTabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(MemberTabBarNavigation)
