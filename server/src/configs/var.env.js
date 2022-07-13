// variables enviamoment
import dotenv from 'dotenv';
dotenv.config();

export const DATABASE = process.env.DB_NAME;
export const USERNAME = process.env.DB_USERNAME;
export const PASSWORd = process.env.DB_PSSWD;
export const HOST = process.env.DB_HOST;

export const ADMIN1 = process.env.ADMIN1_EMAIL;

export const JWT_KEY = process.env.JWT_SECRET_KEY;
