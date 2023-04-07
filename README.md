
# Puzzle Game Backend

This project user login register and save score and step count to mongodb database using nodejs


## Installation 

Clone project

```bash
  git clone https://github.com/BerkanN1/Puzzle-Game-Linked-List-Backend.git
```
Download package

```bash
  npm install
```
Create .env file
  ```bash
  MONGODB_URI="your mongodb urı"
BASE_URL="http://localhost:8000"
Port=8000
Write this on your .env file
```

Start

```bash
  npm run start
```


## API Usage

#### Create User

```http
  POST http://localhost:8000/user/create-user
```

| Parametre | Type     |             
| :-------- | :------- |
| `userName` | `string` |
| `password` | `string` | 

#### Login

```http
  POST http://localhost:8000/user/login-user
```

| Parametre | Type     | 
| :-------- | :------- | 
| `userName` | `string` | 
| `password` | `string` |

#### Save Score to DB

```http
  POST http://localhost:8000/score/create-score
```

| Parametre | Type     | 
| :-------- | :------- | 
| `createdBy` | `string`| 
| `score` | `int` | 
|`adım` | `int` | 

#### Get high score 
```http
  GET http://localhost:8000/score/get-score/:createdBy
```


  
