imagepool.js
============

It caches HTMLImageElements.

Usage
-----

```
var imgPool = new ImagePool();

imgPool
    .createCache('img/abc.png', 1)
    .createCache('img/def.png', 2)
    .createCache('img/dog.png', 5)
    .createCache('img/cat.png', 6);

var dog = imgPool.get('img/dog.png'); // Image object, its src is 'img/dog.png'.

dog !== imgPool.get('img/dog.png');
dog !== imgPool.get('img/dog.png');
dog !== imgPool.get('img/dog.png');
dog !== imgPool.get('img/dog.png');

// there are only 5 dog caches in the pool,
// the 6th call with 'img/dog.png' returns same object as the 1st call
dog === imgPool('img/dog.png');
```
