import React, { Component } from "react";
import {sampleText} from '../variableInformations/sampleText.js'
import marked from 'marked';

export default class Body extends Component {

  state={
    text: sampleText
  }

  componentDidMount(){
    let storage = localStorage.getItem("text")
    if(storage){
      this.setState({
        text: storage
      })
    }else {
      this.setState({
        text:sampleText
      })
    }

  }
  componentDidUpdate(){
    localStorage.setItem("text",this.state.text)
  }
  textEdited =(e)=> {
    this.setState({
      text:e.target.value,
    })
  }
  eventOnChangeTextArea =()=> {
    this.textEdited();
  }
  renderText=text=> {
    return marked(text,{sanitize:true})
  }

  render() {
    if(this.props.reseted){
      this.setState({text:sampleText})
      this.props.continueEditing()
    }
    let {text} = this.state
    let preview =
    <div className="col-md-5 block">
    <h2>Preview</h2>
          <div dangerouslySetInnerHTML= {{__html:this.renderText(text)}}
            className="col-md-12 preview">
          </div>
    </div>

    let iframeDocumentation =
    <div className="col-md-5 block">
    <h2>Documentation</h2>
    <iframe id="documentation" className="col-md-12 preview" title="Markdown's Documentation" src="https://guides.github.com/features/mastering-markdown/"></iframe>
    </div>

    return (

      <section className="p-0 d-flex">
        <div className="col-md-5  block">
          <h2>Editor</h2>
          <textarea id="editor"
            className="col-md-12 editor"
            onChange={this.textEdited}
            value={text}
          >

          </textarea>
        </div>
        {this.props.doc ? iframeDocumentation : preview}
      </section>
    );
  }
}
