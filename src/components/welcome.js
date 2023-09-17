import { Link as ScrollLink } from "react-scroll";


function WhoWeAre({name, background, section}) {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="container text-center text-md-left" data-aos="fade-up">
            <h1>Welcome to <span>{name}</span></h1>
            <h2>{background}</h2>
            <ScrollLink to={section} smooth={true} duration={500} className="btn-get-started scrollto">
                Let's Get Started
            </ScrollLink>
        </div>
    </section>
    )
}
export default WhoWeAre;