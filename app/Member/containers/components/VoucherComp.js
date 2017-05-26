'use strict'
import React, { Component }  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../../../styles/styles'

export default class VoucherComp extends Component {
  render(){
    return(
      <TouchableOpacity
        onPress={ () => this.props.navigation.navigate('VoucherDetail', {
          rewardType: this.props.rewardType,
          rewardDesc: this.props.rewardDesc,
          rewardExpiryDate: this.props.rewardExpiryDate,
          rewardNote: this.props.rewardNote,
          rewardDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut accumsan mi, in faucibus lacus. Nullam eu est nec turpis pulvinar viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent imperdiet efficitur tellus, vel vehicula ligula lobortis vel. Cras fringilla, urna id elementum laoreet, lectus lorem sagittis libero, sit amet viverra eros erat sed nulla.\n\n Integer ultrices laoreet arcu, et pretium nulla efficitur ut. In sed viverra nunc, in sodales purus. Sed purus eros, varius a magna eget, aliquet molestie nunc. Nullam commodo vitae mauris non dictum.',
          rewardTermsCon: ['Ut consequat vitae metus nec fringilla. Nam tristique, sapien quis viverra auctor, ante orci pellentesque enim, at tempus risus est et nibh. Integer in sollicitudin massa, id pharetra enim.',
          'Ut consequat vitae metus nec fringilla. Nam tristique, sapien quis viverra auctor, ante orci pellentesque enim, at tempus risus est et nibh. Integer in sollicitudin massa, id pharetra enim.', ],
        })}>
        <View style={styles.voucherViewStyle}>
          <View style={{flex:1, width: "85%",}}>
            <Text style={styles.voucherTypeTextStyle}>
              {this.props.rewardType}
            </Text>

            <View style={{flexDirection: 'row', alignItems:'center'}}>

              <Text style={[styles.voucherDescLabelStyle]}>
                {this.props.rewardDesc}
              </Text>

              <View style={{alignItems:'flex-end',justifyContent:'center',}}>
                <Text style={styles.voucherExpiryDateText}>
                  Expires on
                </Text>
                <Text style={styles.voucherExpiryDateText}>
                  {this.props.rewardExpiryDate}
                </Text>
              </View>

            </View>

            {this.props.rewardNote !== '' && <Text style={styles.voucherNoteText}>
              {this.props.rewardNote}
            </Text>}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
