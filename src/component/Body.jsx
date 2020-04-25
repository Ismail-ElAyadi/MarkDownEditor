import React, { Component } from "react";
import {sampleText} from '../variableInformations/sampleText.js'
import marked from 'marked';
export default class Body extends Component {
  state={
    text: sampleText,
  }
  textEdited =(e)=> {
    this.setState({
      text:e.target.value,
    })
  }
  renderText=text=> {
    return marked(text,{sanitize:true})
  }
  render() {
    let {text} = this.state
    return (
      <section className="p-0 d-flex">
        <div className="col-md-5  block">
          <h2>Editor</h2>
          <textarea id="editor"
            className="col-md-12 preview " rows="3"
            onInput={this.textEdited}
            value={text}
          >
          </textarea>
        </div>
        <div className="col-md-5 block ">
          <h2>Preview</h2>
          <div dangerouslySetInnerHTML= {{__html:this.renderText(text)}}
            className="col-md-12 preview"
          >
          </div>
        </div>
      </section>
    );
  }
}
