# ngCropperjs

AngularJS module for https://github.com/fengyuanchen/cropperjs.

Fork and drop-in replacement of https://github.com/koorgoo/ngCropper

### Install

```bash
npm install ng-cropperjs
```

### Usage

```html
<script src="node_modules/ng-cropperjs/dist/main.js"></script>
```

```javascript
var app = angular.module('app', ['ngCropper']);

app.controller('Main', function(Cropper) {
    ...
});
```

```html
<img src="image.jpg"
     ng-cropper
     ng-cropper-options="options"
     ng-cropper-show="'show.cropper'"
     ng-cropper-hide="'hide.cropper'">
```

