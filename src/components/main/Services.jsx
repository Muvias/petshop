
import { Bone } from '@phosphor-icons/react';

import scissors from '../../assets/icons/scissors.svg';
import products from '../../assets/icons/products.svg';

import '../../styles/main/service.scss';

export function Services() {
    return (
        <div className="background" id='servicos'>
            <section className="services">
                <div className="textContainer">
                    <h2>Serviços</h2>
                    <p>Com mais zelo no mercado, a <span>LiPetShop</span> já conquistou inúmeros clientes com seus tratamentos exclusivos</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={scissors} />
                        <h3>Banho e Tosa</h3>
                        <p>Nossos serviços de banho e tosa proporcionam aos seus animais de estimação um cuidado especializado e individualizado, utilizando produtos de qualidade e técnicas seguras e eficazes.</p>
                    </div>
                    <div className="card">
                        <img src={products} />
                        <h3>Produtos</h3>
                        <p>Em nossa petshop, oferecemos uma variedade de produtos de qualidade para atender às necessidades do seu pet, desde brinquedos até acessórios de saúde e higiene.</p>
                    </div>
                    <div className="card">
                        <Bone
                            className='icon'
                            size={80}
                            weight="light"
                            color={"rgba(255, 51, 102, 0.91)"}
                        />
                        <h3>Rações</h3>
                        <p>Você encontrará uma ampla seleção de alimentos para animais de estimação, incluindo rações premium e medicamentosas, petiscos saudáveis e suplementos nutricionais para garantir a saúde e bem-estar do seu pet.</p>
                    </div>
                </div>
            </section>

            <div className="gradientDivider"></div>
        </div>
    )
}