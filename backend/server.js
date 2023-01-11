import cors from 'cors';
import dotenv from "dotenv";
import db from './models/index.js';
import express, { json } from 'express';
import router from './routes/index.js';
import cookieSession from 'cookie-session';
dotenv.config();

const app = express();

app.use(cors( {credentials: true, origin: 'http://localhost:3000' } ))
app.use(json());
app.use(cookieSession({
    name: 'session',
    keys: ["key1", "key2"]
}));
app.use(router);

db.sequelize.sync()
  .then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});