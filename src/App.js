import React, { Component, Fragment } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Footer/>
      </Fragment>
    )
  }
}
