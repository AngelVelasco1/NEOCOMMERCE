import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
    "host": process.env.HOST,
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "db": process.env.DB,
    "key": process.env.JWT_SECRET
};