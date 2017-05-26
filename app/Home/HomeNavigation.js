'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHome } from './HomeNavConfig'

// Redux
import { connect } from 'react-redux'

// Icon
//import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.home
  }
}

//connect doesnt pass dispatch to wrapped component, need to combine dispatch + actioncreators
function mapDispatchToProps (dispatch) {
  return Object.assign({dispatch: dispatch}, {getSystemCode: () => dispatch(getSystemCode())});
  //return {getSystemCode: () => dispatch(getSystemCode())}

}

class HomeNavigation extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorHome
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation)
