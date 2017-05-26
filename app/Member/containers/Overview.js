'use strict'
import React, { Component }  from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

// Redux
import { connect } from 'react-redux'

import styles from '../../styles/styles'

class Overview extends Component {
  render(){
    return(
      <View style={{flex:1,}}>

        <View style={{
          flex:0.9,
          backgroundColor: '#DDD',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image style={styles.overviewCardImageStyle}/>
          <Text style={styles.overviewWelcomeLabelStyle}>
            Welcome
          </Text>
          <Text style={styles.overviewUsernameLabelStyle}>
            Random Name
          </Text>
        </View>

        <View style={{alignItems:'center', flex:1}}>
          <View style={styles.overviewTextGroupViewStyle}>
            <Text style={styles.overviewWelcomeLabelStyle}>
              Your Current Points
            </Text>

            <View style={{alignItems:'center'}}>
              <Text style={styles.overviewPointsLabelStyle}>
                99999999
              </Text>

              <Text style={styles.overviewSmallTextStyle}>
                Expires on 25 Mar 2018
              </Text>
            </View>


            <Text style={styles.overviewSmallTextStyle}>
              You are currently
              <Text style={{fontWeight: 'bold'}}>
                {' '}5744{' '}
              </Text>
              points away from reaching the next tier. You will get more reward points as you reach higher tiers.
            </Text>

            <TouchableOpacity>
              <View style={[styles.signInBtnViewStyle,styles.overviewTierBtnViewStyle]}>
                <Text style={{color:"#FFF", fontWeight: 'bold'}}>
                  VIEW TIER BENEFITS
                </Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

    </View>
    )
  }
}

const mapStateToProps = (state) => {
 return {
    navigationState: state.home,
  }
}

export default connect(mapStateToProps)(Overview)
