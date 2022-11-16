import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(form);

        signIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
            setError('');
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }
    return (
        <Form className='w-50 m-auto mt-5' onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p>New Customer <Link to='/register'>Sign Up</Link></p>
        </Form>
    );
};

export default Login;