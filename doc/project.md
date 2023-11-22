# Project API Spec

## Create Project API

Endpoint : POST /api/projects

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "myProjects",
  "detail": "ini adalah project portofolio pribadi saya",
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
    "link": "https://zidanabbas.vercel.app/"
  }
}
```

Response Body Error :

## Update Project API

Endpoint : PATCH /api/projects

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "new myProjects",
  "detail": "new ini adalah project portofolio pribadi saya",
  "createdAt": "2022-10-2",
  "image": "new Image.png",
  "link": "https://zidanabbas.vercel.app/"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "title": "new myProjects",
    "detail": "new ini adalah project portofolio pribadi saya",
    "createdAt": "2022-10-2",
    "image": "new Image.png",
    "link": "https://zidanabbas.vercel.app/"
  }
}
```

Response Body Error :

```json
{
  "errors": "Update projects error"
}
```

## Get Project API

Endpoint : GET /api/projects

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "my Projects",
  "detail": "ini adalah portofolio pribadi saya",
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
    "title": "my Projects",
    "detail": "ini adalah portofolio pribadi saya",
    "createdAt": "2022-10-2",
    "image": "image.png",
    "link": "https://zidanabbas.vercel.app/"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

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

```json
{
  "data"
}
```

Response Body Error :

```

```
