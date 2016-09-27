# foreign-fetch-middleware 

> Foegin fetch express middleware.


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


## License

MIT © [Hemanth.HM](https://h3manth.com)
