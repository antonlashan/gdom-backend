CREATE DATABASE gdom;
CREATE USER gdom WITH ENCRYPTED PASSWORD '123456';
Give right permissions

get a copy of .env.sample and rename to .env

npm run migrate
npm run seed
