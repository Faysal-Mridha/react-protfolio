import React, { useState } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactPlayer from 'react-player'
import CloseIcon from '@material-ui/icons/Close';

function LiveOffice() {

    const [vedioLInk, setVedioLink] = useState('');
    const [openModal,setOpenModal] = useState(false);

    const data =
        [
        { id: 1, img: '/img/cubix-work-space.jpg', vLink: 'https://www.youtube.com/watch?v=BN7ZAWRLJP0' },
        { id: 2, img: '/img/Cubix-DC-Office.jpg',vLink: 'https://www.youtube.com/watch?v=OYzrF4wuDKs' },
            { id: 3, img: '/img/cubix-playarea.jpg', vLink: 'https://www.youtube.com/watch?v=LaWFPfaDXRg' }];
    
    const setVedio = (value) => {
        setVedioLink(value);
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            {openModal && (
            <div className="modal">
                <div className="modal__wraper">
                    <h3>Office Live Vedio</h3>
                        <CloseIcon onClick={closeModal} />
                {vedioLInk && <ReactPlayer width="100%" url={vedioLInk} loop />}
                </div>
            </div>
            )}

        <section className="liveOffice">
            <div className="container">
                <div className="expart_titleTop">
                    <h4>Live from our office</h4>
                    <p>Talent wins games, but teamwork and intelligence wins championships</p>
                </div>

                <div className="liveOffice__contant">
                {data.map(({ id, img,vLink }) => (
                    <div className="single__live__contant">
                        <img src={img} alt="" />
                        <div className="icon">
                            <PlayArrowIcon onClick={() => setVedio(vLink)}/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </section>
            </>
    )
}

export default LiveOffice
