import React, { Component, Fragment } from 'react'

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="col-sm-6 col-md-12 bg-dark">
                <ul className="col-md-4 d-flex flex-row justify-content-start">
                    <li className="navitems col-4"><button className="btn btn-warning col-12">Documentation</button></li>
                    <li className="navitems col-4"><button className="btn btn-warning col-12">Reset</button></li>
                    <li className="navitems col-4"><button className="btn btn-warning col-12">Save</button></li>
                </ul>
                </nav>
            </Fragment>
        )
    }
}
