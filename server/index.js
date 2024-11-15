
require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const sequelize = require("./db");

const app = express();
const PORT = process.env.PORT || 5000



const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>console.log(`TEST STARTED ON PORT ${PORT}`) )

    }catch(e){
        console.error(e)
    }
}


start()