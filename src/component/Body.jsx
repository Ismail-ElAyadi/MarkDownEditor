import React, { Component } from "react";
import {sampleText} from '../variableInformations/sampleText.js'
import marked from 'marked';

export default class Body extends Component {

  state={
    text: sampleText
  }

  componentDidMount(){
    let storage = localStorage.getItem("text")
    if(storage)this.setState({text: storage})
    else this.setState({text:sampleText })
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

copyToClip() {
    let copyText = document.getElementById("editor");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
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
    <iframe id="documentation" className="col-md-12 preview" title="Markdown's Documentation" src="https://docs.framasoft.org/fr/grav/markdown.html"></iframe>
    </div>

    return (

      <section className="p-0 d-flex">
        <div className="col-md-5  block">
         <div className="d-flex col-md-12">
            <h2 className="col-md-8">Editor</h2>
            <button className="btn btn-outline-success col-md-4 m-2" onClick={this.copyToClip}>Copy to clipboard</button>
         </div>
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
