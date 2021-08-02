import React, { useEffect, useState } from 'react'
import './Project.css'
import Header from '../components/Header'
import SProject from '../components/SProject'
import ProjectData from './projectData.json'
import SearchIcon from '@material-ui/icons/Search';

function Project() {

    const [project, setProject] = useState(ProjectData);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText === '') return;

        setProject(() => ProjectData.filter((item) => item.title.toLocaleLowerCase().match(searchText.toLocaleLowerCase())))

    }, [searchText]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);

        if (!e.target.value.length > 0) {
            setProject(ProjectData)
        }
    }

    return (
        <div className="project">
            <header>
                <Header />
            </header>



            <div className="mycreate_allProject">
                <div className="container">
                                 <div className="all__projectTop">
                    <h3>My created all projects</h3>
                </div>


          <div className="search__bar">
                <div className="input">
                    <input value={searchText} type="text" placeholder="Search The Project Name" onChange={handleChange} />
                    <SearchIcon />
                </div>
            </div>


                <div className="react__project">
                    <div className="project__title">
                        <h2>React js</h2>
                    </div>
                    <div className="React__all">
                            {project.map(({ id, title,link,img,dis,img2,img3 }) => (
                        <SProject key={id} dis={dis} img2={img2} img3={img3} title={title} link={link} img={img} />
                    ))}
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Project
