import React from 'react';
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-white'>
            <div className="row">
                <div className="col-10 mx-auto d-flex flex-md-row flex-column justify-content-around py-4 align-items-center">
                    
                    <p className='text-white fw-lighter m-0'> <small>Copyright @ {year} </small> Fruits Stock House </p>
                    
                    <div className='fs-4'>
                        <a className=' text-white' href="https://www.facebook.com/amikibria"><SiFacebook></SiFacebook></a> &nbsp; &nbsp;
                        <a className=' text-white' href="https://www.linkedin.com/in/kibria-khandaker/"><SiLinkedin></SiLinkedin></a> &nbsp; &nbsp;
                        <a className=' text-white' href="https://github.com/kibria-khandaker"><SiGithub></SiGithub></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;