require('dotenv').config()
const { conn } = require('./DB_connection')
const server  = require("./app");

const{PORT} = process.env;

server.listen(PORT, async () => {
    await conn.sync({force:true})
    console.log(`Server is listen in port ${PORT}`);
})