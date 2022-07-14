CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(65),
  phone INT DEFAULT null,
  email TEXT,
  password TEXT,
  key_email VARCHAR(12),
  email_confirmed BOOLEAN DEFAULT false, 
  rool VARCHAR(10),
  gender BOOLEAN DEFAULT null,
  profession TEXT DEFAULT null
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  price INT,
  pic TEXT,
  pic_id TEXT,
  author INT,
  FOREIGN KEY (author) REFERENCES users(id) 
);

CREATE TABLE IF NOT EXISTS favorite_products (
    product_id INT,
    author INT,
    FOREIGN KEY (author) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);