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

export const getAuthorsNotes = (authorId : String) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM note WHERE author_id = ?", authorId, (err: any, results: type.Note[]) => {
            if (err) {
            reject()
        } else resolve(results)
    })
})
}