import { Link, NavLink } from "react-router-dom";

import '../styles/header.scss';

export function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Li<span>Pethy</span>shop</h1>
            </div>

            <div className="menu">
                <a href='#about'>Início</a>
                <a href='#sobre'>Sobre</a>
                <a href='#serviços'>Serviços</a>
                <a href='#about'>Depoimentos</a>
                <a href='#about'>Contato</a>
                <a href='#about'>Produtos</a>
            </div>

            <div className="divider"></div>
        </header>
    )
}