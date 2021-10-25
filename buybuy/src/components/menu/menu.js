import React, { Component } from 'react'
import './menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Inicial</a>
                        <a href="#">Produtos</a>
                        <a href="#">Lojas</a>
                    </div>
                </div>
                <div className="pesquisa">
                    <h5>Pesquisa</h5>
                </div>
                <div className="usuario">
                    <h5>Login</h5>
                    <h5>Cadastro</h5>
                </div>
                <div className="carrinho">
                    <h5>Carrinho</h5>
                </div>
            </div>
        )
    }
}