import React from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setProject} from '../action'


function SProject({ title, link, img,dis,img2,img3 }) {
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setProject({
            title,link,img,dis,img2,img3}));
        history.push('/projectView');
    }

    return (
        <div className='Sproject'>
                <a onClick={handleClick} className="signle__lProject">
                    <img src={img} alt="" />
                    <div className="single__pInfo">
                        <h3>{title}</h3>
                        <button onClick={handleClick} className="btn">Read More</button>
                    </div>
                </a>
        </div>
    )
}

export default SProject
