import { Character } from "../models/character"
export const validateCharacter = (character:Character): boolean =>{

    if(!character.defense  || !character.force || !character.life || !character.name){
        return false;
    }
  
    if(character.life < 0 || character. defense < 0 || character.force < 0){
        return false;
    }

    return true;


}