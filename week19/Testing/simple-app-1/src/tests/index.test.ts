import { describe,it,expect } from "@jest/globals";
import { add } from "../index"

describe("Testing the add function",()=>{
    it("should add possitive numbers",()=>{
        const ans=add(2,3);
        expect(ans).toBe(5)
    }),
    it("should add negative numbers",()=>{
        const ans=add(-5,-3);
        expect(ans).toBe(-8)
    }),
    it("should add both +ve -ve numbers",()=>{
        const ans=add(5,-3);
        expect(ans).toBe(2)
    })
})