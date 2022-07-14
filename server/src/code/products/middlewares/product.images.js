import multer from 'multer';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
	destination: path.join(__dirname, '../images'),
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

export const upload = multer({ storage });
