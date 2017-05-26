import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './Store'

import RootNavigation from './RootNavigation'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    )
  }
}
