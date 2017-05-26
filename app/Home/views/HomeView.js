'use strict'
import React, { Component }  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../../styles/styles'

export default class HomeView extends Component {


  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:4}}>
          <View style={{backgroundColor:'#DDD', flex:10}}>

          </View>

          <View style={styles.socialBarStyle}>
            <Text style={styles.socialBarFontStyle}>WHAT'S HAPPENING?</Text>
          </View>

        </View>

        <View style={styles.mainMenuBarStyle}>
          <TouchableOpacity
            onPress={ this.props.onPressMember }
            style={[styles.mainMenuBtnStyle,{backgroundColor:'#DDD'}]}>
            <Text style={styles.mainMenuBtnTextStyle}>{'Member'}</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
