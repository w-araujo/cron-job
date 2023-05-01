import express from 'express';
import { routes } from './routes/routes';

const app = express();

const PORT = 3334;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
