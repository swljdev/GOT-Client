import React from 'react';
import {Table, Button} from 'reactstrap';


const HouseTable = (props) => {
    const deleteHouse = (house) => {
        fetch(`http://localhost:3001/house/${house.id}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) 
        .then(() => props.fetchHouses())
    }
    
    const houseMapper = () => {
        return props.houses.map((house, index) => {
            return(
                <tr key={index}>
                    <th scope = "row">{house.id}</th>
                    <td>{house.name}</td>
                    <td>{house.motto}</td>
                    <td>{house.crest}
                    </td>
                <td>
                    <Button color = "primary" onClick = {() => {props.editUpdateHouse(house); props.updateOn()}}>Edit</Button>
                    <Button color = "danger" onClick = {() => deleteHouse(house)}>DELETE</Button>
                </td>
               </tr>
            )
        })
    }
    
     
    return(
        <>
        <h3>Your Game of Thrones House</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Motto</th>
                    <th>Crest</th>
                </tr>
            </thead>
            <tbody>
                {houseMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default HouseTable;

