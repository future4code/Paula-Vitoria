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


    test("Error when defenser of defender is majon than attacker force",()=>{

        const validatorMock = jest.fn(()=>{
            return true;
        })
        const attacker:Character ={
            name:"Ryu",
            life:1500,
            defense:600,
            force:200
        }
         const defender:Character ={
            name:"Cammy",
            life:1500,
            defense:600,
            force: 500
        }

        
        performAttack(attacker, defender,validatorMock)
        expect(defender.defense).toBeGreaterThanOrEqual(attacker.force)
       
    })


    test("Error when the name's attacker is a empty string ",()=>{

        const validatorMock = jest.fn(()=>{
            return false;
        })
        const attacker:Character ={
            name:"",
            life:1500,
            defense:600,
            force:200
        }
         const defender:Character ={
            name:"Cammy",
            life:1500,
            defense:600,
            force: 500
        }

        try{
        performAttack(attacker, defender,validatorMock)
        }catch(err){
        expect(err.message).toBe("Invalid Character")
        }
    })

        
    test("Error when defense of defender is equals force ",()=>{

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
            life:1500,
            defense:600,
            force: 500
        }

     
        performAttack(attacker, defender,validatorMock)
        expect(defender.defense).toEqual(attacker.force)
      
    })
    test("Error when force less than zero ",()=>{

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
            life:1500,
            defense:600,
            force: -5
        }

     try{
        performAttack(attacker, defender,validatorMock)
     }catch(err){
        expect(err.message).toEqual("Invalid Character")
     }
    })



})
