import { Character } from "../models/character"
import { performAttack } from "../src/performAttack"

describe("Testing our function performAttack",()=>{
    test("Output where the characters are valids",()=>{


        const validatorMock = jest.fn(()=>{
            return true;
        });
        const attacker:Character ={
            name:"Ryu",
            life:1500,
            defense:600,
            force:600
        }
         const defender:Character ={
            name:"Cammy",
            life:1500,
            defense:400,
            force: 500
        }

        performAttack(attacker, defender,validatorMock)
        expect(defender.life).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
   
    })

    test("Error when we have invalid input",()=>{

        const validatorMock = jest.fn(()=>{
            return false;
        })
        const attacker:Character ={
            name:"Ryu",
            life:1500,
            defense:600,
            force:600
        }
         const defender:Character ={
            name:"Cammy",
            life:-1500,
            defense:400,
            force: 500
        }
        try{
        performAttack(attacker, defender,validatorMock)
        }catch(error){
        expect(error.message).toBe("Invalid Character")
        expect(validatorMock).toHaveBeenCalled()
        }
    })
})