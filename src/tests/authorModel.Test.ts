import * as author from "../model/authorModel"
import * as type from "../model/types"
import assert from "assert"
import chai from "chai"

/// function getAuthors returns an array ///
describe("getAuthors", () => {
    it('is a function returning an array',  async () => {
        const result : any = await author.getAuthors
        console.log(result)
        
       
    assert.deepEqual(result instanceof Array, true)
    })
})

/// each object of the array returned by getAuthors has an Author type (error with type Author)///

// describe("getAuthors", () => {
//     it('each object of the array returned by getAuthors has an Author type',  async () => {
//         const result : any = await author.getAuthors
//         console.log(result)
        
//        if (result.length > 0) {
//            assert.deepEqual(result[0] instanceof type.Author, true)
//            }
    
//        })
// })

// describe("getAuthors", () => {
//     it('is a function returning an array',  async () => {
//         const result : any = await author.getAuthors
//         console.log(result)
        
       
//     assert.deepEqual(result instanceof Array, true)
//     })
// })

// describe("calculation", () => {
//     it('1+2', () => {
//         assert.strictEqual(author.test(), 3)
//     })
// })

