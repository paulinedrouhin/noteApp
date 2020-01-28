import { connection } from "../conf"
import * as type from './types'

export const createNote = (note : type.Note) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO note SET ? `, note, (err: any, results: any) => {
            if (err) {
            reject()
        } else resolve(results)
    })
})
}

/////////: trying to actively precise const note type (received in the request) /////
// export const createNote = (note : type.Note) => {
//     return new Promise((resolve, reject) => {
//         connection.query(`INSERT INTO note SET ? `, note, (err: any, results: any) => {
//             if (err || typeof note !== `${type.Note}`) {  ///////////////////////////////////////////////////
//             reject()
//         } else resolve(results)
//     })
// })
// }

export const getAuthorsNotes = (authorId : Number) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM note WHERE author_id = ?", authorId, (err: any, results: type.Note[]) => {
            if (err) {
            reject()
        } else resolve(results)
    })
})
}