import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routers
app.get('/', (req, res) =>
	res.json({
		message: 'server is online',
		documentation:
			'https://github.com/Fredvel123/store_app/tree/master/server#readme',
	})
);

// router -- users
import userRouters from './code/users/routers/users.routers.js';
app.use('/api/users', userRouters);
// router -- auth
import authRouters from './code/users/routers/auth.routers.js';
app.use('/api/auth', authRouters);

export default app;
