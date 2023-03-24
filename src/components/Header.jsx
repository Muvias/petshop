import { List, X } from '@phosphor-icons/react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/header.scss';

export function Header() {
    const location = useLocation();
    const navRef = useRef();

    function toggleNavbar() {
        navRef.current.classList.toggle("responsiveNav");
    };

    function closeNavbar() {
        if (navRef.current.classList.value.includes("responsiveNav")) {
            navRef.current.classList.remove("responsiveNav");
        };

        return;
    };

    return (
        <header>
            <div className='headerContainer'>
                <a href='/' className="logo">
                    <h1>Li<span>Pethy</span>shop</h1>
                </a>

                <nav className="menu" ref={navRef}>
                    <a href='/#inicio'
                        className={location.hash === '#inicio' ? 'active' : ''}
                        onClick={() => closeNavbar()}
                    >
                        Início
                    </a>
                    <a
                        href='/#sobre'
                        className={location.hash === '#sobre' ? 'active' : ''}
                        onClick={() => closeNavbar()}
                    >
                        Sobre
                    </a>
                    <a
                        href='/#servicos'
                        className={location.hash === '#servicos' ? 'active' : ''}
                        onClick={() => closeNavbar()}
                    >
                        Serviços
                    </a>

                    <a
                        href='/#depoimentos'
                        className={location.hash === '#depoimentos' ? 'active' : ''}
                        onClick={() => closeNavbar()}
                    >
                        Depoimentos
                    </a>

                    <a
                        href='/#contato'
                        className={location.hash === '#contato' ? 'active' : ''}
                        onClick={() => closeNavbar()}
                    >
                        Contato
                    </a>

                    {/* <a href='/produtos' className={location.pathname === '/produtos' ? 'active' : ''}>Produtos</a> */}
                    <button className='navBtn navCloseBtn' onClick={() => toggleNavbar()}>
                        <X size={24} weight='bold' />
                    </button>
                </nav>

                <button className='navBtn' onClick={() => toggleNavbar()}>
                    <List size={24} weight='bold' />
                </button>

                <div className="divider"></div>
            </div>
        </header>
    )
}