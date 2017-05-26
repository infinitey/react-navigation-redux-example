import { Dimensions, Platform, StyleSheet } from 'react-native'

const window = Dimensions.get('window');

export default StyleSheet.create({
  //tab bar style for top bar
  tabBarStyle: {
    ...Platform.select({
      ios: {
        backgroundColor: '#000',
        flex: 0.070,
      },
      android: {
        backgroundColor: '#000',
        flex: 0.12,
      },
    }),
  },

  tabLabelStyle: {
    ...Platform.select({
      ios: {
        fontSize: 11,
        paddingBottom: 13,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      android: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft:0, //stops label from going to next line
        marginRight:0, //stops label from going to next line
      },
    }),
  },

  tabIconStyle: {
    ...Platform.select({
      ios: {
        borderColor: '#FFF',
        height: 3,
        width: 24,
      },
      android: {
        height: 3,
        width: 24,
      },
    }),
  },

  socialBarStyle: {
    flex:1,
    backgroundColor:'#000',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },

  socialBarFontStyle: {
    ...Platform.select({
      ios: {
        color:'#FFF',
        fontWeight:'bold',
        fontSize: 12,
      },
      android: {
        color:'#FFF',
        fontWeight:'bold',
        fontSize: 10,
      },
    }),
  },

  mainMenuBarStyle: {
    flex:1,
    flexDirection: 'row',
  },

  mainMenuBtnStyle: {
    flex:1,
    justifyContent:'center',
  },

  mainMenuBtnTextStyle: {
    color:'#FFF',
    fontWeight: 'bold',
    textAlign:'center'

  },

  signInLabelStyle: {
    ...Platform.select({
      ios: {
        color:'#777',
        marginTop:30,
        fontWeight: 'bold',
      },
      android: {
        color:'#777',
        marginTop:15,
        fontWeight: 'bold',
      },
    }),
  },

  signInTextInputStyle: {
    height: 35,
    marginTop:3,
    width: window.width * 0.72,
    fontSize:12,
    fontWeight:'bold',
    textAlign:'center',
    paddingLeft:10,
    borderColor: 'gray',
    borderWidth: 1,
  },

  signInBtnViewStyle : {
    backgroundColor:'#777',
    width: window.width * 0.72,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
  },

  signInRegisterForgotViewStyle : {
    width:window.width * 0.72,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  signInRegisterForgotLabelStyle : {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontWeight: 'bold'
  },

  overviewCardImageStyle : {
    width: window.width * 0.75,
    height: window.height * 0.25,
    backgroundColor: '#aed0fc',
    borderRadius: 10
  },

  overviewWelcomeLabelStyle: {
    paddingTop: 15,
    fontSize: 14,
    fontWeight: '400',
  },

  overviewUsernameLabelStyle : {
    fontSize: 20,
    fontWeight: '500',
  },

  overviewPointsLabelStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#14cd2b'
  },

  overviewSmallTextStyle: {
    fontSize: 14,
    color: '#666',
  },

  overviewTextGroupViewStyle: {
    flex:1,
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    width: window.width * 0.75,
    justifyContent:'space-between'
  },

  overviewTierBtnViewStyle : {
    ...Platform.select({
      ios: {
        marginTop:40,
        marginBottom: 40,
      },
      android: {
        marginTop:5,
        marginBottom: 10,
      },
    }),
  },

  rewardsHeaderViewStyle : {
    height:50,
    backgroundColor:'#777',
    justifyContent: 'center',
  },

  voucherTypeTextStyle : {
    fontWeight: '400'
  },

  voucherViewStyle : {
    flex:1,
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    justifyContent:'center',
  },

  voucherDescLabelStyle: {
    fontSize: 20,
    fontWeight: '500',
    width: '77%',
    paddingRight:30,
  },

  voucherExpiryDateText: {
    fontSize: 13,
    color: '#666',
    textAlign:'right',
  },

  voucherNoteText: {
    fontSize: 14,
    color: '#666',
  },

  transactionAmtTextStyle: {
    fontSize: 20,
    fontWeight:'bold',
  },

  transactionPtGainTextStyle: {
    fontSize: 13,
    fontWeight:'500',
    color: '#14cd2b',
    textAlign:'right',
  },

  picker: {
    width:'40%',
  },

  profileTextInputStyle: {
    height: 35,
    width: '60%',
    fontSize:14,
    textAlign:'left',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: '3%'
  },

  profileFormRowStyle: {
    paddingTop: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },

  profileFieldTextStyle: {
    fontSize: 14,
    color: '#666',
    width:'30%',
  },

  profileDropMenuFieldStyle: {
     width:'60%',
     borderColor: 'gray',
     borderWidth: 1,
  },

  profileDropMenuStyle: {
    width:'54%',
    borderWidth: 1,
    borderColor: 'gray',
  },

  profileDropMenuRowTextStyle: {
    fontSize:14,
    textAlign:'left',
    paddingLeft:'3%',
    paddingTop:'3%'
  },

  profileDropMenuButtonStyle: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  profileDropMenuButtonTextStyle : {
    paddingLeft:'5%',
    fontSize:14,
    color:'#000',
    textAlign:'left',
  },

  profileDropMenuButtonIconStyle: {
    width:40,
    height:35,
    backgroundColor:'#666',
    alignItems:'center',
    justifyContent:'center',
  },




});
