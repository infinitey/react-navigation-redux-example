'use strict'
import React, { Component }  from 'react'
import { connect } from 'react-redux';

import { View, Text, TouchableOpacity } from 'react-native'
import SignInView from '../views/SignInView'

class SignIn extends Component {

  submitLogin() {
      
  }

  render(){
    return(
      <SignInView
        onPress={this.submitLogin.bind(this)}
        navigation={ this.props.navigation } />
    )
  }
}





export default connect()(SignIn)
