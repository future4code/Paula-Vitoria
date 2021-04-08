import React, {useState} from "react";
import styled from "styled-components"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';

const Container = styled.div`
width: 100%;
height:100vh;
max-width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const ProfileContainer = styled.div`
width: 450px;
height:600px;
border: 1px solid black;
display:flex;
justify-content:center;
align-items:center;



`
const ButtonContainer = styled.div`
position:absolute;
display:flex;
align-self:flex-end;


&> button{
    border-radius: 50px;
    height: 50px;
    width:50px;
    margin: 45px;
    align-self:center;
}

`
const ProfileSecondary = styled.div`
background-image:url(${props => props.photo});
width: 350px;
height:420px;
background-size:100%;
position:absolute;
background-repeat:no-repeat;





`
const ProfilePrimary = styled.div`
background-image:url(${props => props.photo});
width: 350px;
height:420px;
background-size:100%;
filter:blur(5px);
position:absolute;


`

const InformationContainer = styled.div`
position:absolute;
color:white;
display:flex;
flex-direction:column-count;


&>div{
    font-weight:bold;
    font-size:20px;

}
`


const Profile =(props)=>{
    console.log("Props:" + props);

    return(
       
        <Container>
             <ProfileContainer>
            
           <ProfilePrimary photo={props.photo}/>
            <ProfileSecondary photo={props.photo}/>
            
            <InformationContainer>
                <div>{props.name}</div>
                <p>{props.age}</p>
                <p>{props.bio}</p>
            </InformationContainer>

           <ButtonContainer> 
            <button><ClearIcon/></button>
            <button><FavoriteIcon/></button>
            </ButtonContainer>

        </ProfileContainer>
          
            
        </Container>

       
           
    


    )


}
export default Profile;