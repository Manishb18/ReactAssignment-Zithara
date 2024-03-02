const express = require('express');
const getClient = require('./getClient');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())

//get user data
app.get('/getUserData', async (req, res) => {
    try {
        const client = await getClient();
        await client.connect();

        const selectQuery = `
            SELECT * FROM users;
        `;
        const response = await client.query(selectQuery);
        await client.end();
        res.status(200).json(response.rows); 
    } catch (error) {
        res.status(501).send('Internal Server Error');
    }
});

//add a new User
app.post('/addUser',async (req, res)=>{
    try{
        const {username, age, phone, location} = req.body;
        const client = await getClient();
        await client.connect();
        const values = [username, age, phone,location]
        const queryString = `
            INSERT INTO USERS(username, age, phone, location) values($1,$2,$3,$4) RETURNING *;
        `
        const response = await client.query(queryString, values);
        const newUserData = response.rows[0];
        await client.end()
    
        res.status(200).json({
            msg:"Added User Successfully",
            newUserData : newUserData
        })
    }
    catch(e){
        res.status(501).json({
            msg:"Failed to add the user, an error occurred!!!"
        })
    }
});

//global catch to catch any errors and prevent server crash
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, ()=>{
    console.log("Server is up and running!!")
});