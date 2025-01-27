import mysql from 'mysql2/promise';
import { CONFIG } from './credentials.js';

const { host, user, password, db } = CONFIG;

const conx = mysql.createPool({
  host: host,      
  user: user,           // Usuario de la base de datos
  password: password,    // Contraseña del usuario
  database: db,  // Nombre de la base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default conx;