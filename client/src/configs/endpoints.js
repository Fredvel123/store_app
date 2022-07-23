const mainUrl = 'http://192.168.0.8:8000'; // you can add localhost if you're working on your computer

export const getAllProducts = mainUrl + '/api/products/all';
export const infoByUser = mainUrl + '/api/users/singleuser';
export const getAllUsers = mainUrl + '/api/users/all';
export const userRole = mainUrl + '/api/users/role';
export const createUser = mainUrl + '/api/auth/signup';
export const logInUser = mainUrl + '/api/auth/signin';
