import { Character } from "../models/character";
import { validateCharacter } from "../src/validateCharacter";

const c1:Character = {
    name:"Sonic",
    life:1500,
    defense:200,
    force:300
}

const result:boolean = validateCharacter(c1)
console.log(result)