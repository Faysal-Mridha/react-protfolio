import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import './ProjectView.css'

function ProjectView() {
    const history = useHistory();

    const selected =useSelector((state) => state.proj.project)
    console.log(selected)

    if (!selected) {
        history.replace('/protfolio');
    }

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
       setImageUrl(selected?.img); 
    },[])

    return (
        <div className="projectView">
            <header>
                <Header />
            </header>
            <section className="projectViewWrapper">
                <div className="container">
                    <div className="allView__contant">
                        <div className="viewContant__left">
                            <div className="topImage">
                                <img src={imageUrl} alt="" />
                            </div>

                            <div className="bottom__image">
                                <img src={selected?.img} onClick={()=> setImageUrl(selected?.img)} />
                                <img src={selected?.img2} onClick={()=> setImageUrl(selected?.img2)} />
                                <img src={selected?.img3} onClick={()=> setImageUrl(selected?.img3)} />
                            </div>
                        </div>

                        <div className="viewContant__right">
                            <div className="top_title">
                                <h2>{selected?.title}</h2>
                                <a target="_blank" href={selected?.link}>{selected?.link}</a>
                            </div>

                            <p>{selected?.dis}</p>

                            <div className="buttons">
                                <a className='btn' href="#">Hire me</a>
                                <a className='btn outline' href="#">Download</a>
                            </div>
                        </div>
                    </div>

                    <div className="live__demo">
                        <div className="liveDemoTitle">
                            <h2>Live Demo</h2>
                        </div>

                        <div className="iframe">
                            <iframe src={selected?.link} allowfullscreen="" loading="lazy" frameborder="0" scrolling=""></iframe>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProjectView
