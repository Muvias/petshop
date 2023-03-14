import { Link } from "react-router-dom";

import fachada from '../../assets/fachada.png'

import '../../styles/home.scss';

export function Home() {
    return (
        <div className="background">
            <section className="home">
                <div className="textContainer">
                    <h2>Lazer e cuidado com o seu pet</h2>
                    <p>Uma petshop exclusiva em Guarujá, especializada em levar amor e felicidade para o seu animalzinho.</p>

                    <Link className="button">Agendar um horário</Link>
                </div>

                <div className="imgContainer">
                    <img src={fachada} alt="Fachada da petshop" />
                </div>
            </section>

            <div className="gradientDivider"></div>
        </div>
    )
}