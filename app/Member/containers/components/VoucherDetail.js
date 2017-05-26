'use strict'
import React, { Component }  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from '../../../styles/styles'

export default class VoucherComp extends Component {
  render(){
    const { params } = this.props.navigation.state;


    return(
        <View style={[styles.voucherViewStyle, {backgroundColor:'#fff0', justifyContent:'flex-start'}]}>

          <View style={{flexDirection:'row', width:'100%', justifyContent:'flex-end', padding:20}}>
            <View style={{width:24, height:24, backgroundColor:"#444", justifyContent:'center'}}>
              <Icon name="close" size={24} style={{color:'#FFF'}} onPress={ () => this.props.navigation.goBack()}/>
            </View>
          </View>

          <Text style={[styles.voucherTypeTextStyle, {textAlign:'center'}]}>
            {params.rewardType}
          </Text>

          <Text style={[styles.voucherDescLabelStyle, {textAlign:'center', paddingRight:0, paddingTop:5}]}>
            {params.rewardDesc}
          </Text>

          {this.props.rewardNote !== '' && <Text style={styles.voucherNoteText}>
            {params.rewardNote}
          </Text>}

          <View style={{justifyContent:'center',}}>
            <Text style={[styles.voucherExpiryDateText, {textAlign:'center', paddingTop:3}]}>
              {'Expires on '}{params.rewardExpiryDate}
            </Text>
          </View>

          <Text style={{width:'80%', paddingTop:15, fontSize:12, fontWeight:'400'}}>
            {params.rewardDetail}
          </Text>

          <View style={{width:'90%'}}>
            <Text style={{textAlign:'left'}}>
              {'\n'}Terms & Conditions:
            </Text>
          </View>

            <Text style={{width:'85%', paddingTop:7, color: '#666', fontSize:12, fontWeight:'400'}}>
              {params.rewardTermsCon}
            </Text>

        </View>
    )
  }
}
