import { connection } from "../conf"
import * as type from './types'


export const getAuthors = new Promise((resolve, reject) => {
    connection.query("SELECT * FROM author", (err: any, results: type.Author[]) => {
        if (err) {
            reject()
        } else resolve(results)
    })
})

export const createAuthors = (author : string) => {
    return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO author(name) VALUES (?) `, author, (err: any, results: any) => {
                if (err || typeof author !== 'string') {
            reject()
        } else resolve(results)
    })
})
}

export const test = () => {
    return 1 + 1  
}