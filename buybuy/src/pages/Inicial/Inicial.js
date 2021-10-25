import React, { Component } from 'react'
import './Inicial.css';

import Menu from '../../components/menu/menu';
import Rodape from '../../components/rodape/rodape';


export default class Inicial extends Component {
    render() {
        return (
            <div>
                <div className = "barraSuperior">
                </div>
                <Menu/>
                <div className = "banner">
                    <h1>Banner</h1>
                </div>
                <div className = "conteudo">
                    <h1>Conteúdo</h1>
                </div>
                <Rodape/>
            </div>
        )
    }
}