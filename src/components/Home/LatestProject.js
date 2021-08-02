import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SProject from '../SProject'
import project from '../../page/projectData.json'

function LatestProject() {
    const history = useHistory();

// const [project, setProject] = useState([
    
// ])


    return (
        <section className='latestProject'>
            {project.slice(0,5).map(({ title, link, img,dis,img2,img3 }) => (
                <SProject title={title} link={link} img={img} dis={dis} img2={img2} img3={img3} />
            ))}
        </section>
    )
}

export default LatestProject
