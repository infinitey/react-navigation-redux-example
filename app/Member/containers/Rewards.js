'use strict'
import React, { Component }  from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'

import VoucherComp from './components/VoucherComp'
import styles from '../../styles/styles'

import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Rewards extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
        height: 1,
        width: '85%',
        backgroundColor: '#CED0CE',
        marginLeft: '8%',
        marginBottom:5,
        marginTop:5,
        }}
      />
    );
  };

  state = {
    selected:'Show all'
  };

  render(){
    return(
      <View style={{ flex:1 }}>
        <View style={[styles.rewardsHeaderViewStyle, {flexDirection:'row', justifyContent:'space-between'}]}>
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'#FFF', paddingLeft: '8%', }}>
              3 Vouchers
            </Text>
          </View>
          <View style={{justifyContent:'center'}}>
            <ModalDropdown
              defaultValue={this.state.selected}
              renderSeparator={()=>{}}
              dropdownStyle={{width:'30%'}}
              style={{paddingRight:'5%'}}
              options={['Show all',]}
              onSelect={(index, value) => this.onSelectOption(index, value)}
              >

              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:14, color:'#FFF'}}>
                  {this.state.selected}
                </Text>
                <Icon name="chevron-down" size={30} color="#FFF" />
              </View>

            </ModalDropdown>
          </View>
        </View>
        <View style={{flex:1, paddingTop:7}}>
          <FlatList
            data={dummyList}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({item}) => <VoucherComp
              key={item.key}
              rewardType={item.rewardType}
              rewardDesc={item.rewardDesc}
              rewardNote={item.rewardNote}
              rewardExpiryDate={item.rewardExpiryDate }
              navigation={ this.props.navigation }
            />}
          />
        </View>
      </View>
    )
  }

  onSelectOption(index, value) {
    this.setState({
      selected: value,
    })
  }

}

const dummyList = [
  {
    key: 'a',
    rewardType:'Tier Goal Reward',
    rewardDesc:'$150 Off Dining Bill',
    rewardNote:'*over $500 spending only',
    rewardExpiryDate:'25 Mar 2018'
  },
  {
    key: 'b',
    rewardType:'Introductory Reward',
    rewardDesc:'10% Off Online Merchandise',
    rewardNote:'',
    rewardExpiryDate:'12 Jan 2018'
  },
  {
    key: 'c',
    rewardType:'Lucky Draw Reward',
    rewardDesc:'Enjoy A Free Mystery Drink At Our Oulets',
    rewardNote:'* No Minimum Spending',
    rewardExpiryDate:'25 Mar 2018'
  },
]
