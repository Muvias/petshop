import '../../styles/main/about.scss';

import equipe from '../../assets/equipe.png'

export function About() {
    return (
        <section className='about' id='sobre'>
            <div className="imgContainer">
                <img src={equipe} alt="Fachada da petshop" />
            </div>

            <div className="textContainer">
                <h2>Sobre nós</h2>

                <div className='paragraphs'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus.
                    </p>
                    <p>
                        In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.
                    </p>
                    <p>
                        Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
                    </p>
                </div>
            </div>
            
            <div className="gradientDivider"></div>
        </section>
    )
}