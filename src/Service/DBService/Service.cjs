const { Client } = require('pg');
require("dotenv").config();

const ConnectDB = async () => {
    const PgService ={
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DB,
        password: process.env.PG_PASS,
        port: process.env.PG_PORT,
    }
    const client = new Client(PgService);
    await client.connect(); 
    return client;
};

const DisconnectDB = async (client) => {
    await client.end(); 
    console.log("Disconnected from PostgreSQL");
}

// export { ConnectDB, DisconnectDB };
module.exports = { ConnectDB, DisconnectDB };

