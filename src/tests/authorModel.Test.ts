import * as author from "../model/authorModel"
import * as note from "../model/noteModel"
import * as type from "../model/types"
import assert from "assert"

describe("calculation", () => {
    it('1+2', () => {
        assert.strictEqual(author.test(), 3)
    })
})


describe("getAuthors", () => {
    it('is a function returning an array',  async () => {
        const result : any = await author.getAuthors
        console.log(result)
        
       
    assert.deepEqual(result instanceof Array, true)
    })
})

