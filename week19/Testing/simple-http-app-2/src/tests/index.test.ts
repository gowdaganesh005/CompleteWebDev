import { describe,it,expect } from "@jest/globals";
import { app } from "../index";
import request from "supertest";



describe('testing the sum endpoint',()=>{
    it("testing for 2 3",async ()=>{
        const res=await request(app).post('/sum').send({a: 2,b: 3});
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(5)
    })
})