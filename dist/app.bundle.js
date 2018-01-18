/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canvas = document.getElementById('cnvs');
var context = canvas.getContext('2d');
exports.default = context;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(0);
var Particle = /** @class */ (function () {
    function Particle(x, y, velocityX, velocityY, color, lineWidth, size, rotation, rotationSpeed, pointList) {
        if (x === void 0) { x = Math.round(Math.random() * 1280); }
        if (y === void 0) { y = Math.round(Math.random() * 720); }
        if (velocityX === void 0) { velocityX = Math.round(Math.random() * 4 - 2); }
        if (velocityY === void 0) { velocityY = Math.round(Math.random() * 4 - 2); }
        if (color === void 0) { color = 'white'; }
        if (lineWidth === void 0) { lineWidth = 1; }
        if (size === void 0) { size = Math.ceil(Math.random() * 10) + 4; }
        if (rotation === void 0) { rotation = 0; }
        if (rotationSpeed === void 0) { rotationSpeed = Math.random() * 0.06 - 0.03; }
        if (pointList === void 0) { pointList = new Array(); }
        var _this = this;
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.color = color;
        this.lineWidth = lineWidth;
        this.size = size;
        this.rotation = rotation;
        this.rotationSpeed = rotationSpeed;
        this.pointList = pointList;
        this.render = function () {
            var ctx = context_1.default;
            _this.x += _this.velocityX;
            _this.y += _this.velocityY;
            var outsideTopLeft = -_this.size * 4; // multiple size to be fully outside
            var outsideRight = 1280 + _this.size * 4;
            var outsideBottom = 720 + _this.size * 4;
            _this.x = (_this.x < outsideTopLeft) ? (outsideRight) : _this.x;
            _this.x = (_this.x > outsideRight) ? (outsideTopLeft) : _this.x;
            _this.y = (_this.y < outsideTopLeft) ? (outsideBottom) : _this.y;
            _this.y = (_this.y > outsideBottom) ? (outsideTopLeft) : _this.y;
            _this.rotation += _this.rotationSpeed;
            ctx.save();
            ctx.translate(_this.x, _this.y);
            ctx.rotate(_this.rotation);
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.moveTo(_this.pointList[_this.pointList.length - 1].x, _this.pointList[_this.pointList.length - 1].y);
            _this.pointList.forEach(function (point) { return ctx.lineTo(point.x, point.y); });
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
    }
    return Particle;
}());
exports.default = Particle;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.default = Point;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var particle_class_1 = __webpack_require__(1);
var point_class_1 = __webpack_require__(2);
var Asteroid = /** @class */ (function (_super) {
    __extends(Asteroid, _super);
    function Asteroid() {
        var _this = _super.call(this) || this;
        var xrand = function () { return Math.round(Math.random() * _this.size - _this.size / 2); };
        var yrand = function () { return Math.round(Math.random() * _this.size - _this.size / 2); };
        var coordinates = [
            new point_class_1.default(xrand(), yrand() + 3 * _this.size),
            new point_class_1.default(xrand() - 1 * _this.size, yrand() + 2 * _this.size),
            new point_class_1.default(xrand() - 2 * _this.size, yrand() + 2 * _this.size),
            new point_class_1.default(xrand() - 3 * _this.size, yrand() + _this.size),
            new point_class_1.default(xrand() - 4 * _this.size, yrand()),
            new point_class_1.default(xrand() - 1 * _this.size, yrand() - 3 * _this.size),
            new point_class_1.default(xrand() + 2 * _this.size, yrand() - 4 * _this.size),
            new point_class_1.default(xrand() + 2 * _this.size, yrand() - 3 * _this.size),
            new point_class_1.default(xrand() + 4 * _this.size, yrand() - 2 * _this.size),
            new point_class_1.default(xrand() + 4 * _this.size, yrand() + _this.size),
            new point_class_1.default(xrand() + 3 * _this.size, yrand() + 2 * _this.size),
        ];
        coordinates.forEach(function (point, i) {
            _this.pointList.push(point);
        });
        return _this;
    }
    return Asteroid;
}(particle_class_1.default));
exports.default = Asteroid;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(0);
var Circle = /** @class */ (function () {
    function Circle(x, y, radius, color, lineWidth, velocityX) {
        if (x === void 0) { x = 50; }
        if (y === void 0) { y = 50; }
        if (radius === void 0) { radius = 100; }
        if (color === void 0) { color = 'red'; }
        if (lineWidth === void 0) { lineWidth = 5; }
        if (velocityX === void 0) { velocityX = Math.round(Math.random() + 1); }
        var _this = this;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
        this.velocityX = velocityX;
        this.render = function () {
            var ctx = context_1.default;
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x + _this.lineWidth / 2, _this.y + _this.lineWidth / 2, _this.radius, 0, Math.PI * 2);
            ctx.fillStyle = _this.color;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            _this.x += _this.velocityX;
            _this.x = (_this.x >= (1280 + _this.radius)) ? -_this.radius : _this.x;
        };
    }
    return Circle;
}());
exports.default = Circle;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var particle_class_1 = __webpack_require__(1);
var point_class_1 = __webpack_require__(2);
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var Poligon = /** @class */ (function (_super) {
    __extends(Poligon, _super);
    function Poligon() {
        var _this = _super.call(this) || this;
        var xrand = function () { return Math.round(Math.random() * _this.size); };
        var yrand = function () { return Math.round(Math.random() * _this.size); };
        while (_this.pointList.length < 10) {
            _this.pointList.push(new point_class_1.default(getRandomInt(1, 2) * _this.size, getRandomInt(1, 2) * _this.size));
        }
        return _this;
    }
    return Poligon;
}(particle_class_1.default));
exports.default = Poligon;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(0);
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height, color, lineWidth) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 300; }
        if (height === void 0) { height = 200; }
        if (color === void 0) { color = 'yellow'; }
        if (lineWidth === void 0) { lineWidth = 5; }
        var _this = this;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = lineWidth;
        this.render = function () {
            var ctx = context_1.default;
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.rect(_this.x + _this.lineWidth / 2, _this.y + _this.lineWidth / 2, _this.width, _this.height);
            ctx.stroke();
            ctx.restore();
        };
    }
    return Rectangle;
}());
exports.default = Rectangle;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var asteroid_class_1 = __webpack_require__(3);
var circle_class_1 = __webpack_require__(4);
var poligon_class_1 = __webpack_require__(5);
var rectangle_class_1 = __webpack_require__(6);
var context_1 = __webpack_require__(0);
// instances
var c1 = new circle_class_1.default(1000, 350, 50);
var c2 = new circle_class_1.default(0, 350, 150, 'blue', 5);
var c3 = new circle_class_1.default(500, 350, 100, 'pink', 5);
var r1 = new rectangle_class_1.default(50, 50, 1180, 620, 'yellow', 10);
var shapeArray = new Array();
var gameLoop = function () {
    requestAnimationFrame(gameLoop);
    var ctx = context_1.default;
    // clear the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1280, 720);
    // render all
    shapeArray.forEach(function (shape) { return shape.render(); });
};
window.onload = function () {
    var numOfAsteroids = 5;
    while (numOfAsteroids > 0) {
        shapeArray.push(new asteroid_class_1.default());
        numOfAsteroids -= 1;
    }
    var numOfPoligons = 15;
    while (numOfPoligons > 0) {
        shapeArray.push(new poligon_class_1.default());
        numOfPoligons -= 1;
    }
    shapeArray.push(c2);
    shapeArray.push(c1);
    shapeArray.push(c3);
    shapeArray.push(r1);
    // loop
    gameLoop();
};


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map