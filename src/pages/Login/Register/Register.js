import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';



const Register = () => {
    
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile , verifyEmail } = useContext(AuthContext);
    // console.log(error);

    useTitle('Registration');

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email ,password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserprofile(name, photoURL);
                handleVerifyEmail();
                toast.success('Please Verify your email address');
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    const handleUpdateUserprofile = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile).then(() => { }).catch(error => console.error(error));
    }


    const handleVerifyEmail = () =>{
        verifyEmail().then(() => { }).catch(e => console.error(e));
    }



    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Form className='w-50 m-auto mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo url</Form.Label>
                <Form.Control name="photo" type="text" placeholder="Your Photo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p>Already have a account <Link to='/login'>Sign In</Link></p>
        </Form>
    );
};

export default Register;