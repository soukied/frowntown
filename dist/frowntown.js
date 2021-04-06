// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"MPwZ":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allTypeOf = exports.allInstanceOf = exports.allUndefined = void 0;

function allUndefined() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  var value = true;

  for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
    var i = values_1[_a];
    if (typeof i != "undefined") value = false;
    break;
  }

  return value;
}

exports.allUndefined = allUndefined;

function allInstanceOf(objectinstance) {
  var values = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }

  var out = true;

  for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
    var i = values_2[_a];
    if (!(i instanceof objectinstance)) out = false;
    break;
  }

  return out;
}

exports.allInstanceOf = allInstanceOf;

function allTypeOf(type) {
  var values = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }

  var out = true;

  for (var _a = 0, values_3 = values; _a < values_3.length; _a++) {
    var i = values_3[_a];
    if (_typeof(i) != type) out = false;
    break;
  }

  return out;
}

exports.allTypeOf = allTypeOf;
},{}],"mjRS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var paramchecker_1 = require("./paramchecker");

var Camera =
/** @class */
function () {
  function Camera(width, height) {
    this.x = 0;
    this.y = 0;
    this.setPos(0, 0);
    this.setSize(width, height);
  }

  Camera.prototype.reset = function () {
    this.setPos(0, 0);
  };

  Camera.prototype.setX = function (x) {
    this.x = x;
  };

  Camera.prototype.setY = function (y) {
    this.y = y;
  };

  Camera.prototype.setPos = function (x, y) {
    this.setX(x);
    this.setY(y);
  };

  Camera.prototype.getX = function () {
    return this.x;
  };

  Camera.prototype.getY = function () {
    return this.y;
  };

  Camera.prototype.getPos = function () {
    return [this.x, this.y];
  };

  Camera.prototype.getFixedX = function (x) {
    if (typeof x == "number") return -this.x + x;else return -this.x;
  };

  Camera.prototype.getFixedY = function (y) {
    if (typeof y == "number") return -this.y + y;else return -this.y;
  };

  Camera.prototype.getFixedPos = function () {
    var pos = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      pos[_i] = arguments[_i];
    }

    if (paramchecker_1.allTypeOf("number", pos[0], pos[1])) {
      return [-this.x + pos[0], -this.y + pos[1]];
    } else return [-this.x, -this.y];
  };

  Camera.prototype.moveX = function (velX) {
    this.x -= velX;
  };

  Camera.prototype.moveY = function (velY) {
    this.y -= velY;
  };

  Camera.prototype.move = function (velX, velY) {
    this.moveX(velX);
    this.moveY(velY);
  };

  Camera.prototype.setWidth = function (width) {
    this.width = width;
  };

  Camera.prototype.setHeight = function (height) {
    this.height = height;
  };

  Camera.prototype.setSize = function (width, height) {
    this.setWidth(width);
    this.setHeight(height);
  };

  Camera.prototype.getWidth = function () {
    return this.width;
  };

  Camera.prototype.getHeight = function () {
    return this.height;
  };

  Camera.prototype.getSize = function () {
    return [this.width, this.height];
  };

  return Camera;
}();

exports.default = Camera;
},{"./paramchecker":"MPwZ"}],"mKpP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameKeyEvent =
/** @class */
function () {
  function GameKeyEvent(element) {
    var _this = this;

    this.element = element;
    this.keyDownValue = {};
    this.preventDefaultKeys = {};
    addEventListener("keydown", function (event) {
      _this.keyDownValue[event.key] = true;

      if (_this.preventDefaultKeys[event.key]) {
        event.preventDefault();
      }
    });
    addEventListener("keyup", function (event) {
      _this.keyDownValue[event.key] = false;
    });
  }

  GameKeyEvent.prototype.keyDownPreventDefault = function () {
    var keys = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      keys[_i] = arguments[_i];
    }

    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
      var key = keys_1[_a];
      this.preventDefaultKeys[key] = true;
    }
  };

  GameKeyEvent.prototype.isDown = function (key) {
    return this.keyDownValue[key] ? true : false;
  };

  return GameKeyEvent;
}();

exports.default = GameKeyEvent;
},{}],"tH3k":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameMouseEvent =
/** @class */
function () {
  function GameMouseEvent(element) {
    var _this = this;

    this.x = 0;
    this.y = 0;
    this.leftDown = false;
    this.leftUp = true;
    this.rightDown = true;
    this.rightUp = false;
    addEventListener("mousemove", function (ev) {
      _this.x = ev.clientX - element.getBoundingClientRect().left;
      _this.y = ev.clientY - element.getBoundingClientRect().top;
    });
    element.addEventListener("mouseup", function (ev) {
      if (ev.buttons == 1) {
        _this.leftDown = false;
        _this.leftUp = true;
      } else if (ev.buttons == 2) {
        _this.rightDown = false;
        _this.rightUp = true;
      }
    });
    element.addEventListener("mousedown", function (ev) {
      if (ev.buttons == 1) {
        _this.leftDown = true;
        _this.leftUp = false;
      } else if (ev.buttons == 2) {
        _this.rightDown = true;
        _this.rightUp = false;
      }
    });
  }

  GameMouseEvent.prototype.isLeftButtonUp = function () {
    return this.leftUp;
  };

  GameMouseEvent.prototype.isLeftButtonDown = function () {
    return this.leftDown;
  };

  GameMouseEvent.prototype.isRightButtonUp = function () {
    return this.rightUp;
  };

  GameMouseEvent.prototype.isrightButtonDown = function () {
    return this.rightDown;
  };

  GameMouseEvent.prototype.getX = function () {
    return this.x;
  };

  GameMouseEvent.prototype.getY = function () {
    return this.y;
  };

  GameMouseEvent.prototype.getPos = function () {
    return [this.x, this.y];
  };

  return GameMouseEvent;
}();

exports.default = GameMouseEvent;
},{}],"ZECt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Graphics =
/** @class */
function () {
  function Graphics(graphicsContext) {
    this.graphics = graphicsContext;
  }

  Graphics.prototype.drawLine = function (color, width, x1, y1, x2, y2) {
    this.graphics.strokeStyle = color;
    this.graphics.lineWidth = width;
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.stroke();
  };

  Graphics.prototype.fillRect = function (color, x, y, width, height) {
    this.graphics.fillStyle = color;
    this.graphics.fillRect(x, y, width, height);
  };

  Graphics.prototype.getContext = function () {
    return this.graphics;
  };

  Graphics.prototype.drawImage = function (imageData) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (imageData.getImage() === undefined) return;
    if (args.length == 2) this.graphics.drawImage(imageData.getImage(), args[0], args[1]);else if (args.length == 4) this.graphics.drawImage(imageData.getImage(), args[0], args[1], args[2], args[3]);
  };

  return Graphics;
}();

exports.default = Graphics;

var Text =
/** @class */
function () {
  function Text(text, fontSize) {}

  return Text;
}();
},{}],"yvdU":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var FrowntownError =
/** @class */
function (_super) {
  __extends(FrowntownError, _super);

  function FrowntownError(message) {
    var _this = _super.call(this, message) || this;

    _this.name = "FrowntownError";
    return _this;
  }

  return FrowntownError;
}(Error);

exports.default = FrowntownError;
},{}],"SXTv":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_IMAGE_LOADED = exports.loadImage = void 0;

var error_1 = __importDefault(require("../error"));

var IMAGE_COUNT = 0;
var IMAGE_LOADED = 0;

function loadImage(src) {
  return __awaiter(this, void 0, void 0, function () {
    var imageElement;
    return __generator(this, function (_a) {
      imageElement = document.createElement("img");
      return [2
      /*return*/
      , new Promise(function (resolve) {
        imageElement.onload = function () {
          return resolve(imageElement);
        };

        imageElement.src = src;
        return imageElement;
      }).catch(function (err) {
        throw new error_1.default("Can't load '" + src + "'");
      })];
    });
  });
}

exports.loadImage = loadImage;

var Image =
/** @class */
function () {
  // private static IMAGE_COUNT = 0;
  // private static IMAGE_LOADED = 0;
  function Image(imageData) {
    var _this = this;

    this.imagePath = null;
    IMAGE_COUNT++;

    if (typeof imageData == "string") {
      this.imagePath = imageData;
      loadImage(imageData).then(function (value) {
        _this.imageElement = value;
        IMAGE_LOADED++;
      });
    } else if (imageData instanceof HTMLCanvasElement) {
      this.imageElement = imageData;
      this.width = this.imageElement.width;
      this.height = this.imageElement.height;
      IMAGE_LOADED++;
    }
  }

  Image.prototype.getImagePath = function () {
    return typeof this.imagePath == "string" ? this.imagePath : undefined;
  };

  Image.prototype.cropImage = function (sx, sy, sw, sh) {
    var virtualCanvas = document.createElement("canvas");
    var context;
    virtualCanvas.width = this.width;
    virtualCanvas.height = this.height;
    context = virtualCanvas.getContext("2d");
    context.drawImage(this.imageElement, sx, sy, sw, sh, 0, 0, this.width, this.height);
    return new Image(virtualCanvas);
  };

  Image.prototype.getImage = function () {
    return this.imageElement;
  };

  return Image;
}();

exports.default = Image;

function ALL_IMAGE_LOADED() {
  return IMAGE_COUNT === IMAGE_LOADED;
}

exports.ALL_IMAGE_LOADED = ALL_IMAGE_LOADED;
},{"../error":"yvdU"}],"kh5L":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScene = exports.globalData = void 0;
exports.globalData = {};

var Scene =
/** @class */
function () {
  function Scene() {
    this.isInitialized = false;
  }

  Scene.prototype.init = function () {};

  Scene.prototype.update = function () {};

  Scene.prototype.render = function (graphics) {};

  return Scene;
}();

exports.default = Scene;

function createScene(scene) {
  var obj = scene;
  obj.isInitialized = false;
  obj.global = exports.globalData;
  return scene;
}

exports.createScene = createScene;
},{}],"MYCW":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_IMAGE_LOADED = exports.Image = exports.createScene = exports.Init = void 0;

var camera_1 = __importDefault(require("./util/camera"));

var key_1 = __importDefault(require("./events/key"));

var mouse_1 = __importDefault(require("./events/mouse"));

var graphics_1 = __importDefault(require("./util/graphics"));

var image_1 = __importStar(require("./util/image"));

Object.defineProperty(exports, "ALL_IMAGE_LOADED", {
  enumerable: true,
  get: function get() {
    return image_1.ALL_IMAGE_LOADED;
  }
});

var scene_1 = __importStar(require("./scene"));

Object.defineProperty(exports, "createScene", {
  enumerable: true,
  get: function get() {
    return scene_1.createScene;
  }
});

var Game =
/** @class */
function () {
  function Game(width, height, parent) {
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = this.WIDTH = width;
    this.canvasElement.height = this.HEIGHT = height;
    this.parentElement = parent;
    this.parentElement.appendChild(this.canvasElement);
    this.IS_RUNNING = false;
    this.currentScene = new scene_1.default();
    this.graphics = this.canvasElement.getContext("2d");
    this.graphics.imageSmoothingEnabled = false;
    this.keyEvent = new key_1.default(this.canvasElement);
    this.mouseEvent = new mouse_1.default(this.canvasElement);
    this.camera = new camera_1.default(this.WIDTH, this.HEIGHT);
  }

  Game.prototype.setScale = function (x, y) {
    this.graphics.scale(x, y);
  };

  Game.prototype.setScene = function (newScene) {
    this.currentScene = newScene;
  };

  Game.prototype.run = function () {
    if (!this.currentScene.isInitialized) {
      if (this.currentScene.init instanceof Function) this.currentScene.init();
      this.currentScene.isInitialized = true;
    } // set camera


    if (this.currentScene.update instanceof Function) this.currentScene.update();
    this.graphics.clearRect(0, 0, this.WIDTH, this.HEIGHT);

    if (this.currentScene.render instanceof Function) {
      this.graphics.translate(this.camera.getX(), this.camera.getY());
      this.currentScene.render(new graphics_1.default(this.graphics));
      this.graphics.translate(-this.camera.getX(), -this.camera.getY());
    }
  };

  Game.prototype.start = function () {
    var _this = this;

    if (this.IS_RUNNING) return;
    this.IS_RUNNING = true;

    var callback = function callback() {
      _this.run();

      if (_this.IS_RUNNING) requestAnimationFrame(callback);
    };

    requestAnimationFrame(callback);
  };

  Game.prototype.stop = function () {
    if (!this.IS_RUNNING) return;
    this.IS_RUNNING = false;
  };

  Game.prototype.canvasStyle = function (styles) {
    for (var key in styles) {
      this.canvasElement.style[key] = styles[key];
    }
  };

  Game.prototype.toggleFullscreen = function () {
    if (!document.fullscreenElement) {
      this.canvasElement.requestFullscreen().catch(function (err) {
        alert("Error attempting to enable full-screen mode: " + err.message + " (" + err.name + ")");
      });
    } else {
      document.exitFullscreen();
    }
  };

  return Game;
}();

function Init(width, height, parent) {
  return new Game(width, height, parent);
}

exports.Init = Init;

function loadImage(src) {
  return new image_1.default(src);
}

exports.Image = loadImage;
},{"./util/camera":"mjRS","./events/key":"mKpP","./events/mouse":"tH3k","./util/graphics":"ZECt","./util/image":"SXTv","./scene":"kh5L"}]},{},["MYCW"], "Frowntown")