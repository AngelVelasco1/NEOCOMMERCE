import dotenv from "dotenv"

dotenv.config();

export const CONFIG = {
    host: process.env.NEXT_PUBLIC_HOST,
    port: process.env.NEXT_PUBLIC_PORT,
    front_port: process.env.NEXT_PUBLIC_FRONT_PORT,
    key: process.env.JWT_SECRET
};