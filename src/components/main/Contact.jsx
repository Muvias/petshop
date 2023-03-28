import { Link } from 'react-router-dom';

import { WhatsappLogo, Phone, MapPin, EnvelopeSimple } from '@phosphor-icons/react';

import '../../styles/main/contact.scss';

export function Contact() {
    return (
        <div className='background'>
            <section className='contact' id='contato'>
                <div className='textContainer'>
                    <h2>Entre em contato com a gente!</h2>
                    <p>Entre em contato com a LiPethyShop, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
                    <Link to="https://api.whatsapp.com/send?phone=+5511956561710&text=Olá! gostaria de falar com vocês." target="_blank" className="button"><WhatsappLogo size={24} />Entrar em contato</Link>
                </div>

                <div className='contactInformation'>
                    <div>
                        <Phone className='icon' size={24} />
                        <p>13 98765-4321</p>
                    </div>

                    <div>
                        <MapPin className='icon' size={24} />
                        <p>R. Acadêmico Inacio Nascimento Opazo, 90</p>
                    </div>

                    <div>
                        <EnvelopeSimple className='icon' size={24} />
                        <p>contato@lipethy.com</p>
                    </div>
                </div>
            </section>
        </div>
    )
}