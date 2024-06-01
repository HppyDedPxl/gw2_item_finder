import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export const getDb = async() => {
    const db = await(open({
        filename: "./app/data/items.db",
        driver: sqlite3.Database
    }))
    return db
}