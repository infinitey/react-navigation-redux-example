'use strict'
import React, { Component }  from 'react'
import { connect } from 'react-redux'
import {
  Animated,
  Button,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity } from 'react-native'

import styles from '../../styles/styles'

class SignInView extends Component {
  constructor(props) {
    super(props);

    this.viewMargin = new Animated.Value();

    this.state = {
      emailAddress: '',
      password:'',
    };
  }

  render(){
    return(
      <KeyboardAvoidingView style={{flex:1,}} behavior="padding" >

        <View style={{flex:2, backgroundColor: '#DDD'}}>
          {this.props.isAuthenticating && <Text style={styles.voucherNoteText}>
            WTF
          </Text>}
        </View>

        <View style={{flex:4.5, alignItems:'center'}}>
          <Text style={styles.signInLabelStyle}>
            Email
          </Text>
          <View>
            <TextInput
              style={styles.signInTextInputStyle}
              keyboardType="email-address"
              multiline={false}
              placeholder="Enter email here"
              onChangeText={(emailAddress) => this.setState({emailAddress})}
              value={this.state.emailAddress}
              underlineColorAndroid='#fff0'
            />
          </View>

          <Text style={styles.signInLabelStyle}>
            Password
          </Text>

          <View>
            <TextInput
              style={styles.signInTextInputStyle}
              keyboardType="default"
              multiline={false}
              secureTextEntry={true}
              maxLength={30}
              placeholder="Enter password here"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid='#fff0'
            />
          </View>


          <Text style={{marginTop:15, color: 'red', fontWeight: '600'}}>
            This is validation text.
          </Text>

          <TouchableOpacity
            onPress={this.props.onPress.bind(this)} >
            <View style={[styles.signInBtnViewStyle,{marginTop:40,}]}>
              <Text style={{color:"#FFF", fontWeight: 'bold'}}>
                SIGN IN
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.signInRegisterForgotViewStyle}>
            <TouchableOpacity>
              <Text style={styles.signInRegisterForgotLabelStyle}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.signInRegisterForgotLabelStyle}>
                Register Account
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </KeyboardAvoidingView>
    )
  }
}



export default connect()(SignInView)
