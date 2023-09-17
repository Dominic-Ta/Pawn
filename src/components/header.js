import { Link as ScrollLink } from "react-scroll";

function Header({sections, title}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Fifth navbar example">
                <div className="container-fluid">
                    <ScrollLink to="Home" smooth={true} duration={500} className="navbar-brand">
                        {title}
                    </ScrollLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#HomeNavBar" aria-controls="HomeNavBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="HomeNavBar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {sections.map((section) => (
                                <li key={section.id} className="nav-item">
                                    <ScrollLink className="nav-link" to={section.id} smooth={true} duration={500} >
                                        {section.text}
                                    </ScrollLink>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;