import {add} from "../../src/api/v1/services/distributeur.js";

describe("Add functionaltity", ()=>{
    it("Calculate x + y = z", () => {
        expect(add(2,1)).toEqual(3)
    })
});

