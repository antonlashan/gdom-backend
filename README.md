# Getting Started Gdom Backend

## Setup

1. Clone backend

```
git clone https://github.com/antonlashan/gdom-backend.git
```

2. Install dependencies

```
cd gdom-backend
npm i
```

3. Create postgres database

```
Ex:
CREATE DATABASE gdom;
CREATE USER gdom WITH ENCRYPTED PASSWORD '123456';
```

Give right permissions to the database.

3. Make a copy of `.env.sample` file and rename to `.env`
   and change db configuration

4. DB migrations
   Create tables

```
npm run migrate
```

Insert dummy data

```
npm run seed
```

5. Start

```
npm run start
```

6. Check server wheather working by open this url http://localhost:8080/api
