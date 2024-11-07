import { Client } from "pg";


const client=new Client({
    connectionString:"postgresql://postgres:123456@localhost/postgres"
})

client.connect()

async function createTable(){
     const  result=await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL
     )
        `)
        console.log(result)
}

async function insertData(name: string){
    const result=await client.query(`
        INSERT INTO users (username) VALUES($1)
        `,[name])

        console.log(result)
}

// createTable()
insertData("Suresh")