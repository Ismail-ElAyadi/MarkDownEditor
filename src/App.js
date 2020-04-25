import React, { Component, Fragment } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'

export default class App extends Component {
  state = {
    documentation:false
  }
  display=()=>{
    this.setState({documentation: !this.state.documentation}
    )
  }
  render() {
    const {documentation} = this.state
    return (
      <Fragment>
        <Header action={this.display}/>
        <Body doc={documentation}/>
        <Footer/>
      </Fragment>
    )
  }
}
