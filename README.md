pulse.js
========

> Lightweight communication layer with phonegap


### Examples

```js
// Listen to event
Pulse.listen('mapKit.didSelectAnnotationView', function(res) {
     console.log('# mapKit.didSelectAnnotationView callback');
});
```


```js
// Emit event to iOS
Pulse.beat('MapKit.moveCenter', function(res) {
    console.log('# MapKit.moveCenter', res);
});
```
