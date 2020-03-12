import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';


const Auth = (props) => {
   
    
    return(
        <Container className = "auth-container">
            <div className= 'background'>
                <Row>
                <Col md='6'>
                    <Signup updateToken = {props.updateToken}/>
                </Col>
                <Col md= "6" className = 'login-col'>
                    <Login updateToken = {props.updateToken} />
                </Col>
            </Row>
            </div>
        </Container>
        
    )
}  
export default Auth;

