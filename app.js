import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import passport from 'passport';;
import routes from './router';
import http from 'http';

( async()=> {
    const app = express()
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(cors());
    app.use('/api', routes);
    app.use(express.static(path.join('/doc',__dirname, '..','doc')))
    mongoose.connect(process.env.DB_URL, {})
    const server = http.createServer(app)
    const port = process.env.PORT || 8000
    server
    .listen(port)
    .on('listening', () => console.log(`App is started on port: ${port}`))
    .on('error', (err) => 
    console.log(`An error occured while starting server`, err)
    );
})()



