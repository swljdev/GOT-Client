import React, {useState, useEffect} from 'react';
import SiteBar from './home/Navbar';
import Auth from './auth/Auth';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import HouseIndex from './gotHouse/HouseIndex';
import HouseCreate from './gotHouse/HouseCreate';




function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() =>{
  if (localStorage.getItem('token')){
  setSessionToken(localStorage.getItem('token'));
}
}, [])

const updateToken = (newToken) =>{
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <HouseIndex token = {sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}


  return (
    <div>
      <SiteBar clickLogout={clearToken}/>
      {protectedViews()}
      {/* <Auth updateToken = {updateToken}/> */}  
    
      
    </div>
  );

}


export default App;
