imagepool.js
============

It caches HTMLImageElements.

Usage
-----

```
var imgPool = new ImagePool();

imgPool
    .createCache('img/abc.png', 20)
    .createCache('img/def.png', 5)
    .createCache('img/dog.png', 20)
    .createCache('img/cat.png', 20);
```
