import { Link } from "react-router-dom";

import { ChatsCircle } from '@phosphor-icons/react';

import fachada from '../../assets/fachada.png'

import '../../styles/main/home.scss';

export function Home() {
    return (
        <div className="background">
            <section className="home" id="inicio">
                <div className="textContainer">
                    <h2>Lazer e cuidado com o seu pet</h2>
                    <p>Uma petshop exclusiva em Guarujá, especializada em levar amor e felicidade para o seu animalzinho.</p>

                    <Link to="https://api.whatsapp.com/send?phone=+5511956561710&text=Olá! gostaria de marcar um horário, vocês teriam disponibilidade para quando?" target="_blank" className="button"><ChatsCircle size={22} />Fale conosco</Link>
                </div>

                <div className="imgContainer">
                    <img src={fachada} alt="Fachada da petshop" />
                </div>
            </section>

            <div className="gradientDivider"></div>
        </div>
    )
}