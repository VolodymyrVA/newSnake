/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.can = document.getElementById('canvas');
        this.ctx = this.can.getContext("2d");
        this.w = this.can.width;
        this.h = this.can.height;
    }

    _createClass(Canvas, [{
        key: "fillStyle",
        value: function fillStyle(color) {
            return this.ctx.fillStyle = color;
        }
    }, {
        key: "fillRect",
        value: function fillRect(x, y, width, height) {
            return this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: "strokeStyle",
        value: function strokeStyle(color) {
            return this.ctx.strokeStyle = color;
        }
    }, {
        key: "strokeRect",
        value: function strokeRect(x, y, width, height) {
            return this.ctx.strokeRect(x, y, width, height);
        }
    }, {
        key: "font",
        value: function font(_font) {
            return this.ctx.font = _font;
        }
    }, {
        key: "fillText",
        value: function fillText(text, x, y) {
            return this.ctx.fillText(text, x, y);
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Snake = __webpack_require__(3);

var _Snake2 = _interopRequireDefault(_Snake);

var _Canvas = __webpack_require__(0);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Paint = __webpack_require__(2);

var _Paint2 = _interopRequireDefault(_Paint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var snake = new _Snake2.default();
var paint = new _Paint2.default();
var canvas = new _Canvas2.default();

var w = canvas.w;
var h = canvas.h;
var snakeSize = snake.snakeSize;
var direction = void 0;
var score = void 0;
var tail = void 0;
var game = void 0;

function init() {
    direction = 'right';
    snake.createSnake();
    snake.createFood();
    score = 0;
    if (typeof game !== "undefined") {
        clearInterval(game);
    }
    game = setInterval(paintContent, 60);
}
init();

function paintContent() {
    paint.paint(0, 0, w, h, "orange", "black");

    var cX = snake.snakeBody[0].x;
    var cY = snake.snakeBody[0].y;

    if (direction == 'top') {
        cY--;
    } else if (direction == 'down') {
        cY++;
    } else if (direction == 'right') {
        cX++;
    } else if (direction == 'left') {
        cX--;
    }

    if (cX == -1 || cX == w / snakeSize || cY == -1 || cY == w / snakeSize || snake.snakeCrush(cX, cY, snake.snakeBody)) {
        init();
        return;
    }

    if (snake.food.x == cX && snake.food.y == cY) {
        tail = { x: snake.food.x, y: snake.food.y };
        score++;
        snake.createFood();
    } else {
        tail = snake.snakeBody.pop();
        tail.x = cX;
        tail.y = cY;
    }

    snake.snakeBody.unshift(tail);

    paint.paintSnake(snake.snakeBody, snakeSize, snake.snakeColor.body, snake.snakeColor.border);
    paint.paintCell(snake.food.x, snake.food.y, snakeSize, snake.snakeFoodColor.body, snake.snakeFoodColor.border);
    paint.paintScore(score, "Impact");
}

document.addEventListener('keydown', function (e) {
    var key = e.which;
    if (key == '38' && direction != 'down') {
        direction = 'top';
    } else if (key == '40' && direction != 'top') {
        direction = 'down';
    } else if (key == '39' && direction != 'left') {
        direction = 'right';
    } else if (key == '37' && direction != 'right') {
        direction = 'left';
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2 = __webpack_require__(0);

var _Canvas3 = _interopRequireDefault(_Canvas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paint = function (_Canvas) {
    _inherits(Paint, _Canvas);

    function Paint() {
        _classCallCheck(this, Paint);

        return _possibleConstructorReturn(this, (Paint.__proto__ || Object.getPrototypeOf(Paint)).call(this));
    }

    _createClass(Paint, [{
        key: "paint",
        value: function paint(x, y, w, h, fillStColor, strokeStColor) {
            this.fillStyle(fillStColor);
            this.fillRect(x, y, w, h);
            this.strokeStyle(strokeStColor);
            this.strokeRect(x, y, w, h);
        }
    }, {
        key: "paintCell",
        value: function paintCell(x, y, size, fillStColor, strokeStColor) {
            this.fillStyle(fillStColor);
            this.fillRect(x * size, y * size, size, size);
            this.strokeStyle(strokeStColor);
            this.strokeRect(x * size, y * size, size, size);
        }
    }, {
        key: "paintScore",
        value: function paintScore(score, font) {
            this.font(font);
            this.fillText("Score : " + score, 10, 390);
        }
    }, {
        key: "paintSnake",
        value: function paintSnake(arr, size, fillStColor, strokeStColor) {
            for (var i = arr.length; i--;) {
                var c = arr[i];
                this.paintCell(c.x, c.y, size, fillStColor, strokeStColor);
            }
        }
    }]);

    return Paint;
}(_Canvas3.default);

exports.default = Paint;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas2 = __webpack_require__(0);

var _Canvas3 = _interopRequireDefault(_Canvas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snake = function (_Canvas) {
    _inherits(Snake, _Canvas);

    function Snake() {
        _classCallCheck(this, Snake);

        var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this));

        _this.snakeNumberSection = 5;
        _this.snakeSize = 10;
        _this.snakeColor = { body: "blue", border: "white" };
        _this.snakeFoodColor = { body: "green", border: "white" };
        _this.snakeBody;
        _this.food;

        return _this;
    }

    _createClass(Snake, [{
        key: "createSnake",
        value: function createSnake() {
            this.snakeBody = [];
            for (var i = this.snakeNumberSection; i--;) {
                this.snakeBody.push({ x: i, y: 0 });
            }
            return this.snakeBody;
        }
    }, {
        key: "createFood",
        value: function createFood() {
            this.food = {
                x: Math.round(Math.random() * (this.w - this.snakeSize) / this.snakeSize),
                y: Math.round(Math.random() * (this.h - this.snakeSize) / this.snakeSize)
            };
        }
    }, {
        key: "snakeCrush",
        value: function snakeCrush(x, y, array) {
            for (var i = array.length; i--;) {
                if (x == array[i].x && y == array[i].y) {
                    return true;
                }
            }
            return false;
        }
    }]);

    return Snake;
}(_Canvas3.default);

exports.default = Snake;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map