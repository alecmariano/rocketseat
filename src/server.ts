import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/img', express.static(path.resolve(__dirname, '..', 'img')));
app.listen(3333);