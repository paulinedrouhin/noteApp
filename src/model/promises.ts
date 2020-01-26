import { connection } from "../conf"
import * as type from './types'


export const getAuthors = new Promise((resolve, reject) => {
    connection.query("SELECT * FROM author", (err: any, results: type.Author[]) => {
        if (err) {
            reject()
        } else resolve(results)
    })
})

export const createAuthors = (author : type.Author) => {
    return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO author(name) VALUES (?) `, author, (err: any, results: any) => {
                if (err) {
            reject()
        } else resolve(results)
    })
})
}

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