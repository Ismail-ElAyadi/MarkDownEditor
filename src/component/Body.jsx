import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <section className="p-0 d-flex">
        <div className="col-md-5  block">
          <h2>Editor</h2>
          <textarea
            className="col-md-12 preview " rows="3"
          ></textarea>
        </div>
        <div className="col-md-5 block ">
          <h2>Preview</h2>
          <div
            className="col-md-12 preview"
          >
          </div>
        </div>
      </section>
    );
  }
}
