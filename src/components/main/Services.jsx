
import { Bone } from '@phosphor-icons/react';

import scissors from '../../assets/icons/scissors.svg';
import products from '../../assets/icons/products.svg';

import '../../styles/service.scss';

export function Services() {
    return (
        <div className="background" id='serviços'>
            <section className="services">
                <div className="textContainer">
                    <h2>Serviços</h2>
                    <p>Com mais de 10 anos no mercado, a <span>LiPetShop</span> já conquistou inúmeros clientes com seus tratamentos exclusivos</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={scissors} />
                        <h3>Banho e Tosa</h3>
                        <p>A nossa equipe é repleta de profissionais, tomando todos os cuidados e zelando conforto para seu pet</p>
                    </div>
                    <div className="card">
                        <img src={products} />
                        <h3>Produtos</h3>
                        <p>A nossa equipe é repleta de profissionais, tomando todos os cuidados e zelando conforto para seu pet</p>
                    </div>
                    <div className="card">
                        <Bone
                            className='icon'
                            size={80}
                            weight="light"
                            color={"rgba(255, 51, 102, 0.91)"}
                        />
                        <h3>Comida</h3>
                        <p>A nossa equipe é repleta de profissionais, tomando todos os cuidados e zelando conforto para seu pet</p>
                    </div>
                </div>
            </section>

            <div className="gradientDivider"></div>
        </div>
    )
}