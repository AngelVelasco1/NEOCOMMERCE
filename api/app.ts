import express from 'express';
import { initRoutes } from './routes/router.js';

const app = express();
const port = 3307;

app.use(express.json());

app.use('/api', initRoutes());


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});