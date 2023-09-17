import frontdesk from '../assets/img/pawn1/frontdesk.jpg';
function AboutUs({About, facts, topfacts}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={frontdesk} alt="about" className="img-fluid"/>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                    <h3>About Us</h3>
                    <p>
                        {About}
                    </p>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {facts.map((fact) => (
                            <li key={fact.id} className="nav-item">
                                {fact.text}
                            </li>
                        ))}
                    </ul>
                    <h3>Some little facts about us are: </h3>
                    <div className="row icon-boxes">
                        {topfacts.map((topfact) => (
                            <div key={topfact.title} className="col-md-6 mt-4 mt-md-0">
                                {topfact.icon}
                                <h4>{topfact.title}</h4>
                                <p>{topfact.text}</p>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;