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
})({"mKpP":[function(require,module,exports) {
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
    this.keyDownValue = new Map();
    addEventListener("keydown", function (event) {
      _this.keyDownValue.set(event.key, true);

      console.log("Key pressed is: " + event.key);
    });
    addEventListener("keyup", function (event) {
      _this.keyDownValue.set(event.key, false);
    });
  }

  GameKeyEvent.prototype.isDown = function (key) {
    return this.keyDownValue.get(key) ? true : false;
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
},{}],"U5jo":[function(require,module,exports) {
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

  return Graphics;
}();

exports.default = Graphics;
},{}],"gmPD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Image =
/** @class */
function () {
  function Image(imageData) {
    var _this = this;

    this.imagePath = null;
    Image.IMAGE_COUNT += 1;

    if (typeof imageData == "string") {
      this.imagePath = imageData;
      this.imageElement = loadImage(this.imagePath, function (el) {
        _this.width = el.width;
        _this.height = el.height;
        Image.IMAGE_COUNT++;
      });
    } else if (imageData instanceof HTMLCanvasElement) {
      this.imageElement = imageData;
      this.width = this.imageElement.width;
      this.height = this.imageElement.height;
    }
  }

  Image.prototype.cropImage = function (dx, dy, dw, dh) {
    var virtualCanvas = document.createElement("canvas");
    var context;
    virtualCanvas.width = this.width;
    virtualCanvas.height = this.height;
    context = virtualCanvas.getContext("2d");
    context.drawImage(this.imageElement, dx, dy, dw, dh);
    return new Image(virtualCanvas);
  };

  Image.allImageLoaded = function () {
    return this.IMAGE_COUNT == this.IMAGE_LOADED;
  };

  Image.prototype.getImage = function () {
    return Image.allImageLoaded() ? this.imageElement : undefined;
  };

  Image.prototype.drawImage = function (g) {};

  Image.IMAGE_COUNT = 0;
  Image.IMAGE_LOADED = 0;
  Image.ALL_LOADED = false;
  return Image;
}();

exports.default = Image;

function loadImage(src, onload) {
  var _this = this;

  var imageElement = document.createElement("image");

  imageElement.onerror = function () {
    throw "Frowntown Error: File '" + _this.imagePath + "' can't be loaded.";
  };

  imageElement.onload = function () {
    return onload(imageElement);
  };

  this.imageElement.src = src;
  return imageElement;
}
},{}],"kh5L":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScene = void 0;

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
exports.Image = exports.createScene = exports.Init = void 0;

var key_1 = __importDefault(require("./events/key"));

var mouse_1 = __importDefault(require("./events/mouse"));

var graphics_1 = __importDefault(require("./graphics"));

var image_1 = __importDefault(require("./image"));

exports.Image = image_1.default;

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
    }

    if (this.currentScene.update instanceof Function) this.currentScene.update();
    this.graphics.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    if (this.currentScene.render instanceof Function) this.currentScene.render(new graphics_1.default(this.graphics));
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
},{"./events/key":"mKpP","./events/mouse":"tH3k","./graphics":"U5jo","./image":"gmPD","./scene":"kh5L"}]},{},["MYCW"], "Frowntown")