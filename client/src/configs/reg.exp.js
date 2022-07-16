export const regExp = {
	user: /^[a-zA-Z0-9_]{5,30}$/, // Letras, numeros, guion y guion_bajo
	link: /^(ftp|http|https):\/\/[^ "]+$/, // para validar links
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{5,25}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
};
