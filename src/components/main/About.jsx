import '../../styles/main/about.scss';

import equipe from '../../assets/equipe.png'

export function About() {
    return (
        <div className='aboutContainer'>
            <section className='about' id='sobre'>
                <div className="imgContainer">
                    <img src={equipe} alt="Fachada da petshop" />
                </div>

                <div className="textContainer">
                    <h2>Sobre nós</h2>

                    <div className='paragraphs'>
                        <p>
                            Somos uma petshop localizada em Guarujá que se dedica ao cuidado e bem-estar dos animais de estimação. Oferecemos uma ampla gama de serviços, desde banho, tosa, venda de alimentos e acessórios. Nossa equipe é composta por profissionais experientes e apaixonados por animais, que se esforçam para oferecer um atendimento personalizado e de alta qualidade para cada cliente.
                        </p>
                        <p>
                            Nosso compromisso é com a saúde e felicidade dos animais de estimação e seus tutores. Por isso, estamos constantemente buscando formas de expandir nossos serviços e atender cada vez mais clientes na região, fazendo com que mais pessoas tenham acesso aos nossos serviços e possam contar conosco para cuidar de seus animais.
                        </p>
                        <p>
                            Nosso objetivo é ser referência em cuidados em Guarujá e região, oferecendo serviços de alta qualidade e com preço justo. Queremos ser reconhecidos pelos nossos clientes como um lugar onde podem confiar seus animaizinhos, sabendo que serão tratados com carinho, respeito e profissionalismo. Estamos animados com as possibilidades de expansão e estamos prontos para continuar crescendo e oferecendo o melhor para nossos clientes e seus pets.
                        </p>
                    </div>
                </div>

                <div className="gradientDivider"></div>
            </section>
        </div>
    )
}