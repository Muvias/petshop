import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef } from 'react';

import  userPhoto from '../../assets/userPhoto.png';

import '../../styles/main/testimonials.scss';

export function Testimonials() {
    const carousel = useRef(null);

    function handleClickLeftArrow(e) {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    function handleClickRightArrow(e) {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <section className="testimonials" id="depoimentos">
            <h2>Depoimentos de quem já passou por aqui</h2>

            <div className="carouselContainer">
                <div
                    className="carousel"
                    ref={carousel}
                >
                    <div className='cardTestimonials'>
                        <p><span>"</span>Eu sou cliente da LiPetShop há 5 anos e não troco por nada! Certamente meu cachorro está muito mais feliz depois de começar a vir aqui. São profissionais incríveis e qualificados. </p>
                        <div>
                            <img src={userPhoto} />
                            <span>Wanessa Souza</span>
                        </div>
                    </div>

                    <div className='cardTestimonials'>
                        <p><span>"</span>Eu sou cliente da LiPetShop há 5 anos e não troco por nada! Certamente meu cachorro está muito mais feliz depois de começar a vir aqui. São profissionais incríveis e qualificados. </p>
                        <div>
                            <img src={userPhoto} />
                            <span>Wanessa Souza</span>
                        </div>
                    </div>

                    <div className='cardTestimonials'>
                        <p><span>"</span>Eu sou cliente da LiPetShop há 5 anos e não troco por nada! Certamente meu cachorro está muito mais feliz depois de começar a vir aqui. São profissionais incríveis e qualificados. </p>
                        <div>
                            <img src={userPhoto} />
                            <span>Wanessa Souza</span>
                        </div>
                    </div>

                    <div className='cardTestimonials'>
                        <p><span>"</span>Eu sou cliente da LiPetShop há 5 anos e não troco por nada! Certamente meu cachorro está muito mais feliz depois de começar a vir aqui. São profissionais incríveis e qualificados. </p>
                        <div>
                            <img src={userPhoto} />
                            <span>Wanessa Souza</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='arrows'>
                <button onClick={handleClickLeftArrow} className="arrowLeft">
                    <CaretLeft size={30} weight='bold' />
                </button>
                <button onClick={handleClickRightArrow} className="arrowRight">
                    <CaretRight size={30} weight='bold' />
                </button>
            </div>
        </section>
    )
}