// import { Link as ScrollLink } from "react-scroll";

function Actions({info, ActionStatement}) {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>What We Do</h2>
                    <p>{ActionStatement}</p>
                </div>
                <div className="row">
                    {info.map((info) => (
                        <div key={info.id}  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" >
                            <div className="icon-box">
                                <div className="icon">{info.icon}</div>
                                <h4>
                                    <a href={info.url} target="_blank" 
                                        rel="noopener noreferrer nofollow" >
                                            {info.title}
                                    </a>
                                </h4>
                                <p>Click this to learn more!</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Actions;