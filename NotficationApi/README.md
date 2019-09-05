
* Install `express` , `body-parser` and `mongoose` package   
Command: ```npm i -s express body-parser mongoose ```
* Add a new file named `app.js` that will contain all the code


# TEST THE NODE SERVER WITH `curl`

## POST request
```
curl -v -X POST -H "Content-type: application/json" -d  "{\"name\": \"milk\",\"color\":7C3333}" localhost:3000/api/products
```

```
* Connected to localhost (::1) port 3000 (#0)
> POST /api/products HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 27
>
* upload completely sent off: 27 out of 27 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 59
< ETag: W/"3b-opV/1RMdy2ko4dyKG5Dk8yTYIAY"
< Date: Thu, 05 Sep 2019 14:40:50 GMT
< Connection: keep-alive
<
{"_id":"5bc4ce833952a622ec051ab2","name":"Rod","color":#FF0000}* Connection #0 to host localhost left intact
```
## GET request
```
curl -v -X GET localhost:3000/api/products
```

```
> GET /api/products HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 306
< ETag: W/"132-JrSClhUrb62y3PAYmL6dqvjJcXc"
< Date: Thu, 05 Sep 2019 14:43:54 GMT
< Connection: keep-alive
<
[{"_id":"5d710690e8c0084c688c0536","name":"asdssss","color":"#0000a0","__v":0},{"_id":"5d7109bae8c0084c688c0537","name":"rtgdfg","color":"#800000","__v":0},{"_id":"5d7109c1e8c0084c688c0538","name":"dffe","color":"#80ff80","__v":0},{"_id":"5d711e72f7298f1ddcd2d297","name":"milk","color":"#7C3333","__v":0}]

```

## PUT request
```
curl -v -X PUT -H "Content-type: application/json" -d  "{\"name\": \"water\",\"color\":FFFFFF}" localhost:3000/api/products?id=5bc4ce833952a622ec051ab2
```
```
> PUT /api/products?id=5bc4ce833952a622ec051ab2 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 28
>
* upload completely sent off: 28 out of 28 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 68
< ETag: W/"44-GxiMz0s89gBv00bDDgnfyBIdYvk"
< Date: Thu, 05 Sep 2019 14:45:51 GMT
< Connection: keep-alive
<
{"_id":"5bc4ce833952a622ec051ab2","name":"water","color":FFFFFF,"__v":0}* Connection #0 to host localhost left intact
```
## DELETE request
```
curl -v -X DELETE localhost:3000/api/products?id=5bc4ce833952a622ec051ab2
```
```
> DELETE /api/products?id=5bc4ce833952a622ec051ab2 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Thu, 05 Sep 2019 14:47:34 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
```
