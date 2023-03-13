import { NavLink } from "react-router-dom";

import '../styles/header.scss';

export function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Li<span>Pethy</span>shop</h1>
            </div>

            <div className="menu">
                <NavLink>Início</NavLink>
                <NavLink>Sobre</NavLink>
                <NavLink>Serviços</NavLink>
                <NavLink>Depoimentos</NavLink>
                <NavLink>Contato</NavLink>
                <NavLink>Produtos</NavLink>
            </div>

            <div className="divider"></div>
        </header>
    )
}