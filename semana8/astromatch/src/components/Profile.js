import React, {useState} from "react";
import styled from "styled-components"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import PeopleIcon from '@material-ui/icons/People';


const Container = styled.div`
width: 100%;
height:100vh;
max-width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
box-sizing:border-box;


`
const ProfileContainer = styled.div`
width: 400px;
height:600px;
border: 1px solid black;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
`

const HeaderContainer = styled.div`
display:flex;
align-self:flex-start;
border-bottom:1px solid lightgrey;
justify-content:space-around;
align-items:center;
width:100%;
box-sizing:border-box;





& > p{
    display:flex;
    align-self:center;
    margin-left:120px;
    font-size:20px;
    font-weight:bold;
    color:#94618E;

    &>span{
        color:#bf40bf;
    }
    
    
  
   
}

`
const ButtonContainer = styled.div`
position:absolute;
display:flex;
align-self:flex-end;
&>button:nth-child(1){
      

    }


& > button{
    border-radius: 10px;
    height: 60px;
    width:60px;
    margin: 45px;
    align-self:center;
    margin-bottom:20px;
   


}

`
const ProfileSecondary = styled.div`
background-image:url(${props => props.photo});
width: 350px;
height:420px;
background-size:100%;
position:absolute;
background-repeat:no-repeat;
border-radius:10px;
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
             <HeaderContainer>
                <p><span>astro</span>match</p>
                <p><span><PeopleIcon/></span></p>
                
             </HeaderContainer>
            
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