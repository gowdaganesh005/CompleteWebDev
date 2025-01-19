import { describe,expect,it,vi } from "vitest";
import request from "supertest";
import { app } from "..";
import { prismaClient } from "../db";

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
        const ans = await request(app).post("/sum").send({
            a:2,
            b:3
        })
        expect(ans.statusCode).toBe(200);
        expect(ans.body.ans).toBe(5);
    })
})