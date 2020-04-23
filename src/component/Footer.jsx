import React, { Component, Fragment } from 'react'
import infos from '../variableInformations/Infos'
export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="col-12 bg-warning">
                <p>
                    By
                    <a href={infos.links.linkedin} target="_blank" rel="author noopener noreferrer "> {infos.nom} </a>
                    <i className="fas fa-copyright"></i>{new Date().getFullYear()}
                    <i className="far fa-copyright"></i>
                </p>

                </footer>
            </Fragment>
        )
    }
}
