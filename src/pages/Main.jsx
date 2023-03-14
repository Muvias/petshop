import { About } from "../components/main/About";
import { Home } from "../components/main/Home";
import { Services } from "../components/main/Services";

export function Main() {
    return (
        <div>
            <Home />
            <About />
            <Services />
        </div>
    )
}