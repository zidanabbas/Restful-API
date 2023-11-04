# Project API Spec

## Create Project API

Endpoint : POST /api/projects

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "myProjects",
  "detail": "ini adalah project portofolio pribadi sayya",
  "createdAt": "2022-10-2",
  "image": "image.png",
  "link": "https://zidanabbas.vercel.app/"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "title": "myProjects",
    "detail": "ini adalah project portofolio pribadi saya",
    "createdAt": "2022-10-2",
    "image": "image.png",
    "link": "zidanabbas.vercel.app"
  }
}
```

Response Body Error :

## Update Project API

Endpoint : PATCH /api/projects

Headers :

- Authorization : token

Request Body :

Response Body Success :

Response Body Error :

## Get Project API

Endpoint : GET /api/projects

Headers :

- Authorization : token

Request Body :

Response Body Success :

Response Body Error :

## Search Project API

Endpoint : POST /api/projects

Headers :

- Authorization : token

Request Body :

Response Body Success :

Response Body Error :

## Remove Project API

Endpoint : POST /api/projects

Headers :

- Authorization : token

Request Body :

Response Body Success :

Response Body Error :
