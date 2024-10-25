import './ProjectContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const ProjectContainer = ({ projectName, url, imgSrc }) => {
    return (
        <div className='project-container'>
            <h4>
                {projectName}
            </h4>
            <img className='project-img' src={imgSrc} />
            <a href={url}>
                <FontAwesomeIcon className='ext-link-icon' icon={faArrowUpRightFromSquare} />
            </a>
        </div>
    )
}

export default ProjectContainer;
