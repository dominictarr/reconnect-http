# reconnect-http

Automatically reconnect a streaming http connection,
using request and reconnect-core


``` js
var reconnect = require('reconnect-http')

reconnect(function (request) {
  input.pipe(request).pipe(output)
}).connect({url: url, headers: {...}})
```

The arguments to `.connect` can any arguments that
[request](https://github.com/mikeal/request) can accept.

This module is just a wrapper around
[reconnect-core](https://github.com/juliangruber/reconnect-core)

Further documentation available at
[reconnect](https://github.com/dominict/reconnect)


## License

MIT
