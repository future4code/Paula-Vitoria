import { Character } from "../models/character"
import { validateCharacter } from "./validateCharacter"

//SEM INVERSÃO DE DEPENDÊNCIA
/*export const performAttack = (attacker:Character, defender:Character) =>{
try{
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }

    if(defender.defense < attacker.force){
        defender.life = defender.life - (attacker.force - defender.defense);

    }

}catch(error){

}
}*/

//COM INVERSÃO DE DEPENDÊNCIA
export const performAttack = (attacker:Character, defender:Character, validate: (input:Character) => boolean ) =>{
try{
    if(!validate(attacker) || !validate(defender)){
        throw new Error("Invalid Character")
    }

    if(defender.defense < attacker.force){
        defender.life = defender.life - (attacker.force - defender.defense);

    }

}catch(error){

    console.log(error.message)

}
}