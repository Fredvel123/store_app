import { configureStore } from '@reduxjs/toolkit';
import theme from './slices/theme';
import auth from './slices/auth';

export const store = configureStore({
	reducer: {
		theme,
		auth,
	},
});
