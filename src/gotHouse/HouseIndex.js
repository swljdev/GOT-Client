import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import HouseCreate from './HouseCreate';
import HouseTable from './HouseTable'
import HouseEdit from './HouseEdit';
//import CrestGrid from './CrestGrid'
import './House.css'



const HouseIndex = (props) => {
    const [houses, setHouses] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [houseToUpdate, setHouseToUpdate] = useState({});

    const fetchHouses = () => {
        
        fetch('http://localhost:3001/house', {
            method: "GET",
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            setHouses(logData)
            //console.log(logData)
        })
    }

    const editUpdateHouse = (house) => {
        setHouseToUpdate(house);
        console.log(house);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () =>{
        setUpdateActive(false);
    }


useEffect(() => {
    fetchHouses();
}, [])

    return(
        <Container className = 'fillForm'>
            <div className = "createHouse">
            
            <Row>
                <Col md="3">
                    <HouseCreate fetchHouses = {fetchHouses} token={props.token}/>
                </Col>
                <Col md="9">
                   <HouseTable houses={houses} editUpdateHouse = {editUpdateHouse}
                   updateOn = {updateOn} fetchHouses={fetchHouses}
                   token={props.token}/>
                </Col>
                {updateActive ? <HouseEdit houseToUpdate = {houseToUpdate} updateOff = {updateOff}
                token={props.token} fetchHouses= {fetchHouses}/> : <></>}
            </Row>
           </div>
          
        </Container>
    )
}

export default HouseIndex;