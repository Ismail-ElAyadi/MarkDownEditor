import React, { Component, Fragment } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Body/>
        <Footer/>
      </Fragment>
    )
  }
}
