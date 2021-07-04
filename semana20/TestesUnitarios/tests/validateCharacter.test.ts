import { textSpanEnd } from "typescript";
import { Character } from "../models/character";
import {validateCharacter} from "../src/validateCharacter"
describe("Testing the function validateCharacter",()=>{
    test("Error when character name is a empty string",()=>{
        const result = validateCharacter({name:"",force:100, life:150, defense:80})
        expect(result).toBe(false)
    })

    test("Error when the character life is equals 0",()=>{
        const result = validateCharacter({name:"Sonic",force:200,life:0,defense:60})
        expect(result).toBe(false)
    })

    test("Error when the force is equals 0",()=>{
        const result = validateCharacter({name:"Sonic",force:0,life:1500,defense:60})
        expect(result).toBe(false)
    })

    test("Error when defense is equals 0",()=>{
        const result = validateCharacter({name:"Sonic",force:180,life:1500,defense:0})
        expect(result).toBe(false)
    })

    test("Error when life is a negative number",()=>{
        const result = validateCharacter({name:"Sonic",force:180,life:-1500,defense:200})
        expect(result).toBe(false)


    })

    test("Error when life is a negative number",()=>{
        const result = validateCharacter({name:"Sonic",force:180,life:1500,defense:200})
        expect(result).toBe(true)


    })
    })
