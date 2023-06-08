import express from 'express';
import cors from 'cors';
import _default from './config/default';
import startDB from './config/db'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen( _default.port, () => {
    console.log('server init in http://localhost : '+ _default.port);
    startDB();
});