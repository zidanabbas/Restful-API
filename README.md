# Restful-API

## Register User API

Endpoint : POST /api/users

Request Body : 
```json
{
  "username"  :  "abbas",
  "password"  :  "secretpassword",
  "name"      :  "Zidane Abbas"
}
```

Response Body Success : 
```json
{
  "data"  :  {
      "username"  : "abbas",
      "name"      : "Zidane Abbas",
    }
}
```
Response Body Error : 

```json
{
  "errors" : "Username already registered"
}
```

## Login User API

## Update User API

## Get User API

## Logout User API
