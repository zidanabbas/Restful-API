# Restful-API

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "abbas",
  "password": "secretpassword",
  "name": "Zidane Abbas"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "abbas",
    "name": "Zidane Abbas"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "abbas",
  "password": "secretpassword"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong!"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "new Zidane Abbas", //Optional
  "password": "new password" //Optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "abbas",
    "name": "new Zidane Abbas"
  }
}
```

Response Body Error :

```json
{
  "errors": "name length max 150"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

````json
{
  "data" : {
    "username" : "abbas",
    "name" : "Zidane Abbas",
  }
}

Response Body Error :
```json
{
  "errors" : "Unauthorized"
}
````

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
