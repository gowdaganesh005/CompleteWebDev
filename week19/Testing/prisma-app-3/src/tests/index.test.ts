import { describe,expect,it,vi } from "vitest";
import request from "supertest";
import { app } from "..";
import { prismaClient } from "../__mocks__/db";

// vi.mock('../db',()=>{
//     return{
//         prismaClient:{
//             sum:{
//                 create:vi.fn()  /// it s not a deep copy ever function used in the prisma client to be writtern individually so to avoid it we need to deep copy
//                 delete:vi.fn(0)
//              }
//         }
//     }
   
// })

// deep mocked in __mocks__  which the directory should be next to the main file to be mocked  db.ts and __mocks__ / db.ts
 
vi.mock('../db')




describe("Testing with mocking database",()=>{
    it("add 2 and 3",async ()=>{
        
        prismaClient.sum.create.mockResolvedValue({
            sumId:1,
            sum:5,
            a:2,
            b:3
        }) /// in the main code the id must be returned by the actual value but we are here mocking the returned value to able to use it as reponse if the dev have retured the response.sum instead sumvalue so it makes testing the returnValues
        // mocking the output of database call

        vi.spyOn(prismaClient.sum,"create")   // NOTE: this must be called after mocking the return value else the funciton retuen create doesnt exists
        // this spys on the actual vlaue that the developer is sending across the db making sure correct values are sent 
        // thsi is what is spying is and actually helps when data is enterd correctly
        



        const ans = await request(app).post("/sum").send({
            a:2,
            b:3
        })
        expect(prismaClient.sum.create).toHaveBeenCalledWith({    // actual testing the values that are sent in main request
            data:{
                sum:5,
                a:2,
                b:3
            }
        })
        expect(ans.statusCode).toBe(200);
        expect(ans.body.sumId).toBe(1)
        expect(ans.body.ans).toBe(5);
    })
})