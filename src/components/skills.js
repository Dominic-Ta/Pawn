import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react"
import ReactVisibilitySensor from "react-visibility-sensor";

function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
function Skilllevels({statement, skills}){
    const chunkedSkills = chunkArray(skills, 3);
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle visibility change
    const handleVisibilityChange = (visible) => {
      if (visible) {
        setIsVisible(true);
      }
    };

    return (
        <div className="container">
            <div className="row skills-content">
                <h3>Skills</h3>
                <p> {statement} </p>
                {chunkedSkills.map((chunk, index) => (
                    <div key={index} className="col-lg-6">
                        {chunk.map((skill, skillIndex) => (
                        <div key={skillIndex} className="progress overflow-visible">
                            <span className="skill">{skill.skill}<i className="val">{skill.percentage}%</i></span>
                            <div className="progress-bar-wrap">
                                <ReactVisibilitySensor onChange={handleVisibilityChange}>
                                    {isVisible ? (<ProgressBar completed={skill.percentage} bgColor="blue" animateOnRender={true} borderRadius="" isLabelVisible={false}/>):(<div>-</div>)}
                                </ReactVisibilitySensor>
                            </div>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
// bgColor: #5faee3;
export default Skilllevels;