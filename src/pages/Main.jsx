import { About } from "../components/main/About";
import { Home } from "../components/main/Home";
import { Services } from "../components/main/Services";
import { Testimonials } from "../components/main/Testimonials";

import '../styles/main.scss';

export function Main() {
    return (
        <div className="main">
            <Home />
            <About />
            <Services />
            <Testimonials />
            <div className="mainGradientDivider"></div>
        </div>
    )
}