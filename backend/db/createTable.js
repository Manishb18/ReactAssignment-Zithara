
const getClient = require('../getClient')
async function createTableUsers(){
    const client = getClient();
    await client.connect();
    const createTableQuery = `
        CREATE TABLE users1(
            sno SERIAL PRIMARY KEY,
            userName VARCHAR(250) NOT NULL,
            age INTEGER NOT NULL,
            phone VARCHAR(20) NOT NULL,
            location VARCHAR(250) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `
    const res = await client.query(createTableQuery)
    console.log("Table Created Succesfully!!")

}
createTableUsers()