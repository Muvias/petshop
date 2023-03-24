import { useLocation } from 'react-router-dom';
import '../styles/header.scss';

export function Header() {
    const location = useLocation();

    return (
        <header>
            <div className='headerContainer'>
                <a href='/' className="logo">
                    <h1>Li<span>Pethy</span>shop</h1>
                </a>

                <nav className="menu">
                    <a href='/#inicio' className={location.hash === '#inicio' ? 'active' : ''}>Início</a>
                    <a href='/#sobre' className={location.hash === '#sobre' ? 'active' : ''}>Sobre</a>
                    <a href='/#servicos' className={location.hash === '#servicos' ? 'active' : ''}>Serviços</a>
                    <a href='/#depoimentos' className={location.hash === '#depoimentos' ? 'active' : ''}>Depoimentos</a>
                    <a href='/#contato' className={location.hash === '#contato' ? 'active' : ''}>Contato</a>
                    {/* <a href='/produtos' className={location.pathname === '/produtos' ? 'active' : ''}>Produtos</a> */}
                </nav>
                
                <div className="divider"></div>
            </div>
        </header>
    )
}