'use strict'
import React, { Component }  from 'react'
import { connect } from 'react-redux';

import { View, Text, TouchableOpacity } from 'react-native'
import HomeView from '../views/HomeView'

class Home extends Component {
  render(){
    return(
      <HomeView onPressMember={ this.props.user !== ''? () => this.props.navigation.navigate('MemberTabBarNavigation', { pageTitle: 'MY ACCOUNT' }) : () => this.props.navigation.navigate('SignIn')}
                onPressFAQ={ () => this.props.navigation.navigate('Faq', { pageTitle: 'FAQ' }) }
      />
    )
  }
}


export default connect()(Home)
