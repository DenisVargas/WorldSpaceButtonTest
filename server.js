const path = require('path');
// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`App running in port:${PORT}`);
});