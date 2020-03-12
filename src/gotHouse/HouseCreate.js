 import React, {useState, useEffect} from 'react';
 import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
 import APIURL from '../helpers/environment'
 

 const HouseCreate = (props) => {
     const [name, setName] = useState('');
     const [motto, setMotto] = useState('');
     const [crest, setCrest] = useState ('');

     const handleSubmit = (e) => {
         e.preventDefault();
         fetch(`${APIURL}house`, {
             method: 'POST',
             body: JSON.stringify ({name:name, motto:motto, crest:crest}),
             headers: new Headers({
                 'Content-Type': 'application/json',
                 'Authorization': props.token
             })
         }).then((res) => res.json())
             .then((logData) => {
                 console.log(logData);
                 setName('');
                 setMotto('')
                 setCrest('')
                 props.fetchHouses();
             })
         }

    return (
        <>
        <div>
        <h3>Create a Game of Thrones House</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name">Enter House Name</Label>
                <Input name = "name" value={name} onChange={(e) => setName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="motto">What Is Your Motto</Label>
                <Input name = "motto" value={motto} onChange={(e) => setMotto(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="crest">Describe Crest</Label>
                <Input name = "crest" value={crest} onChange={(e) => setCrest(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
        </Form>  
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        
            <div>
                <h3>View The Crests of the Great Westersos Families</h3>
                <a href = "https://unrealitymag.com/the-full-game-of-thrones-family-crest-line-up/">Crests</a>
         </div>       
        </>
        
    )  
   
}
    
 export default HouseCreate;