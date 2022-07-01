import express from "express";
import cors from 'cors'

import db from './database/db.js'
import blogRoutes from './routes/routes.js'
import logger from 'morgan'

const port = 8001;

const app = express()

app.use(logger('dev'));
app.use(cors())
app.use(express.json())

app.get('/', function (req,res)  {
    console.log('HI!');
    res.send('Hi')
})
app.use('/blogs',blogRoutes)

try {
    await db.authenticate();
    console.log(`database online`);
} catch (error) {
    console.log(`database error: ${error}`);
}

app.get("*", (req, res) => {
  
    // Here user can also design an
    // error page and render it 
    res.send("PAGE NOT FOUND");
  });

app.listen(3000, function () {
    console.log(`Server started on port ${3000}`);
});