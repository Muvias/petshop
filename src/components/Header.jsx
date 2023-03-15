import '../styles/header.scss';

export function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Li<span>Pethy</span>shop</h1>
            </div>

            <div className="menu">
                <a href='#inicio'>Início</a>
                <a href='#sobre'>Sobre</a>
                <a href='#serviços'>Serviços</a>
                <a href='#depoimentos'>Depoimentos</a>
                <a href='#contato'>Contato</a>
                <a href='/produtos'>Produtos</a>
            </div>

            <div className="divider"></div>
        </header>
    )
}