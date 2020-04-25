import React, { Component} from 'react'

export default class Header extends Component {

    render() {
       let  docButton = <button className="btn btn-warning col-12" onClick={this.props.displayDoc}>Watch Docs</button>
       let prevButton = <button className="btn btn-success col-12" onClick={this.props.displayDoc}>Watch Preview</button>

        return (
                    <nav className="col-md-12 bg-dark d-flex flex-row align-content-center">
                    <h1 className="col-md-4 text-white ">MarkDown Editor</h1>
                    <ul className="col-md-8 d-flex flex-row align-items-center mb-0">
        <li className="navitems align-self-center col-2">{this.props.documentation ?prevButton:docButton}</li>
                        <li className="navitems col-2"><button className="btn btn-info col-12" onClick={this.props.resetEditor} >Reset</button></li>
                    </ul>
                    </nav>
        )
    }
}
