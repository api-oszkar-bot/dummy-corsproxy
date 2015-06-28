dummy-corsproxy
==========

Fork of [simple-corsproxy](https://github.com/bmpvieira/simple-corsproxy)
Differencies:
 - Forward of original request status and headers
 - environment variable changed to PROXY_PORT

> Proxy to access resources that lack the Access-Control-Allow-Origin * header

Install
-------
```$ npm install dummy-corsproxy -g```

Usage
-----

```
$ dummy-corsproxy
=> Listening on port: 8080 # or environment variable PROXY_PORT
```

Add the url to the proxy path, like:

```
http://localhost:8080/https://google.com
```


License
-------
[MIT](https://raw.githubusercontent.com/korshunov/dummy-corsproxy/master/LICENSE)
