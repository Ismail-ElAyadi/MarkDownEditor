import React, { Component} from 'react'

export default class Header extends Component {
    render() {
        return (
                <nav className="col-md-12 bg-dark d-flex flex-row align-content-center">
                <h1 className="col-md-4 ">MarkDown Editor</h1>
                <ul className="col-md-8 d-flex flex-row align-items-center mb-0">
                    <li className="navitems align-self-center col-2"><button className="btn btn-warning col-12">Documentation</button></li>
                    <li className="navitems col-2"><button className="btn btn-warning col-12">Reset</button></li>
                    <li className="navitems col-2"><button className="btn btn-warning col-12">Save</button></li>
                </ul>
                </nav>
        )
    }
}
