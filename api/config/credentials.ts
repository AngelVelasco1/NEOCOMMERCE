import dotenv from "dotenv"

dotenv.config();

export const CONFIG = {
    host: process.env.NEXT_PUBLIC_HOST,
    port: process.env.NEXT_PUBLIC_PORT,
    front_port: process.env.FRONT_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB,
    key: process.env.JWT_SECRET
};