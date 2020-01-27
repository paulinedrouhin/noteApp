import * as author from "../model/authorModel"
import * as note from "../model/noteModel"
import * as type from "../model/types"
import assert from "assert"

describe("calculation", () => {
    it('1+2', () => {
        assert.strictEqual(author.test(), 3)
    })
})

// describe("promisetest", () => {
//     it('resolves', (done) => {
//         const resolvingPromise = new Promise( (resolve) => {
//           resolve('promise resolved');
//         });
//         resolvingPromise.then( (result) => {
//           assert.strictEqual(result,'promise resolved');
//           done();
//         });
//       }
//     )})

describe("getAuthors", () => {
    it('is a function returning an array',  async () => {
        const result : any = await author.getAuthors.resolve
        console.log(result)
        
       
    assert.deepEqual(result instanceof Array, true)
    })
})


// author.getAuthors.then(result=>{
//     console.log(typeof result)
//     assert.deepEqual(typeof result, 'array')
// })   