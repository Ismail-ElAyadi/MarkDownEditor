import React, { Component} from 'react'
import infos from '../variableInformations/Infos'
export default class Footer extends Component {
    render() {
        return (
                <footer className="col-12 bg-warning d-flex justify-content-between">
                    <p>Notice : Let 2 spaces at the end of the line to go on the next line.</p>
                <p>
                    By
                    <a href={infos.links.linkedin} target="_blank" rel="author noopener noreferrer "> {infos.nom} </a>
                    <i className="far fa-copyright"></i>{new Date().getFullYear()}
                </p>
                </footer>
        )
    }
}
