import { PrismaClient } from "@prisma/client";

import express from 'express';
import { initRoutes } from './routes/router.js';
import { CONFIG } from './config/credentials.js';
import cors from 'cors';


const app = express();

app.use(cors({
  origin: `http://${CONFIG.host}:${CONFIG.front_port}`,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

app.use('/api', initRoutes());


export const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(CONFIG.port, () => {
  console.log(`Servidor corriendo en http://${CONFIG.host}:${CONFIG.port}`);
});


