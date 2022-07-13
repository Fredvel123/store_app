# SERVER Store app

## Database design

<img src="./src/assets/db_diagram.png" />

More details: <a href="./src/assets/store_app_diagram.pdf">PDF design</a>

# End Pints

## Get All Users

```js
const getAllUsers = async () => {
	const url = 'http://example.com/api/users/all';
	const request = await fetch(url); // method: GET
	const response = await request.json();
	return response;
};
```

## Create New User

```js
const createNewUser = async () => {
	const url = 'http://example.com/api/auth/signup';
	const request = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			email: 'user@email.com',
			password: 'userpassword',
			full_name: 'Jhon Doe',
		}),
	});
	const response = await request.json();
	return response;
};
```

## Register User

```js
const registerUser = async () => {
	const url = 'http://example.com/api/auth/signin';
	const request = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			email: 'user@email.com',
			password: 'userpassword',
		}),
	});
	const response = await request.json();
	return response;
};
```
