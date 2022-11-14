import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
// import Carousel from 'react-bootstrap/Carousel';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignin = () =>{
        providerLogin(googleProvider).then(res => {
            const user = res.user;
            // console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignin} variant="outline-primary" className='mb-2'><FaGoogle />&nbsp;&nbsp;Login with Google</Button>
                <Button variant="outline-dark"><FaGithub />&nbsp;&nbsp;Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook />&nbsp;&nbsp;Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp />&nbsp;&nbsp;Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter />&nbsp;&nbsp;Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram />&nbsp;&nbsp;Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item><FaYoutube />&nbsp;&nbsp;Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;