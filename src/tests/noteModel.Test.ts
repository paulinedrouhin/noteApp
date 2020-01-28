import * as note from "../model/noteModel"
import * as type from "../model/types"
import assert from "assert"
import chai from "chai"


/// function getAuthorsNotes returns an array ///
describe("getAuthorsNotes", () => {
    it('is a function returning an array',  async () => {
        const result : any = await note.getAuthorsNotes(1)
        console.log(result)
        
       
    assert.deepEqual(result instanceof Array, true)
    })
})

/// each object of the array returned by getAuthorsNote has an Note type (error with type Note)///

// describe("getAuthorsNotes", () => {
//     it('each object of the array returned by getAuthorsNotes has a Note type',  async () => {
//         const result : any = await author.getAuthorsNotes
//         console.log(result)
        
//        if (result.length > 0) {
//            assert.deepEqual(result[0] instanceof type.Note, true)
//            }
    
//        })
// })

