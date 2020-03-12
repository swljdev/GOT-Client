import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Auth.css'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/api/user/signin', {
        method: 'POST', 
        body: JSON.stringify({user: {username: username, password: password}}),
        headers: new Headers ({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken);
    })
}

return(
    <div class = 'login'>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor = 'username'> Username</Label>
                <Input  onChange = {(e) => setUsername(e.target.value)} name = 'username' value = {username} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'password'>Password</Label>
                <Input type = "password" onChange = {(e) => setPassword(e.target.value)} name = 'password' value = {password}/>
            </FormGroup>
            <Button type = "submit">Login</Button>
        </Form>
    </div>
)
}

export default Login;