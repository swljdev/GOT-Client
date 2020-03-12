import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const HouseEdit = (props) => {
    const [editName, setEditName] = useState(props.houseToUpdate.name);
    const [editMotto, setEditMotto] = useState(props.houseToUpdate.motto);
    const [editCrest, setEditCrest] = useState(props.houseToUpdate.crest);

    const houseUpdate = (event, house) => {
    event.preventDefault();
    fetch(`http://localhost:3001/house/update/${props.houseToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({name: editName, motto: editMotto, crest: editCrest}),
        headers: new Headers({
            'Content-Type': 'application/json',
            "Authorization": props.token
        })
    }).then((res) => {
        props.fetchHouses();
        props.updateOff();
    })
    }

return(
    <Modal isOpen = {true}>
        <ModalHeader>Make Changes Here</ModalHeader>
        <ModalBody>
            <Form onSubmit = {houseUpdate}>
                <FormGroup>
                <Label htmlFor = 'house'>Edit House:</Label>
                <Input name = "name" value = {editName} onChange={(e) => setEditName(e.target.value)}/>
               </FormGroup>
            <FormGroup>
                <Label htmlFor = 'motto'>Edit Motto:</Label>
                <Input name = 'motto' value ={editMotto} onChange={(e) => setEditMotto (e.target.value)}/>    
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'crest'>Edit Crest:
                <Input name = 'crest' value={editCrest} onChange={(e) => setEditCrest (e.target.value)}/>
                </Label>
            </FormGroup>
            <Button type = "submit">Update Your House!</Button>
            </Form>
        </ModalBody>
    </Modal>
)
}

export default HouseEdit;