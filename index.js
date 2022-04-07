import express from 'express';
import { routes } from './src/routes/routes.js';
import path from 'path';

const port = 3002;
const __dirname = path.resolve(path.dirname(''));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


app.listen(port, (req, res) => { 
    console.log(`Rodando na porta ${port}`);
});