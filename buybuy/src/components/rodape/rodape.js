import React, { Component } from 'react'
import './rodape.css';

export default class Rodape extends Component {
    render() {
        return (
            <div className="rodape">
                <div className="lista_um">
                    <ul>
                        <li><a href="#">Item - Lista 1</a></li>
                        <li><a href="#">Item - Lista 1</a></li>
                        <li><a href="#">Item - Lista 1</a></li>
                        <li><a href="#">Item - Lista 1</a></li>
                    </ul>
                </div>
                <div className="lista_dois">
                    <ul>
                    <li><a href="#">Item - Lista 2</a></li>
                    <li><a href="#">Item - Lista 2</a></li>
                    <li><a href="#">Item - Lista 2</a></li>
                    <li><a href="#">Item - Lista 2</a></li>
                    </ul>
                </div>
                <div className="lista_tres">
                    <ul>
                    <li><a href="#">Item - Lista 3</a></li>
                    <li><a href="#">Item - Lista 3</a></li>
                    <li><a href="#">Item - Lista 3</a></li>
                    <li><a href="#">Item - Lista 3</a></li>
                    </ul>
                </div>
                <div className="textarea">
                    <textarea className = "texto"></textarea>
                    <input className="btn_textarea" type="submit"></input>
                </div>
            </div>
        )
    }
}