// variables enviamoment
import dotenv from 'dotenv';
dotenv.config();

export const DATABASE = process.env.DB_NAME;
export const USERNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.DB_PSSWD;
export const HOST = process.env.DB_HOST;

export const ADMIN1 = process.env.ADMIN1_EMAIL; // admin email

export const SERVER_PSSWD = process.env.SERVER_PSSWD; // server email
export const SERVER_EMAIL = process.env.SERVER_EMAIL; // server passowrd email

export const JWT_KEY = process.env.JWT_SECRET_KEY;

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const CLOUD_KEY = process.env.CLOUD_KEY;
export const CLOUD_SECRET_KEY = process.env.CLOUD_SECRET_KEY;
