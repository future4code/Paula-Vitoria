import axios from "axios";
import React, {useEffect, useState} from "react";
//import styled from "styled-components"
import Profile from "./components/Profile"


function App (){
  const [profile,setProfile] = useState({});
  useEffect ( ( )  =>  {
    getProfile ( ) ;
  } ,  [ ] ) ;

  const getProfile=()=>{
   const  url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
    axios.get(url)
    .then((res)=>{
      console.log("Objeto:" + res.data.profile);
      setProfile(res.data.profile)

    }).catch((err)=>{
      console.log(err.data)

    })
  }

  const choosePerson = () =>{
    const url="";
  }

 
  
  return (
    
    <div>
      <Profile
      name={profile.name}
      age={profile.age}
      bio={profile.bio}
      photo={profile.photo}
      
      />
    </div>
)};


export default App;
