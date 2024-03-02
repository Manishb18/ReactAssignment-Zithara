const {Client} = require('pg')
require('dotenv').config();

const dbUrl = process.env.DB_URL;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getClient(){
    try {
        const client = new Client(dbUrl);
        return client; 
    } catch (error) {
        console.log("Failed to get the client!")
        return null
    }
}

module.exports = getClient