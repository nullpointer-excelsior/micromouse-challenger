import { MicroMouse } from "../micromouse_challenger/micromouse/application"

describe('Application',() => {


    
    describe("MicroMouse",()=>{

        const micromouse = new MicroMouse(null, null)

        test('submitFlag', () =>  {
            const isFlag = micromouse.getFlag()
            expect(isFlag).toBeTruthy()
        })
    })
})