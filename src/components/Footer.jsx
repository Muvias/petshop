import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import '../styles/footer.scss';

export function Footer() {
    return (
        <footer>
            <div className='footerContainer'>
                <div className='textContainer'>
                    <h2>Li<span>PethyShop</span></h2>
                    <p>©2023 LiPethyshop.</p>
                    <p>Todos os direitos reservados.</p>
                </div>

                <div className='socialMedia'>
                    <Link title='Instagram'><InstagramLogo className='icon' size={30} /></Link>
                    <Link title='Facebook'><FacebookLogo className='icon' size={30} /></Link>
                    <Link title='Youtube'><YoutubeLogo className='icon' size={30} /></Link>
                </div>
            </div>
        </footer>
    )
}