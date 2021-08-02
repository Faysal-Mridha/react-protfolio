import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';


function Contact() {
    const Send = (e) => {
        e.preventDefault();
        alert('yo')
    }

    return (
        <>
            
        <div className="contactTop__svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,170.7C384,192,480,256,576,250.7C672,245,768,171,864,165.3C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>    

        <section className='contact'>

            <div className="container">
                            <div className="contact_title">
                <p>Lorem ipsum dolor sit amet.</p>
                <h3>Contact me</h3>
            </div>

            <div className="contact__main">
                <form>
                  <div className="contact__text">
                    <h4>Message Me</h4>
                </div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Describe Your mind"></textarea>
                    <button type="submit" onClick={Send}>Send message</button>
                </form>

                <div className="contact__rightInfo">
                    <div className="single__contactBox">
                        <PersonIcon />
                        <div className="singleContact_boxInfo">
                            <h4>Name</h4>
                            <p>Faysal Mridha</p>
                        </div>
                    </div>

                    <div className="single__contactBox">
                        <RoomIcon />
                        <div className="singleContact_boxInfo">
                            <h4>Address</h4>
                            <p>Dhaka,Bangladesh</p>
                        </div>
                    </div>

                    <div className="single__contactBox">
                        <EmailIcon />
                        <div className="singleContact_boxInfo">
                            <h4>Email</h4>
                            <p>fmridha166@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            </section>
            </>
    )
}

export default Contact
