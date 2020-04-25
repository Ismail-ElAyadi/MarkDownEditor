import React, { Component, Fragment } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'



export default class App extends Component {
  state = {
    documentation:false,
    reseted:true,
  }

  displayDoc=()=> this.setState({documentation: !this.state.documentation});
  resetEditor=()=> this.setState({reseted: true})
  continueEditing=()=> this.setState({reseted: false})


  render() {
    const {documentation,reseted} = this.state
    return (
      <Fragment>
        <Header displayDoc={this.displayDoc} resetEditor={this.resetEditor} />
        <Body doc={documentation} reseted={reseted} continueEditing ={this.continueEditing}/>
        <Footer/>
      </Fragment>
    );
  }
}
