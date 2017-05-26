'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorRoot } from './RootNavConfig'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
 return {
  navigationState: state.root
  }
}

class RootNavigation extends React.Component {

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorRoot
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(RootNavigation)
