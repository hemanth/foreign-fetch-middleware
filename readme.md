# foreign-fetch-middleware 

> Foreign Fetch Service Worker Middleware for Express.


## Install

```
$ npm install --save foreign-fetch-middleware
```


## Usage

```js
const foreignFetchMiddleware = require('foreign-fetch-middleware');

app.use(foreignFetchMiddleware('./foreign-fetch.sw'));

// ^ app is your express app.

```


## API

### foreignFetchMiddleware(input)

#### input

Type: `string`

Path to your `foregin-fetch.sw`


## TODO

* Some `e2e` testing.

* `'Origin-Trial'` header?


## License

MIT © [Hemanth.HM](https://h3manth.com)
