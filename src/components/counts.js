import { useState } from "react"
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Skills({ inputs }) {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle visibility change
    const handleVisibilityChange = (visible) => {
      if (visible) {
        setIsVisible(true);
      }
    };
    return (
        <div className="container">
            <div className="row">
            {inputs.map((input) => (
                <div key={input.id} className="col-lg-3 col-6 mt-5 mt-lg-0 skill_issue">
                    <div className="count-box">
                        <i className={`bi bi-${input.icon}`}></i>
                        <ReactVisibilitySensor onChange={handleVisibilityChange}>
                            {isVisible ? (<CountUp end={input.level} duration={3}/>) : (<span> 0 </span>)}
                        </ReactVisibilitySensor>
                        <p>{input.text}</p>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    );
}

export default Skills;