define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Aurelia-Orm-Loopback';
      config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'modules/users/profile', nav: true, title: 'Profile' }, { route: 'customers', name: 'customers', moduleId: 'customers', nav: true, title: 'List Customers' }, { route: 'customer', name: 'customer', moduleId: 'modules/customer/index', nav: true, title: 'Manage Customers' }]);

      this.router = router;
    };

    return App;
  }();
});
define('blur-image',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BlurImageCustomAttribute = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var BlurImageCustomAttribute = exports.BlurImageCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
		function BlurImageCustomAttribute(element) {
			_classCallCheck(this, BlurImageCustomAttribute);

			this.element = element;
		}

		BlurImageCustomAttribute.prototype.valueChanged = function valueChanged(newImage) {
			var _this = this;

			if (newImage.complete) {
				drawBlur(this.element, newImage);
			} else {
				newImage.onload = function () {
					return drawBlur(_this.element, newImage);
				};
			}
		};

		return BlurImageCustomAttribute;
	}()) || _class);


	var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];

	var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

	var BLUR_RADIUS = 40;

	function stackBlurCanvasRGBA(canvas, top_x, top_y, width, height, radius) {
		if (isNaN(radius) || radius < 1) return;
		radius |= 0;

		var context = canvas.getContext("2d");
		var imageData;

		try {
			imageData = context.getImageData(top_x, top_y, width, height);
		} catch (e) {
			throw new Error("unable to access image data: " + e);
		}

		var pixels = imageData.data;

		var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;

		var div = radius + radius + 1;
		var w4 = width << 2;
		var widthMinus1 = width - 1;
		var heightMinus1 = height - 1;
		var radiusPlus1 = radius + 1;
		var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

		var stackStart = new BlurStack();
		var stack = stackStart;
		for (i = 1; i < div; i++) {
			stack = stack.next = new BlurStack();
			if (i == radiusPlus1) var stackEnd = stack;
		}
		stack.next = stackStart;
		var stackIn = null;
		var stackOut = null;

		yw = yi = 0;

		var mul_sum = mul_table[radius];
		var shg_sum = shg_table[radius];

		for (y = 0; y < height; y++) {
			r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

			r_out_sum = radiusPlus1 * (pr = pixels[yi]);
			g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
			b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
			a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;

			stack = stackStart;

			for (i = 0; i < radiusPlus1; i++) {
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}

			for (i = 1; i < radiusPlus1; i++) {
				p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
				r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
				g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
				b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
				a_sum += (stack.a = pa = pixels[p + 3]) * rbs;

				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;

				stack = stack.next;
			}

			stackIn = stackStart;
			stackOut = stackEnd;
			for (x = 0; x < width; x++) {
				pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
				if (pa != 0) {
					pa = 255 / pa;
					pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
					pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
					pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
				} else {
					pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
				}

				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;

				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;

				p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;

				r_in_sum += stackIn.r = pixels[p];
				g_in_sum += stackIn.g = pixels[p + 1];
				b_in_sum += stackIn.b = pixels[p + 2];
				a_in_sum += stackIn.a = pixels[p + 3];

				r_sum += r_in_sum;
				g_sum += g_in_sum;
				b_sum += b_in_sum;
				a_sum += a_in_sum;

				stackIn = stackIn.next;

				r_out_sum += pr = stackOut.r;
				g_out_sum += pg = stackOut.g;
				b_out_sum += pb = stackOut.b;
				a_out_sum += pa = stackOut.a;

				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;

				stackOut = stackOut.next;

				yi += 4;
			}
			yw += width;
		}

		for (x = 0; x < width; x++) {
			g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

			yi = x << 2;
			r_out_sum = radiusPlus1 * (pr = pixels[yi]);
			g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
			b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
			a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;

			stack = stackStart;

			for (i = 0; i < radiusPlus1; i++) {
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}

			yp = width;

			for (i = 1; i <= radius; i++) {
				yi = yp + x << 2;

				r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
				g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
				b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
				a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;

				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;

				stack = stack.next;

				if (i < heightMinus1) {
					yp += width;
				}
			}

			yi = x;
			stackIn = stackStart;
			stackOut = stackEnd;
			for (y = 0; y < height; y++) {
				p = yi << 2;
				pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
				if (pa > 0) {
					pa = 255 / pa;
					pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
					pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
					pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
				} else {
					pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
				}

				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;

				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;

				p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;

				r_sum += r_in_sum += stackIn.r = pixels[p];
				g_sum += g_in_sum += stackIn.g = pixels[p + 1];
				b_sum += b_in_sum += stackIn.b = pixels[p + 2];
				a_sum += a_in_sum += stackIn.a = pixels[p + 3];

				stackIn = stackIn.next;

				r_out_sum += pr = stackOut.r;
				g_out_sum += pg = stackOut.g;
				b_out_sum += pb = stackOut.b;
				a_out_sum += pa = stackOut.a;

				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;

				stackOut = stackOut.next;

				yi += width;
			}
		}

		context.putImageData(imageData, top_x, top_y);
	}

	function BlurStack() {
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 0;
		this.next = null;
	}

	function drawBlur(canvas, image) {
		var w = canvas.width;
		var h = canvas.height;
		var canvasContext = canvas.getContext('2d');
		canvasContext.drawImage(image, 0, 0, w, h);
		stackBlurCanvasRGBA(canvas, 0, 0, w, h, BLUR_RADIUS);
	};
});
define('customers',['exports', 'aurelia-framework', 'aurelia-orm'], function (exports, _aureliaFramework, _aureliaOrm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Customers = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Customers = exports.Customers = (_dec = (0, _aureliaFramework.inject)(_aureliaOrm.EntityManager), _dec(_class = function Customers(entityManager) {
    _classCallCheck(this, Customers);

    this.heading = 'Customers';

    this.repository = entityManager.getRepository('customers');
  }) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', './entities/customers', './entities/user', 'bootstrap'], function (exports, _environment, _customers, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-api', function (config) {
      config.registerEndpoint('github', 'https://api.github.com/').registerEndpoint('api', 'http://localhost:3000/api/').setDefaultEndpoint('github');
    }).plugin('aurelia-orm', function (config) {
      config.registerEntity(_customers.Customers).registerEntity(_user.User);
    }).plugin('aurelia-datatable');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('welcome',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Welcome = exports.Welcome = function () {
    function Welcome() {
      _classCallCheck(this, Welcome);

      this.heading = 'Welcome to the Aurelia Navigation App!';
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.previousValue = this.fullName;
    }

    Welcome.prototype.submit = function submit() {
      this.previousValue = this.fullName;
      alert('Welcome, ' + this.fullName + '!');
    };

    Welcome.prototype.canDeactivate = function canDeactivate() {
      if (this.fullName !== this.previousValue) {
        return confirm('Are you sure you want to leave?');
      }
    };

    _createClass(Welcome, [{
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }]);

    return Welcome;
  }();

  var UpperValueConverter = exports.UpperValueConverter = function () {
    function UpperValueConverter() {
      _classCallCheck(this, UpperValueConverter);
    }

    UpperValueConverter.prototype.toView = function toView(value) {
      return value && value.toUpperCase();
    };

    return UpperValueConverter;
  }();
});
define('entities/customers',['exports', 'aurelia-orm'], function (exports, _aureliaOrm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Customers = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var Customers = exports.Customers = (_dec = (0, _aureliaOrm.resource)('customers'), _dec2 = (0, _aureliaOrm.endpoint)('api'), _dec3 = (0, _aureliaOrm.type)('string'), _dec4 = (0, _aureliaOrm.type)('string'), _dec(_class = _dec2(_class = (_class2 = function (_Entity) {
    _inherits(Customers, _Entity);

    function Customers() {
      var _temp, _this, _ret;

      _classCallCheck(this, Customers);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Entity.call.apply(_Entity, [this].concat(args))), _this), _initDefineProp(_this, 'firstName', _descriptor, _this), _initDefineProp(_this, 'lastName', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Customers;
  }(_aureliaOrm.Entity), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'firstName', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'lastName', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class) || _class);
});
define('entities/user',['exports', 'aurelia-orm'], function (exports, _aureliaOrm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.User = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var User = exports.User = (_dec = (0, _aureliaOrm.resource)('users'), _dec2 = (0, _aureliaOrm.endpoint)('api'), _dec3 = (0, _aureliaOrm.type)('string'), _dec4 = (0, _aureliaOrm.type)('string'), _dec5 = (0, _aureliaOrm.type)('string'), _dec6 = (0, _aureliaOrm.association)({ collection: 'customers' }), _dec(_class = _dec2(_class = (_class2 = function (_Entity) {
    _inherits(User, _Entity);

    function User() {
      var _temp, _this, _ret;

      _classCallCheck(this, User);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Entity.call.apply(_Entity, [this].concat(args))), _this), _initDefineProp(_this, 'displayName', _descriptor, _this), _initDefineProp(_this, 'email', _descriptor2, _this), _initDefineProp(_this, 'password', _descriptor3, _this), _initDefineProp(_this, 'customers', _descriptor4, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return User;
  }(_aureliaOrm.Entity), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'displayName', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'email', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'password', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'none';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'customers', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('modules/customer/customers',['exports', 'aurelia-framework', 'aurelia-api'], function (exports, _aureliaFramework, _aureliaApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Customers = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Customers = exports.Customers = (_dec = (0, _aureliaFramework.inject)(_aureliaApi.Endpoint.of('api')), _dec(_class = function () {
    function Customers(rest) {
      _classCallCheck(this, Customers);

      this.model = 'customers';

      this.apiEndpoint = rest;
    }

    Customers.prototype.getById = function getById(id) {
      return this.apiEndpoint.find(this.model, id);
    };

    Customers.prototype.getAll = function getAll(criteria) {
      return this.apiEndpoint.find(this.model, criteria);
    };

    Customers.prototype.delete = function _delete(customer) {
      return this.apiEndpoint.destroy(this.model, customer.id);
    };

    Customers.prototype.save = function save(customer) {
      var request = void 0;

      if (customer.id) {
        request = this.apiEndpoint.update(this.model, customer.id, customer);
      } else {
        request = this.apiEndpoint.create(this.model, customer);
      }

      return request;
    };

    return Customers;
  }()) || _class);
});
define('modules/customer/edit',['exports', 'aurelia-framework', 'aurelia-router', 'aurelia-orm'], function (exports, _aureliaFramework, _aureliaRouter, _aureliaOrm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Edit = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var USER_ID = 1;var Edit = exports.Edit = (_dec = (0, _aureliaFramework.inject)(_aureliaOrm.EntityManager, _aureliaRouter.Router), _dec(_class = function () {
    function Edit(entityManager, router) {
      _classCallCheck(this, Edit);

      this.userRepository = entityManager.getRepository('users');
      this.repository = entityManager.getRepository('customers');
      this.customer = this.repository.getNewEntity();
      this.router = router;
    }

    Edit.prototype.cancel = function cancel() {
      return this.customer.setData(this.original);
    };

    Edit.prototype.goBack = function goBack() {
      window.history.back();
    };

    Edit.prototype.activate = function activate(params) {
      var _this = this;

      return this.userRepository.find(USER_ID).then(function (user) {
        if (params.id) {
          _this.customer = user.customers.filter(function (customer) {
            return customer.id == params.id;
          })[0];
        } else {
          _this.customer.setData({ firstName: '', lastName: '', userId: USER_ID });
        }
        _this.original = _this.customer.asObject();
        _this.customer.markClean();
      });
    };

    Edit.prototype.delete = function _delete() {
      var _this2 = this;

      this.customer.destroy().then(function () {
        return _this2.router.navigate('list');
      });
    };

    Edit.prototype.save = function save() {
      var _this3 = this;

      this.customer.save().then(function () {
        return _this3.router.navigate('list');
      });
    };

    _createClass(Edit, [{
      key: 'isUnchanged',
      get: function get() {
        return this.customer.isClean();
      }
    }, {
      key: 'isInvalid',
      get: function get() {
        return !this.customer.firstName || !this.customer.lastName;
      }
    }, {
      key: 'isNew',
      get: function get() {
        return this.customer.isNew();
      }
    }]);

    return Edit;
  }()) || _class);
});
define('modules/customer/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function () {
    function Index() {
      _classCallCheck(this, Index);
    }

    Index.prototype.configureRouter = function configureRouter(config, router) {
      config.map([{ route: ['', 'list'], moduleId: './list', name: 'list' }, { route: 'edit/:id', moduleId: './edit', name: 'edit' }, { route: 'create', moduleId: './edit', name: 'create' }]);

      this.router = router;
    };

    return Index;
  }();
});
define('modules/customer/list',['exports', 'aurelia-framework', 'aurelia-orm', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaOrm, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.List = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var List = exports.List = (_dec = (0, _aureliaFramework.inject)(_aureliaOrm.EntityManager, _aureliaRouter.Router), _dec(_class = function () {
    function List(entityManager, router) {
      _classCallCheck(this, List);

      this.heading = 'Customer management';
      this.customers = [];

      this.repository = entityManager.getRepository('users');
      this.router = router;
    }

    List.prototype.gotoCustomer = function gotoCustomer(customer) {
      this.router.navigateToRoute('edit', { id: customer.id });
    };

    List.prototype.new = function _new() {
      this.router.navigateToRoute('create');
    };

    List.prototype.activate = function activate() {
      var _this = this;

      return this.repository.find(1).then(function (user) {
        _this.customers = user.customers;
      });
    };

    return List;
  }()) || _class);
});
define('modules/users/profile',['exports', 'aurelia-framework', 'aurelia-router', 'aurelia-orm', '../../entities/user'], function (exports, _aureliaFramework, _aureliaRouter, _aureliaOrm, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Profile = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var Profile = exports.Profile = (_dec = (0, _aureliaFramework.inject)(_aureliaOrm.EntityManager, _aureliaRouter.Router), _dec(_class = function () {
    function Profile(entityManager, router) {
      _classCallCheck(this, Profile);

      this.heading = 'Profile';

      this.repository = entityManager.getRepository('users');
      this.profile = this.repository.getNewEntity();
      this.router = router;
    }

    Profile.prototype.activate = function activate() {
      var _this = this;

      return this.repository.find(1).then(function (user) {
        _this.profile = user;
      });
    };

    Profile.prototype.update = function update() {
      this.profile.save();
    };

    _createClass(Profile, [{
      key: 'isUnchanged',
      get: function get() {
        return this.profile.isClean();
      }
    }]);

    return Profile;
  }()) || _class);
});
define('aurelia-validation/utilities',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Utilities = exports.Utilities = function () {
    function Utilities() {
      _classCallCheck(this, Utilities);
    }

    Utilities.getValue = function getValue(val) {
      if (val !== undefined && typeof val === 'function') {
        return val();
      }
      return val;
    };

    Utilities.isEmptyValue = function isEmptyValue(val) {
      if (val === undefined) {
        return true;
      }
      if (val === null) {
        return true;
      }
      if (val === '') {
        return true;
      }
      if (typeof val === 'string') {
        if (String.prototype.trim) {
          val = val.trim();
        } else {
          val = val.replace(/^\s+|\s+$/g, '');
        }
      }
      if (val.length !== undefined) {
        return val.length === 0;
      }
      return false;
    };

    return Utilities;
  }();
});
define('aurelia-validation/validation-config',['exports', './validation-locale', './strategies/twbootstrap-view-strategy'], function (exports, _validationLocale, _twbootstrapViewStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationConfig = exports.ValidationConfigDefaults = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationConfigDefaults = exports.ValidationConfigDefaults = function ValidationConfigDefaults() {
    _classCallCheck(this, ValidationConfigDefaults);
  };

  ValidationConfigDefaults._defaults = {
    debounceTimeout: 0,
    dependencies: [],
    locale: 'en-US',
    localeResources: 'aurelia-validation/resources/',
    viewStrategy: _twbootstrapViewStrategy.TWBootstrapViewStrategy.AppendToMessage,
    allPropertiesAreMandatory: false
  };
  ValidationConfigDefaults.defaults = function () {
    var defaults = {};
    Object.assign(defaults, ValidationConfigDefaults._defaults);
    return defaults;
  };

  var ValidationConfig = exports.ValidationConfig = function () {
    function ValidationConfig(innerConfig) {
      _classCallCheck(this, ValidationConfig);

      this.innerConfig = innerConfig;
      this.values = this.innerConfig ? {} : ValidationConfigDefaults.defaults();
      this.changedHandlers = new Map();
    }

    ValidationConfig.prototype.getValue = function getValue(identifier) {
      if (this.values.hasOwnProperty(identifier) !== null && this.values[identifier] !== undefined) {
        return this.values[identifier];
      }
      if (this.innerConfig !== null) {
        return this.innerConfig.getValue(identifier);
      }
      throw Error('Config not found: ' + identifier);
    };

    ValidationConfig.prototype.setValue = function setValue(identifier, value) {
      this.values[identifier] = value;
      return this;
    };

    ValidationConfig.prototype.onLocaleChanged = function onLocaleChanged(callback) {
      var _this = this;

      if (this.innerConfig !== undefined) {
        return this.innerConfig.onLocaleChanged(callback);
      }
      var id = ++ValidationConfig.uniqueListenerId;
      this.changedHandlers.set(id, callback);
      return function () {
        _this.changedHandlers.delete(id);
      };
    };

    ValidationConfig.prototype.getDebounceTimeout = function getDebounceTimeout() {
      return this.getValue('debounceTimeout');
    };

    ValidationConfig.prototype.useDebounceTimeout = function useDebounceTimeout(value) {
      return this.setValue('debounceTimeout', value);
    };

    ValidationConfig.prototype.getDependencies = function getDependencies() {
      return this.getValue('dependencies');
    };

    ValidationConfig.prototype.computedFrom = function computedFrom(dependencies) {
      var deps = dependencies;
      if (typeof dependencies === 'string') {
        deps = [];
        deps.push(dependencies);
      }
      return this.setValue('dependencies', deps);
    };

    ValidationConfig.prototype.useLocale = function useLocale(localeIdentifier) {
      this.setValue('locale', localeIdentifier);
      var callbacks = Array.from(this.changedHandlers.values());
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
      }
      return this;
    };

    ValidationConfig.prototype.locale = function locale() {
      return _validationLocale.ValidationLocale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
    };

    ValidationConfig.prototype.useViewStrategy = function useViewStrategy(viewStrategy) {
      return this.setValue('viewStrategy', viewStrategy);
    };

    ValidationConfig.prototype.getViewStrategy = function getViewStrategy() {
      return this.getValue('viewStrategy');
    };

    ValidationConfig.prototype.treatAllPropertiesAsMandatory = function treatAllPropertiesAsMandatory() {
      this.setValue('allPropertiesAreMandatory', true);
      return this;
    };

    ValidationConfig.prototype.treatAllPropertiesAsOptional = function treatAllPropertiesAsOptional() {
      this.setValue('allPropertiesAreMandatory', false);
      return this;
    };

    return ValidationConfig;
  }();

  ValidationConfig.uniqueListenerId = 0;
});
define('aurelia-validation/validation-locale',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationLocale = exports.ValidationLocale = function () {
    function ValidationLocale(defaults, data) {
      _classCallCheck(this, ValidationLocale);

      this.defaults = defaults;
      this.currentLocale = data;
    }

    ValidationLocale.prototype.getValueFor = function getValueFor(identifier, category) {
      var currentLocaleSetting = void 0;
      var defaultSetting = void 0;
      if (this.currentLocale && this.currentLocale[category]) {
        currentLocaleSetting = this.currentLocale[category][identifier];
        if (currentLocaleSetting !== undefined && currentLocaleSetting !== null) {
          return currentLocaleSetting;
        }
      }
      if (this.defaults[category]) {
        defaultSetting = this.defaults[category][identifier];
        if (defaultSetting !== undefined && defaultSetting !== null) {
          return defaultSetting;
        }
      }
      throw new Error('validation: I18N: Could not find: ' + identifier + ' in category: ' + category);
    };

    ValidationLocale.prototype.setting = function setting(settingIdentifier) {
      return this.getValueFor(settingIdentifier, 'settings');
    };

    ValidationLocale.prototype.translate = function translate(translationIdentifier, newValue, threshold) {
      var translation = this.getValueFor(translationIdentifier, 'messages');
      if (typeof translation === 'function') {
        return translation(newValue, threshold);
      }
      if (typeof translation === 'string') {
        return translation;
      }
      throw new Error('Validation message for ' + translationIdentifier + 'was in an unsupported format');
    };

    return ValidationLocale;
  }();

  var ValidationLocaleRepository = function () {
    function ValidationLocaleRepository() {
      _classCallCheck(this, ValidationLocaleRepository);

      this.default = null;
      this.instances = new Map();
      this.defaults = {
        settings: {
          'numericRegex': /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
        },
        messages: {}
      };
    }

    ValidationLocaleRepository.prototype.load = function load(localeIdentifier, basePath) {
      var _this = this;

      if (!basePath) {
        basePath = 'aurelia-validation/resources/';
      }
      return new Promise(function (resolve, reject) {
        if (_this.instances.has(localeIdentifier)) {
          var locale = _this.instances.get(localeIdentifier);
          resolve(locale);
        } else {
          System.import(basePath + localeIdentifier).then(function (resource) {
            var locale = _this.addLocale(localeIdentifier, resource.data);
            resolve(locale);
          });
        }
      });
    };

    ValidationLocaleRepository.prototype.addLocale = function addLocale(localeIdentifier, data) {
      var instance = new ValidationLocale(this.defaults, data);
      this.instances.set(localeIdentifier, instance);
      if (this.default === null) {
        this.default = instance;
      }
      return instance;
    };

    return ValidationLocaleRepository;
  }();

  ValidationLocale.Repository = new ValidationLocaleRepository();
});
define('aurelia-validation/strategies/twbootstrap-view-strategy',['exports', '../validation-view-strategy'], function (exports, _validationViewStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TWBootstrapViewStrategy = exports.TWBootstrapViewStrategyBase = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TWBootstrapViewStrategyBase = exports.TWBootstrapViewStrategyBase = function (_ValidationViewStrate) {
    _inherits(TWBootstrapViewStrategyBase, _ValidationViewStrate);

    function TWBootstrapViewStrategyBase(appendMessageToInput, appendMessageToLabel, helpBlockClass) {
      _classCallCheck(this, TWBootstrapViewStrategyBase);

      var _this = _possibleConstructorReturn(this, _ValidationViewStrate.call(this));

      _this.appendMessageToInput = appendMessageToInput;
      _this.appendMessageToLabel = appendMessageToLabel;
      _this.helpBlockClass = helpBlockClass;
      return _this;
    }

    TWBootstrapViewStrategyBase.prototype.searchFormGroup = function searchFormGroup(currentElement, currentDepth) {
      if (currentDepth === 5) {
        return null;
      }

      if (currentElement.classList && currentElement.classList.contains('form-group')) {
        return currentElement;
      }

      return this.searchFormGroup(currentElement.parentNode, 1 + currentDepth);
    };

    TWBootstrapViewStrategyBase.prototype.findLabels = function findLabels(formGroup, inputId) {
      var labels = [];
      this.findLabelsRecursively(formGroup, inputId, labels, 0);
      return labels;
    };

    TWBootstrapViewStrategyBase.prototype.findLabelsRecursively = function findLabelsRecursively(currentElement, inputId, currentLabels, currentDepth) {
      if (currentDepth === 5) {
        return;
      }
      if (currentElement.nodeName === 'LABEL' && (currentElement.attributes.for && currentElement.attributes.for.value === inputId || !currentElement.attributes.for)) {
        currentLabels.push(currentElement);
      }
      for (var i = 0; i < currentElement.children.length; i++) {
        this.findLabelsRecursively(currentElement.children[i], inputId, currentLabels, 1 + currentDepth);
      }
    };

    TWBootstrapViewStrategyBase.prototype.appendMessageToElement = function appendMessageToElement(element, validationProperty) {
      var helpBlock = element.nextSibling;
      if (helpBlock) {
        if (!helpBlock.classList) {
          helpBlock = null;
        } else if (!helpBlock.classList.contains(this.helpBlockClass)) {
          helpBlock = null;
        }
      }

      if (!helpBlock) {
        helpBlock = document.createElement('p');
        helpBlock.classList.add('help-block');
        helpBlock.classList.add(this.helpBlockClass);
        if (element.nextSibling) {
          element.parentNode.insertBefore(helpBlock, element.nextSibling);
        } else {
          element.parentNode.appendChild(helpBlock);
        }
      }

      helpBlock.textContent = validationProperty ? validationProperty.message : '';
    };

    TWBootstrapViewStrategyBase.prototype.appendUIVisuals = function appendUIVisuals(validationProperty, currentElement) {
      var formGroup = this.searchFormGroup(currentElement, 0);
      if (formGroup === null) {
        return;
      }

      if (validationProperty && validationProperty.isDirty) {
        if (validationProperty.isValid) {
          formGroup.classList.remove('has-warning');
          formGroup.classList.add('has-success');
        } else {
          formGroup.classList.remove('has-success');
          formGroup.classList.add('has-warning');
        }
      } else {
        formGroup.classList.remove('has-warning');
        formGroup.classList.remove('has-success');
      }

      if (this.appendMessageToInput) {
        this.appendMessageToElement(currentElement, validationProperty);
      }

      if (this.appendMessageToLabel) {
        var labels = this.findLabels(formGroup, currentElement.id);
        for (var ii = 0; ii < labels.length; ii++) {
          var label = labels[ii];
          this.appendMessageToElement(label, validationProperty);
        }
      }
    };

    TWBootstrapViewStrategyBase.prototype.prepareElement = function prepareElement(validationProperty, element) {
      this.appendUIVisuals(null, element);
    };

    TWBootstrapViewStrategyBase.prototype.updateElement = function updateElement(validationProperty, element) {
      this.appendUIVisuals(validationProperty, element);
    };

    return TWBootstrapViewStrategyBase;
  }(_validationViewStrategy.ValidationViewStrategy);

  var TWBootstrapViewStrategy = exports.TWBootstrapViewStrategy = function TWBootstrapViewStrategy() {
    _classCallCheck(this, TWBootstrapViewStrategy);
  };

  TWBootstrapViewStrategy.AppendToInput = new TWBootstrapViewStrategyBase(true, false, 'aurelia-validation-message');
  TWBootstrapViewStrategy.AppendToMessage = new TWBootstrapViewStrategyBase(false, true, 'aurelia-validation-message');
});
define('aurelia-validation/validation-view-strategy',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationViewStrategy = exports.ValidationViewStrategy = function () {
    function ValidationViewStrategy() {
      _classCallCheck(this, ValidationViewStrategy);

      this.bindingPathAttributes = ['validate', 'value.bind', 'value.two-way'];
    }

    ValidationViewStrategy.prototype.getValidationProperty = function getValidationProperty(validation, element) {
      var atts = element.attributes;
      for (var i = 0; i < this.bindingPathAttributes.length; i++) {
        var attributeName = this.bindingPathAttributes[i];
        var bindingPath = void 0;
        var validationProperty = void 0;
        if (atts[attributeName]) {
          bindingPath = atts[attributeName].value.trim();
          if (bindingPath.indexOf('|') !== -1) {
            bindingPath = bindingPath.split('|')[0].trim();
          }

          validationProperty = validation.result.properties[bindingPath];
          if (attributeName === 'validate' && (validationProperty === null || validationProperty === undefined)) {
            validation.ensure(bindingPath);
            validationProperty = validation.result.properties[bindingPath];
          }
          return validationProperty;
        }
      }

      return null;
    };

    ValidationViewStrategy.prototype.prepareElement = function prepareElement(validationProperty, element) {
      throw Error('View strategy must implement prepareElement(validationProperty, element)');
    };

    ValidationViewStrategy.prototype.updateElement = function updateElement(validationProperty, element) {
      throw Error('View strategy must implement updateElement(validationProperty, element)');
    };

    return ValidationViewStrategy;
  }();
});
define('aurelia-validation/validation-result',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationResult = exports.ValidationResult = function () {
    function ValidationResult() {
      _classCallCheck(this, ValidationResult);

      this.isValid = true;
      this.properties = {};
    }

    ValidationResult.prototype.addProperty = function addProperty(name) {
      if (!this.properties[name]) {
        this.properties[name] = new ValidationResultProperty(this);
      }
      return this.properties[name];
    };

    ValidationResult.prototype.checkValidity = function checkValidity() {
      for (var propertyName in this.properties) {
        if (!this.properties[propertyName].isValid) {
          this.isValid = false;
          return;
        }
      }
      this.isValid = true;
    };

    ValidationResult.prototype.clear = function clear() {
      this.isValid = true;
    };

    return ValidationResult;
  }();

  var ValidationResultProperty = exports.ValidationResultProperty = function () {
    function ValidationResultProperty(group) {
      _classCallCheck(this, ValidationResultProperty);

      this.group = group;
      this.onValidateCallbacks = [];
      this.clear();
    }

    ValidationResultProperty.prototype.clear = function clear() {
      this.isValid = true;
      this.isDirty = false;
      this.message = '';
      this.failingRule = null;
      this.latestValue = null;
      this.notifyObserversOfChange();
    };

    ValidationResultProperty.prototype.onValidate = function onValidate(onValidateCallback) {
      this.onValidateCallbacks.push(onValidateCallback);
    };

    ValidationResultProperty.prototype.notifyObserversOfChange = function notifyObserversOfChange() {
      for (var i = 0; i < this.onValidateCallbacks.length; i++) {
        var callback = this.onValidateCallbacks[i];
        callback(this);
      }
    };

    ValidationResultProperty.prototype.setValidity = function setValidity(validationResponse, shouldBeDirty) {
      var notifyObservers = !this.isDirty && shouldBeDirty || this.isValid !== validationResponse.isValid || this.message !== validationResponse.message;

      if (shouldBeDirty) {
        this.isDirty = true;
      }
      this.message = validationResponse.message;
      this.failingRule = validationResponse.failingRule;
      this.isValid = validationResponse.isValid;
      this.latestValue = validationResponse.latestValue;
      if (this.isValid !== this.group.isValid) {
        this.group.checkValidity();
      }
      if (notifyObservers) {
        this.notifyObserversOfChange();
      }
    };

    return ValidationResultProperty;
  }();
});
define('aurelia-validation/validation-rules',['exports', './utilities', './validation-locale'], function (exports, _utilities, _validationLocale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.InCollectionValidationRule = exports.InEqualityWithOtherLabelValidationRule = exports.InEqualityValidationRule = exports.EqualityWithOtherLabelValidationRule = exports.EqualityValidationRule = exports.EqualityValidationRuleBase = exports.StrongPasswordValidationRule = exports.MediumPasswordValidationRule = exports.AlphaNumericOrWhitespaceValidationRule = exports.AlphaOrWhitespaceValidationRule = exports.AlphaValidationRule = exports.AlphaNumericValidationRule = exports.NoSpacesValidationRule = exports.DigitValidationRule = exports.BetweenValueValidationRule = exports.MaximumInclusiveValueValidationRule = exports.MaximumValueValidationRule = exports.MinimumInclusiveValueValidationRule = exports.MinimumValueValidationRule = exports.ContainsOnlyValidationRule = exports.RegexValidationRule = exports.NumericValidationRule = exports.CustomFunctionValidationRule = exports.BetweenLengthValidationRule = exports.MaximumLengthValidationRule = exports.MinimumLengthValidationRule = exports.EmailValidationRule = exports.URLValidationRule = exports.ValidationRule = undefined;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationRule = exports.ValidationRule = function () {
    function ValidationRule(threshold, onValidate, message, ruleName) {
      _classCallCheck(this, ValidationRule);

      this.onValidate = onValidate;
      this.threshold = threshold;
      this.message = message;
      this.errorMessage = null;
      this.ruleName = ruleName;
    }

    ValidationRule.prototype.withMessage = function withMessage(message) {
      this.message = message;
    };

    ValidationRule.prototype.explain = function explain() {
      return this.errorMessage;
    };

    ValidationRule.prototype.setResult = function setResult(result, currentValue, locale) {
      if (result === true || result === undefined || result === null || result === '') {
        this.errorMessage = null;
        return true;
      }
      if (typeof result === 'string') {
        this.errorMessage = result;
      } else {
        if (this.message) {
          if (typeof this.message === 'function') {
            this.errorMessage = this.message(currentValue, this.threshold);
          } else if (typeof this.message === 'string') {
            this.errorMessage = this.message;
          } else {
            throw Error('Unable to handle the error message:' + this.message);
          }
        } else {
          this.errorMessage = locale.translate(this.ruleName, currentValue, this.threshold);
        }
      }
      return false;
    };

    ValidationRule.prototype.validate = function validate(currentValue, locale) {
      var _this = this;

      if (locale === undefined) {
        locale = _validationLocale.ValidationLocale.Repository.default;
      }
      currentValue = _utilities.Utilities.getValue(currentValue);
      var result = this.onValidate(currentValue, this.threshold, locale);
      var promise = Promise.resolve(result);

      var nextPromise = promise.then(function (promiseResult) {
        return _this.setResult(promiseResult, currentValue, locale);
      }, function (promiseFailure) {
        if (typeof promiseFailure === 'string' && promiseFailure !== '') {
          return _this.setResult(promiseFailure, currentValue, locale);
        }
        return _this.setResult(false, currentValue, locale);
      });
      return nextPromise;
    };

    return ValidationRule;
  }();

  var URLValidationRule = exports.URLValidationRule = function (_ValidationRule) {
    _inherits(URLValidationRule, _ValidationRule);

    URLValidationRule.isIP = function isIP(str, version) {
      var ipv4Maybe = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
      var ipv6Block = /^[0-9A-F]{1,4}$/i;
      if (!version) {
        return this.isIP(str, 4) || this.isIP(str, 6);
      } else if (version === 4) {
        if (!ipv4Maybe.test(str)) {
          return false;
        }
        var parts = str.split('.').sort(function (a, b) {
          return a - b;
        });
        return parts[3] <= 255;
      } else if (version === 6) {
        var blocks = str.split(':');
        var foundOmissionBlock = false;
        if (blocks.length > 8) {
          return false;
        }

        if (str === '::') {
          return true;
        } else if (str.substr(0, 2) === '::') {
          blocks.shift();
          blocks.shift();
          foundOmissionBlock = true;
        } else if (str.substr(str.length - 2) === '::') {
          blocks.pop();
          blocks.pop();
          foundOmissionBlock = true;
        }
        for (var i = 0; i < blocks.length; ++i) {
          if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
            if (foundOmissionBlock) {
              return false;
            }
            foundOmissionBlock = true;
          } else if (!ipv6Block.test(blocks[i])) {
            return false;
          }
        }
        if (foundOmissionBlock) {
          return blocks.length >= 1;
        }
        return blocks.length === 8;
      }
      return false;
    };

    URLValidationRule.isFQDN = function isFQDN(str, options) {
      if (options.allow_trailing_dot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
      }
      var parts = str.split('.');
      if (options.require_tld) {
        var tld = parts.pop();
        if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
          return false;
        }
      }
      for (var part, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (options.allow_underscores) {
          if (part.indexOf('__') >= 0) {
            return false;
          }
          part = part.replace(/_/g, '');
        }
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (part[0] === '-' || part[part.length - 1] === '-' || part.indexOf('---') >= 0) {
          return false;
        }
      }
      return true;
    };

    function URLValidationRule(startingThreshold) {
      _classCallCheck(this, URLValidationRule);

      var defaultUrlOptions = {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: false,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: true
      };
      if (startingThreshold === undefined) {
        startingThreshold = defaultUrlOptions;
      }
      return _possibleConstructorReturn(this, _ValidationRule.call(this, startingThreshold, function (newValue, threshold) {
        var url = newValue;
        var protocol = void 0;
        var auth = void 0;
        var host = void 0;
        var hostname = void 0;
        var port = void 0;
        var portStr = void 0;
        var split = void 0;
        if (!url || url.length >= 2083 || /\s/.test(url)) {
          return false;
        }
        if (url.indexOf('mailto:') === 0) {
          return false;
        }
        split = url.split('://');
        if (split.length > 1) {
          protocol = split.shift();
          if (threshold.protocols.indexOf(protocol) === -1) {
            return false;
          }
        } else if (threshold.require_protocol) {
          return false;
        } else if (threshold.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
          split[0] = url.substr(2);
        }
        url = split.join('://');
        split = url.split('#');
        url = split.shift();
        split = url.split('?');
        url = split.shift();
        split = url.split('/');
        url = split.shift();
        split = url.split('@');
        if (split.length > 1) {
          auth = split.shift();
          if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
            return false;
          }
        }
        hostname = split.join('@');
        split = hostname.split(':');
        host = split.shift();
        if (split.length) {
          portStr = split.join(':');
          port = parseInt(portStr, 10);
          if (!/^[0-9]+$/.test(portStr) || port <= 0 || port > 65535) {
            return false;
          }
        }
        if (!URLValidationRule.isIP(host) && !URLValidationRule.isFQDN(host, threshold) && host !== 'localhost') {
          return false;
        }
        if (threshold.host_whitelist && threshold.host_whitelist.indexOf(host) === -1) {
          return false;
        }
        if (threshold.host_blacklist && threshold.host_blacklist.indexOf(host) !== -1) {
          return false;
        }
        return true;
      }, null, 'URLValidationRule'));
    }

    return URLValidationRule;
  }(ValidationRule);

  var EmailValidationRule = exports.EmailValidationRule = function (_ValidationRule2) {
    _inherits(EmailValidationRule, _ValidationRule2);

    EmailValidationRule.testEmailUserUtf8Regex = function testEmailUserUtf8Regex(user) {
      var emailUserUtf8Regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))$/i;
      return emailUserUtf8Regex.test(user);
    };

    EmailValidationRule.isFQDN = function isFQDN(str) {
      var parts = str.split('.');
      for (var part, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (part.indexOf('__') >= 0) {
          return false;
        }
        part = part.replace(/_/g, '');
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (part[0] === '-' || part[part.length - 1] === '-' || part.indexOf('---') >= 0) {
          return false;
        }
      }
      return true;
    };

    function EmailValidationRule() {
      _classCallCheck(this, EmailValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule2.call(this, null, function (newValue, threshold) {
        if (/\s/.test(newValue)) {
          return false;
        }
        var parts = newValue.split('@');
        var domain = parts.pop();
        var user = parts.join('@');

        if (!EmailValidationRule.isFQDN(domain)) {
          return false;
        }
        return EmailValidationRule.testEmailUserUtf8Regex(user);
      }, null, 'EmailValidationRule'));
    }

    return EmailValidationRule;
  }(ValidationRule);

  var MinimumLengthValidationRule = exports.MinimumLengthValidationRule = function (_ValidationRule3) {
    _inherits(MinimumLengthValidationRule, _ValidationRule3);

    function MinimumLengthValidationRule(minimumLength) {
      _classCallCheck(this, MinimumLengthValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule3.call(this, minimumLength, function (newValue, minLength) {
        newValue = typeof newValue === 'number' ? newValue.toString() : newValue;
        return newValue.length !== undefined && newValue.length >= minLength;
      }, null, 'MinimumLengthValidationRule'));
    }

    return MinimumLengthValidationRule;
  }(ValidationRule);

  var MaximumLengthValidationRule = exports.MaximumLengthValidationRule = function (_ValidationRule4) {
    _inherits(MaximumLengthValidationRule, _ValidationRule4);

    function MaximumLengthValidationRule(maximumLength) {
      _classCallCheck(this, MaximumLengthValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule4.call(this, maximumLength, function (newValue, maxLength) {
        newValue = typeof newValue === 'number' ? newValue.toString() : newValue;
        return newValue.length !== undefined && newValue.length <= maxLength;
      }, null, 'MaximumLengthValidationRule'));
    }

    return MaximumLengthValidationRule;
  }(ValidationRule);

  var BetweenLengthValidationRule = exports.BetweenLengthValidationRule = function (_ValidationRule5) {
    _inherits(BetweenLengthValidationRule, _ValidationRule5);

    function BetweenLengthValidationRule(minimumLength, maximumLength) {
      _classCallCheck(this, BetweenLengthValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule5.call(this, { minimumLength: minimumLength, maximumLength: maximumLength }, function (newValue, threshold) {
        newValue = typeof newValue === 'number' ? newValue.toString() : newValue;
        return newValue.length !== undefined && newValue.length >= threshold.minimumLength && newValue.length <= threshold.maximumLength;
      }, null, 'BetweenLengthValidationRule'));
    }

    return BetweenLengthValidationRule;
  }(ValidationRule);

  var CustomFunctionValidationRule = exports.CustomFunctionValidationRule = function (_ValidationRule6) {
    _inherits(CustomFunctionValidationRule, _ValidationRule6);

    function CustomFunctionValidationRule(customFunction, threshold) {
      _classCallCheck(this, CustomFunctionValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule6.call(this, threshold, customFunction, null, 'CustomFunctionValidationRule'));
    }

    return CustomFunctionValidationRule;
  }(ValidationRule);

  var NumericValidationRule = exports.NumericValidationRule = function (_ValidationRule7) {
    _inherits(NumericValidationRule, _ValidationRule7);

    function NumericValidationRule() {
      _classCallCheck(this, NumericValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule7.call(this, null, function (newValue, threshold, locale) {
        var numericRegex = locale.setting('numericRegex');
        var floatValue = parseFloat(newValue);
        return !Number.isNaN(parseFloat(newValue)) && Number.isFinite(floatValue) && numericRegex.test(newValue);
      }, null, 'NumericValidationRule'));
    }

    return NumericValidationRule;
  }(ValidationRule);

  var RegexValidationRule = exports.RegexValidationRule = function (_ValidationRule8) {
    _inherits(RegexValidationRule, _ValidationRule8);

    function RegexValidationRule(startingRegex, ruleName) {
      _classCallCheck(this, RegexValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule8.call(this, startingRegex, function (newValue, regex) {
        return regex.test(newValue);
      }, null, ruleName || 'RegexValidationRule'));
    }

    return RegexValidationRule;
  }(ValidationRule);

  var ContainsOnlyValidationRule = exports.ContainsOnlyValidationRule = function (_RegexValidationRule) {
    _inherits(ContainsOnlyValidationRule, _RegexValidationRule);

    function ContainsOnlyValidationRule(regex) {
      _classCallCheck(this, ContainsOnlyValidationRule);

      return _possibleConstructorReturn(this, _RegexValidationRule.call(this, regex, 'ContainsOnlyValidationRule'));
    }

    return ContainsOnlyValidationRule;
  }(RegexValidationRule);

  var MinimumValueValidationRule = exports.MinimumValueValidationRule = function (_ValidationRule9) {
    _inherits(MinimumValueValidationRule, _ValidationRule9);

    function MinimumValueValidationRule(minimumValue) {
      _classCallCheck(this, MinimumValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule9.call(this, minimumValue, function (newValue, minValue) {
        return _utilities.Utilities.getValue(minValue) < newValue;
      }, null, 'MinimumValueValidationRule'));
    }

    return MinimumValueValidationRule;
  }(ValidationRule);

  var MinimumInclusiveValueValidationRule = exports.MinimumInclusiveValueValidationRule = function (_ValidationRule10) {
    _inherits(MinimumInclusiveValueValidationRule, _ValidationRule10);

    function MinimumInclusiveValueValidationRule(minimumValue) {
      _classCallCheck(this, MinimumInclusiveValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule10.call(this, minimumValue, function (newValue, minValue) {
        return _utilities.Utilities.getValue(minValue) <= newValue;
      }, null, 'MinimumInclusiveValueValidationRule'));
    }

    return MinimumInclusiveValueValidationRule;
  }(ValidationRule);

  var MaximumValueValidationRule = exports.MaximumValueValidationRule = function (_ValidationRule11) {
    _inherits(MaximumValueValidationRule, _ValidationRule11);

    function MaximumValueValidationRule(maximumValue) {
      _classCallCheck(this, MaximumValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule11.call(this, maximumValue, function (newValue, maxValue) {
        return newValue < _utilities.Utilities.getValue(maxValue);
      }, null, 'MaximumValueValidationRule'));
    }

    return MaximumValueValidationRule;
  }(ValidationRule);

  var MaximumInclusiveValueValidationRule = exports.MaximumInclusiveValueValidationRule = function (_ValidationRule12) {
    _inherits(MaximumInclusiveValueValidationRule, _ValidationRule12);

    function MaximumInclusiveValueValidationRule(maximumValue) {
      _classCallCheck(this, MaximumInclusiveValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule12.call(this, maximumValue, function (newValue, maxValue) {
        return newValue <= _utilities.Utilities.getValue(maxValue);
      }, null, 'MaximumInclusiveValueValidationRule'));
    }

    return MaximumInclusiveValueValidationRule;
  }(ValidationRule);

  var BetweenValueValidationRule = exports.BetweenValueValidationRule = function (_ValidationRule13) {
    _inherits(BetweenValueValidationRule, _ValidationRule13);

    function BetweenValueValidationRule(minimumValue, maximumValue) {
      _classCallCheck(this, BetweenValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule13.call(this, { minimumValue: minimumValue, maximumValue: maximumValue }, function (newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.minimumValue) <= newValue && newValue <= _utilities.Utilities.getValue(threshold.maximumValue);
      }, null, 'BetweenValueValidationRule'));
    }

    return BetweenValueValidationRule;
  }(ValidationRule);

  var DigitValidationRule = exports.DigitValidationRule = function (_ValidationRule14) {
    _inherits(DigitValidationRule, _ValidationRule14);

    function DigitValidationRule() {
      _classCallCheck(this, DigitValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule14.call(this, null, function (newValue, threshold) {
        return (/^\d+$/.test(newValue)
        );
      }, null, 'DigitValidationRule'));
    }

    return DigitValidationRule;
  }(ValidationRule);

  var NoSpacesValidationRule = exports.NoSpacesValidationRule = function (_ValidationRule15) {
    _inherits(NoSpacesValidationRule, _ValidationRule15);

    function NoSpacesValidationRule() {
      _classCallCheck(this, NoSpacesValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule15.call(this, null, function (newValue, threshold) {
        return (/^\S*$/.test(newValue)
        );
      }, null, 'NoSpacesValidationRule'));
    }

    return NoSpacesValidationRule;
  }(ValidationRule);

  var AlphaNumericValidationRule = exports.AlphaNumericValidationRule = function (_ValidationRule16) {
    _inherits(AlphaNumericValidationRule, _ValidationRule16);

    function AlphaNumericValidationRule() {
      _classCallCheck(this, AlphaNumericValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule16.call(this, null, function (newValue, threshold) {
        return (/^[a-z0-9]+$/i.test(newValue)
        );
      }, null, 'AlphaNumericValidationRule'));
    }

    return AlphaNumericValidationRule;
  }(ValidationRule);

  var AlphaValidationRule = exports.AlphaValidationRule = function (_ValidationRule17) {
    _inherits(AlphaValidationRule, _ValidationRule17);

    function AlphaValidationRule() {
      _classCallCheck(this, AlphaValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule17.call(this, null, function (newValue, threshold) {
        return (/^[a-z]+$/i.test(newValue)
        );
      }, null, 'AlphaValidationRule'));
    }

    return AlphaValidationRule;
  }(ValidationRule);

  var AlphaOrWhitespaceValidationRule = exports.AlphaOrWhitespaceValidationRule = function (_ValidationRule18) {
    _inherits(AlphaOrWhitespaceValidationRule, _ValidationRule18);

    function AlphaOrWhitespaceValidationRule() {
      _classCallCheck(this, AlphaOrWhitespaceValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule18.call(this, null, function (newValue, threshold) {
        return (/^[a-z\s]+$/i.test(newValue)
        );
      }, null, 'AlphaOrWhitespaceValidationRule'));
    }

    return AlphaOrWhitespaceValidationRule;
  }(ValidationRule);

  var AlphaNumericOrWhitespaceValidationRule = exports.AlphaNumericOrWhitespaceValidationRule = function (_ValidationRule19) {
    _inherits(AlphaNumericOrWhitespaceValidationRule, _ValidationRule19);

    function AlphaNumericOrWhitespaceValidationRule() {
      _classCallCheck(this, AlphaNumericOrWhitespaceValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule19.call(this, null, function (newValue, threshold) {
        return (/^[a-z0-9\s]+$/i.test(newValue)
        );
      }, null, 'AlphaNumericOrWhitespaceValidationRule'));
    }

    return AlphaNumericOrWhitespaceValidationRule;
  }(ValidationRule);

  var MediumPasswordValidationRule = exports.MediumPasswordValidationRule = function (_ValidationRule20) {
    _inherits(MediumPasswordValidationRule, _ValidationRule20);

    function MediumPasswordValidationRule(minimumComplexityLevel, ruleName) {
      _classCallCheck(this, MediumPasswordValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule20.call(this, minimumComplexityLevel ? minimumComplexityLevel : 3, function (newValue, threshold) {
        if (typeof newValue !== 'string') {
          return false;
        }
        var strength = 0;
        strength += /[A-Z]+/.test(newValue) ? 1 : 0;
        strength += /[a-z]+/.test(newValue) ? 1 : 0;
        strength += /[0-9]+/.test(newValue) ? 1 : 0;
        strength += /[\W]+/.test(newValue) ? 1 : 0;
        return strength >= threshold;
      }, null, ruleName || 'MediumPasswordValidationRule'));
    }

    return MediumPasswordValidationRule;
  }(ValidationRule);

  var StrongPasswordValidationRule = exports.StrongPasswordValidationRule = function (_MediumPasswordValida) {
    _inherits(StrongPasswordValidationRule, _MediumPasswordValida);

    function StrongPasswordValidationRule() {
      _classCallCheck(this, StrongPasswordValidationRule);

      return _possibleConstructorReturn(this, _MediumPasswordValida.call(this, 4, 'StrongPasswordValidationRule'));
    }

    return StrongPasswordValidationRule;
  }(MediumPasswordValidationRule);

  var EqualityValidationRuleBase = exports.EqualityValidationRuleBase = function (_ValidationRule21) {
    _inherits(EqualityValidationRuleBase, _ValidationRule21);

    function EqualityValidationRuleBase(startingOtherValue, equality, otherValueLabel, ruleName) {
      _classCallCheck(this, EqualityValidationRuleBase);

      return _possibleConstructorReturn(this, _ValidationRule21.call(this, {
        otherValue: startingOtherValue,
        equality: equality,
        otherValueLabel: otherValueLabel
      }, function (newValue, threshold) {
        var otherValue = _utilities.Utilities.getValue(threshold.otherValue);
        if (newValue instanceof Date && otherValue instanceof Date) {
          return threshold.equality === (newValue.getTime() === otherValue.getTime());
        }
        return threshold.equality === (newValue === otherValue);
      }, null, ruleName || 'EqualityValidationRuleBase'));
    }

    return EqualityValidationRuleBase;
  }(ValidationRule);

  var EqualityValidationRule = exports.EqualityValidationRule = function (_EqualityValidationRu) {
    _inherits(EqualityValidationRule, _EqualityValidationRu);

    function EqualityValidationRule(otherValue) {
      _classCallCheck(this, EqualityValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu.call(this, otherValue, true, null, 'EqualityValidationRule'));
    }

    return EqualityValidationRule;
  }(EqualityValidationRuleBase);

  var EqualityWithOtherLabelValidationRule = exports.EqualityWithOtherLabelValidationRule = function (_EqualityValidationRu2) {
    _inherits(EqualityWithOtherLabelValidationRule, _EqualityValidationRu2);

    function EqualityWithOtherLabelValidationRule(otherValue, otherLabel) {
      _classCallCheck(this, EqualityWithOtherLabelValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu2.call(this, otherValue, true, otherLabel, 'EqualityWithOtherLabelValidationRule'));
    }

    return EqualityWithOtherLabelValidationRule;
  }(EqualityValidationRuleBase);

  var InEqualityValidationRule = exports.InEqualityValidationRule = function (_EqualityValidationRu3) {
    _inherits(InEqualityValidationRule, _EqualityValidationRu3);

    function InEqualityValidationRule(otherValue) {
      _classCallCheck(this, InEqualityValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu3.call(this, otherValue, false, null, 'InEqualityValidationRule'));
    }

    return InEqualityValidationRule;
  }(EqualityValidationRuleBase);

  var InEqualityWithOtherLabelValidationRule = exports.InEqualityWithOtherLabelValidationRule = function (_EqualityValidationRu4) {
    _inherits(InEqualityWithOtherLabelValidationRule, _EqualityValidationRu4);

    function InEqualityWithOtherLabelValidationRule(otherValue, otherLabel) {
      _classCallCheck(this, InEqualityWithOtherLabelValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu4.call(this, otherValue, false, otherLabel, 'InEqualityWithOtherLabelValidationRule'));
    }

    return InEqualityWithOtherLabelValidationRule;
  }(EqualityValidationRuleBase);

  var InCollectionValidationRule = exports.InCollectionValidationRule = function (_ValidationRule22) {
    _inherits(InCollectionValidationRule, _ValidationRule22);

    function InCollectionValidationRule(startingCollection) {
      _classCallCheck(this, InCollectionValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule22.call(this, startingCollection, function (newValue, threshold) {
        var collection = _utilities.Utilities.getValue(threshold);
        for (var i = 0; i < collection.length; i++) {
          if (newValue === collection[i]) {
            return true;
          }
        }
        return false;
      }, null, 'InCollectionValidationRule'));
    }

    return InCollectionValidationRule;
  }(ValidationRule);
});
define('aurelia-validation/validation',['exports', 'aurelia-binding', './validation-group', 'aurelia-dependency-injection', './validation-config'], function (exports, _aureliaBinding, _validationGroup, _aureliaDependencyInjection, _validationConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Validation = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Validation = exports.Validation = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaBinding.ObserverLocator), _dec(_class = function () {
    function Validation(observerLocator, validationConfig) {
      _classCallCheck(this, Validation);

      this.observerLocator = observerLocator;
      this.config = validationConfig ? validationConfig : Validation.defaults;
    }

    Validation.prototype.on = function on(subject, configCallback) {
      var conf = new _validationConfig.ValidationConfig(this.config);
      if (configCallback !== null && configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(conf);
      }
      return new _validationGroup.ValidationGroup(subject, this.observerLocator, conf);
    };

    Validation.prototype.onBreezeEntity = function onBreezeEntity(breezeEntity, configCallback) {
      var validation = this.on(breezeEntity, configCallback);
      validation.onBreezeEntity();
      return validation;
    };

    return Validation;
  }()) || _class);

  Validation.defaults = new _validationConfig.ValidationConfig();
});
define('aurelia-validation/validation-group',['exports', 'aurelia-metadata', './validation-group-builder', './validation-result', './decorators'], function (exports, _aureliaMetadata, _validationGroupBuilder, _validationResult, _decorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationGroup = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationGroup = exports.ValidationGroup = function () {
    function ValidationGroup(subject, observerLocator, config) {
      var _this = this;

      _classCallCheck(this, ValidationGroup);

      var validationMetadata = void 0;
      this.result = new _validationResult.ValidationResult();
      this.subject = subject;
      this.validationProperties = [];
      this.config = config;
      this.builder = new _validationGroupBuilder.ValidationGroupBuilder(observerLocator, this);
      this.onValidateCallbacks = [];
      this.onPropertyValidationCallbacks = [];
      this.isValidating = false;
      this.onDestroy = config.onLocaleChanged(function () {
        _this.validate(false, true);
      });
      validationMetadata = _aureliaMetadata.metadata.getOwn(_decorators.ValidationMetadata.metadataKey, Object.getPrototypeOf(this.subject));
      if (validationMetadata) {
        validationMetadata.setup(this);
      }
    }

    ValidationGroup.prototype.destroy = function destroy() {
      this.validationProperties.forEach(function (prop) {
        prop.destroy();
      });
      this.onDestroy();
    };

    ValidationGroup.prototype.clear = function clear() {
      this.validationProperties.forEach(function (prop) {
        prop.clear();
      });
      this.result.clear();
    };

    ValidationGroup.prototype.onBreezeEntity = function onBreezeEntity() {
      var _this2 = this;

      var breezeEntity = this.subject;
      var me = this;
      var errors = void 0;
      this.onPropertyValidate(function (propertyBindingPath) {
        _this2.passes(function () {
          breezeEntity.entityAspect.validateProperty(propertyBindingPath);
          errors = breezeEntity.entityAspect.getValidationErrors(propertyBindingPath);
          if (errors.length === 0) {
            return true;
          }
          return errors[0].errorMessage;
        });
      });
      this.onValidate(function () {
        breezeEntity.entityAspect.validateEntity();
        return {};
      });
      breezeEntity.entityAspect.validationErrorsChanged.subscribe(function () {
        breezeEntity.entityAspect.getValidationErrors().forEach(function (validationError) {
          var propertyName = validationError.propertyName;
          var currentResultProp = void 0;
          if (!me.result.properties[propertyName]) {
            me.ensure(propertyName);
          }
          currentResultProp = me.result.addProperty(propertyName);
          if (currentResultProp.isValid) {
            currentResultProp.setValidity({
              isValid: false,
              message: validationError.errorMessage,
              failingRule: 'breeze',
              latestValue: currentResultProp.latestValue
            }, true);
          }
        });
      });
    };

    ValidationGroup.prototype.validate = function validate() {
      var _this3 = this;

      var forceDirty = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      var forceExecution = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      this.isValidating = true;
      var promise = Promise.resolve(true);

      var _loop = function _loop(i) {
        var validatorProperty = _this3.validationProperties[i];
        promise = promise.then(function () {
          return validatorProperty.validateCurrentValue(forceDirty, forceExecution);
        });
      };

      for (var i = this.validationProperties.length - 1; i >= 0; i--) {
        _loop(i);
      }

      promise = promise.catch(function () {
        throw Error('Should never get here: a validation property should always resolve to true/false!');
      });
      this.onValidateCallbacks.forEach(function (onValidateCallback) {
        promise = promise.then(function () {
          return _this3.config.locale();
        }).then(function (locale) {
          return Promise.resolve(onValidateCallback.validationFunction()).then(function (callbackResult) {
            for (var prop in callbackResult) {
              var resultProp = void 0;
              var result = void 0;
              var newPropResult = void 0;
              if (!_this3.result.properties[prop]) {
                _this3.ensure(prop);
              }
              resultProp = _this3.result.addProperty(prop);
              result = callbackResult[prop];
              newPropResult = {
                latestValue: resultProp.latestValue
              };
              if (result === true || result === null || result === '') {
                if (!resultProp.isValid && resultProp.failingRule === 'onValidateCallback') {
                  newPropResult.failingRule = null;
                  newPropResult.message = '';
                  newPropResult.isValid = true;
                  resultProp.setValidity(newPropResult, true);
                }
              } else {
                if (resultProp.isValid) {
                  newPropResult.failingRule = 'onValidateCallback';
                  newPropResult.isValid = false;
                  if (typeof result === 'string') {
                    newPropResult.message = result;
                  } else {
                    newPropResult.message = locale.translate(newPropResult.failingRule);
                  }
                  resultProp.setValidity(newPropResult, true);
                }
              }
            }
            _this3.result.checkValidity();
          }, function (a, b, c, d, e) {
            _this3.result.isValid = false;
            if (onValidateCallback.validationFunctionFailedCallback) {
              onValidateCallback.validationFunctionFailedCallback(a, b, c, d, e);
            }
          });
        });
      });
      promise = promise.then(function () {
        _this3.isValidating = false;
        if (_this3.result.isValid) {
          return Promise.resolve(_this3.result);
        }
        return Promise.reject(_this3.result);
      });
      return promise;
    };

    ValidationGroup.prototype.onValidate = function onValidate(validationFunction, validationFunctionFailedCallback) {
      this.onValidateCallbacks.push({ validationFunction: validationFunction, validationFunctionFailedCallback: validationFunctionFailedCallback });
      return this;
    };

    ValidationGroup.prototype.onPropertyValidate = function onPropertyValidate(validationFunction) {
      this.onPropertyValidationCallbacks.push(validationFunction);
      return this;
    };

    ValidationGroup.prototype.ensure = function ensure(bindingPath, configCallback) {
      this.builder.ensure(bindingPath, configCallback);
      this.onPropertyValidationCallbacks.forEach(function (callback) {
        callback(bindingPath);
      });
      return this;
    };

    ValidationGroup.prototype.isNotEmpty = function isNotEmpty() {
      return this.builder.isNotEmpty();
    };

    ValidationGroup.prototype.canBeEmpty = function canBeEmpty() {
      return this.builder.canBeEmpty();
    };

    ValidationGroup.prototype.isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(minimumValue) {
      return this.builder.isGreaterThanOrEqualTo(minimumValue);
    };

    ValidationGroup.prototype.isGreaterThan = function isGreaterThan(minimumValue) {
      return this.builder.isGreaterThan(minimumValue);
    };

    ValidationGroup.prototype.isBetween = function isBetween(minimumValue, maximumValue) {
      return this.builder.isBetween(minimumValue, maximumValue);
    };

    ValidationGroup.prototype.isLessThanOrEqualTo = function isLessThanOrEqualTo(maximumValue) {
      return this.builder.isLessThanOrEqualTo(maximumValue);
    };

    ValidationGroup.prototype.isLessThan = function isLessThan(maximumValue) {
      return this.builder.isLessThan(maximumValue);
    };

    ValidationGroup.prototype.isEqualTo = function isEqualTo(otherValue, otherValueLabel) {
      return this.builder.isEqualTo(otherValue, otherValueLabel);
    };

    ValidationGroup.prototype.isNotEqualTo = function isNotEqualTo(otherValue, otherValueLabel) {
      return this.builder.isNotEqualTo(otherValue, otherValueLabel);
    };

    ValidationGroup.prototype.isEmail = function isEmail() {
      return this.builder.isEmail();
    };

    ValidationGroup.prototype.isURL = function isURL() {
      return this.builder.isURL();
    };

    ValidationGroup.prototype.isIn = function isIn(collection) {
      return this.builder.isIn(collection);
    };

    ValidationGroup.prototype.hasMinLength = function hasMinLength(minimumValue) {
      return this.builder.hasMinLength(minimumValue);
    };

    ValidationGroup.prototype.hasMaxLength = function hasMaxLength(maximumValue) {
      return this.builder.hasMaxLength(maximumValue);
    };

    ValidationGroup.prototype.hasLengthBetween = function hasLengthBetween(minimumValue, maximumValue) {
      return this.builder.hasLengthBetween(minimumValue, maximumValue);
    };

    ValidationGroup.prototype.isNumber = function isNumber() {
      return this.builder.isNumber();
    };

    ValidationGroup.prototype.containsNoSpaces = function containsNoSpaces() {
      return this.builder.containsNoSpaces();
    };

    ValidationGroup.prototype.containsOnlyDigits = function containsOnlyDigits() {
      return this.builder.containsOnlyDigits();
    };

    ValidationGroup.prototype.containsOnly = function containsOnly(regex) {
      return this.builder.containsOnly(regex);
    };

    ValidationGroup.prototype.containsOnlyAlpha = function containsOnlyAlpha() {
      return this.builder.containsOnlyAlpha();
    };

    ValidationGroup.prototype.containsOnlyAlphaOrWhitespace = function containsOnlyAlphaOrWhitespace() {
      return this.builder.containsOnlyAlphaOrWhitespace();
    };

    ValidationGroup.prototype.containsOnlyLetters = function containsOnlyLetters() {
      return this.builder.containsOnlyAlpha();
    };

    ValidationGroup.prototype.containsOnlyLettersOrWhitespace = function containsOnlyLettersOrWhitespace() {
      return this.builder.containsOnlyAlphaOrWhitespace();
    };

    ValidationGroup.prototype.containsOnlyAlphanumerics = function containsOnlyAlphanumerics() {
      return this.builder.containsOnlyAlphanumerics();
    };

    ValidationGroup.prototype.containsOnlyAlphanumericsOrWhitespace = function containsOnlyAlphanumericsOrWhitespace() {
      return this.builder.containsOnlyAlphanumericsOrWhitespace();
    };

    ValidationGroup.prototype.isStrongPassword = function isStrongPassword(minimumComplexityLevel) {
      return this.builder.isStrongPassword(minimumComplexityLevel);
    };

    ValidationGroup.prototype.matches = function matches(regex) {
      return this.builder.matches(regex);
    };

    ValidationGroup.prototype.passes = function passes(customFunction, threshold) {
      return this.builder.passes(customFunction, threshold);
    };

    ValidationGroup.prototype.passesRule = function passesRule(validationRule) {
      return this.builder.passesRule(validationRule);
    };

    ValidationGroup.prototype.if = function _if(conditionExpression, threshold) {
      return this.builder.if(conditionExpression, threshold);
    };

    ValidationGroup.prototype.else = function _else() {
      return this.builder.else();
    };

    ValidationGroup.prototype.endIf = function endIf() {
      return this.builder.endIf();
    };

    ValidationGroup.prototype.switch = function _switch(conditionExpression) {
      return this.builder.switch(conditionExpression);
    };

    ValidationGroup.prototype.case = function _case(caseLabel) {
      return this.builder.case(caseLabel);
    };

    ValidationGroup.prototype.default = function _default() {
      return this.builder.default();
    };

    ValidationGroup.prototype.endSwitch = function endSwitch() {
      return this.builder.endSwitch();
    };

    ValidationGroup.prototype.withMessage = function withMessage(message) {
      return this.builder.withMessage(message);
    };

    return ValidationGroup;
  }();
});
define('aurelia-validation/validation-group-builder',['exports', './validation-rules-collection', './validation-property', './validation-config', './validation-rules'], function (exports, _validationRulesCollection, _validationProperty, _validationConfig, _validationRules) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationGroupBuilder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationGroupBuilder = exports.ValidationGroupBuilder = function () {
    function ValidationGroupBuilder(observerLocator, validationGroup) {
      _classCallCheck(this, ValidationGroupBuilder);

      this.observerLocator = observerLocator;
      this.validationRuleCollections = [];
      this.validationGroup = validationGroup;
    }

    ValidationGroupBuilder.prototype.ensure = function ensure(propertyName, configurationCallback) {
      var newValidationProperty = null;
      this.validationRuleCollections = [];

      for (var i = 0; i < this.validationGroup.validationProperties.length; i++) {
        if (this.validationGroup.validationProperties[i].propertyName === propertyName) {
          newValidationProperty = this.validationGroup.validationProperties[i];
          if (configurationCallback !== undefined && typeof configurationCallback === 'function') {
            throw Error('When creating validation rules on binding path ' + propertyName + ' a configuration callback function was provided, but validation rules have previously already been instantiated for this binding path');
          }
          break;
        }
      }
      if (newValidationProperty === null) {
        var propertyResult = this.validationGroup.result.addProperty(propertyName);
        var config = new _validationConfig.ValidationConfig(this.validationGroup.config);
        if (configurationCallback !== undefined && typeof configurationCallback === 'function') {
          configurationCallback(config);
        }
        newValidationProperty = new _validationProperty.ValidationProperty(this.observerLocator, propertyName, this.validationGroup, propertyResult, config);
        this.validationGroup.validationProperties.push(newValidationProperty);
      }
      this.validationRuleCollections.unshift(newValidationProperty.collectionOfValidationRules);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.isNotEmpty = function isNotEmpty() {
      this.validationRuleCollections[0].isNotEmpty();
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.canBeEmpty = function canBeEmpty() {
      this.validationRuleCollections[0].canBeEmpty();
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.isGreaterThan = function isGreaterThan(minimumValue) {
      return this.passesRule(new _validationRules.MinimumValueValidationRule(minimumValue));
    };

    ValidationGroupBuilder.prototype.isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(minimumValue) {
      return this.passesRule(new _validationRules.MinimumInclusiveValueValidationRule(minimumValue));
    };

    ValidationGroupBuilder.prototype.isBetween = function isBetween(minimumValue, maximumValue) {
      return this.passesRule(new _validationRules.BetweenValueValidationRule(minimumValue, maximumValue));
    };

    ValidationGroupBuilder.prototype.isIn = function isIn(collection) {
      return this.passesRule(new _validationRules.InCollectionValidationRule(collection));
    };

    ValidationGroupBuilder.prototype.isLessThan = function isLessThan(maximumValue) {
      return this.passesRule(new _validationRules.MaximumValueValidationRule(maximumValue));
    };

    ValidationGroupBuilder.prototype.isLessThanOrEqualTo = function isLessThanOrEqualTo(maximumValue) {
      return this.passesRule(new _validationRules.MaximumInclusiveValueValidationRule(maximumValue));
    };

    ValidationGroupBuilder.prototype.isEqualTo = function isEqualTo(otherValue, otherValueLabel) {
      if (!otherValueLabel) {
        return this.passesRule(new _validationRules.EqualityValidationRule(otherValue));
      }
      return this.passesRule(new _validationRules.EqualityWithOtherLabelValidationRule(otherValue, otherValueLabel));
    };

    ValidationGroupBuilder.prototype.isNotEqualTo = function isNotEqualTo(otherValue, otherValueLabel) {
      if (!otherValueLabel) {
        return this.passesRule(new _validationRules.InEqualityValidationRule(otherValue));
      }
      return this.passesRule(new _validationRules.InEqualityWithOtherLabelValidationRule(otherValue, otherValueLabel));
    };

    ValidationGroupBuilder.prototype.isEmail = function isEmail() {
      return this.passesRule(new _validationRules.EmailValidationRule());
    };

    ValidationGroupBuilder.prototype.isURL = function isURL() {
      return this.passesRule(new _validationRules.URLValidationRule());
    };

    ValidationGroupBuilder.prototype.hasMinLength = function hasMinLength(minimumValue) {
      return this.passesRule(new _validationRules.MinimumLengthValidationRule(minimumValue));
    };

    ValidationGroupBuilder.prototype.hasMaxLength = function hasMaxLength(maximumValue) {
      return this.passesRule(new _validationRules.MaximumLengthValidationRule(maximumValue));
    };

    ValidationGroupBuilder.prototype.hasLengthBetween = function hasLengthBetween(minimumValue, maximumValue) {
      return this.passesRule(new _validationRules.BetweenLengthValidationRule(minimumValue, maximumValue));
    };

    ValidationGroupBuilder.prototype.isNumber = function isNumber() {
      return this.passesRule(new _validationRules.NumericValidationRule());
    };

    ValidationGroupBuilder.prototype.containsNoSpaces = function containsNoSpaces() {
      return this.passesRule(new _validationRules.NoSpacesValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyDigits = function containsOnlyDigits() {
      return this.passesRule(new _validationRules.DigitValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlpha = function containsOnlyAlpha() {
      return this.passesRule(new _validationRules.AlphaValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlphaOrWhitespace = function containsOnlyAlphaOrWhitespace() {
      return this.passesRule(new _validationRules.AlphaOrWhitespaceValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlphanumerics = function containsOnlyAlphanumerics() {
      return this.passesRule(new _validationRules.AlphaNumericValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlphanumericsOrWhitespace = function containsOnlyAlphanumericsOrWhitespace() {
      return this.passesRule(new _validationRules.AlphaNumericOrWhitespaceValidationRule());
    };

    ValidationGroupBuilder.prototype.isStrongPassword = function isStrongPassword(minimumComplexityLevel) {
      if (minimumComplexityLevel === 4) {
        return this.passesRule(new _validationRules.StrongPasswordValidationRule());
      }
      return this.passesRule(new _validationRules.MediumPasswordValidationRule(minimumComplexityLevel));
    };

    ValidationGroupBuilder.prototype.containsOnly = function containsOnly(regex) {
      return this.passesRule(new _validationRules.ContainsOnlyValidationRule(regex));
    };

    ValidationGroupBuilder.prototype.matches = function matches(regex) {
      return this.passesRule(new _validationRules.RegexValidationRule(regex));
    };

    ValidationGroupBuilder.prototype.passes = function passes(customFunction, threshold) {
      return this.passesRule(new _validationRules.CustomFunctionValidationRule(customFunction, threshold));
    };

    ValidationGroupBuilder.prototype.passesRule = function passesRule(validationRule) {
      this.validationRuleCollections[0].addValidationRule(validationRule);
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.checkLast = function checkLast() {
      var validationProperty = this.validationGroup.validationProperties[this.validationGroup.validationProperties.length - 1];
      validationProperty.validateCurrentValue(false);
    };

    ValidationGroupBuilder.prototype.withMessage = function withMessage(message) {
      this.validationRuleCollections[0].withMessage(message);
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.if = function _if(conditionExpression) {
      var conditionalCollection = new _validationRulesCollection.SwitchCaseValidationRulesCollection(conditionExpression);
      conditionalCollection.case(true);
      this.validationRuleCollections[0].addValidationRuleCollection(conditionalCollection);
      this.validationRuleCollections.unshift(conditionalCollection);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.else = function _else() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'else\'');
      }
      this.validationRuleCollections[0].default();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.endIf = function endIf() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'endIf\'');
      }
      this.validationRuleCollections.shift();
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.switch = function _switch(conditionExpression) {
      var _this = this;

      var condition = conditionExpression;
      if (condition === undefined) {
        (function () {
          var observer = _this.validationGroup.validationProperties[_this.validationGroup.validationProperties.length - 1].observer;
          condition = function condition() {
            return observer.getValue();
          };
        })();
      }
      var conditionalCollection = new _validationRulesCollection.SwitchCaseValidationRulesCollection(condition);
      this.validationRuleCollections[0].addValidationRuleCollection(conditionalCollection);
      this.validationRuleCollections.unshift(conditionalCollection);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.case = function _case(caseLabel) {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'case\'');
      }
      this.validationRuleCollections[0].case(caseLabel);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.default = function _default() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'case\'');
      }
      this.validationRuleCollections[0].default();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.endSwitch = function endSwitch() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'endIf\'');
      }
      this.validationRuleCollections.shift();
      this.checkLast();
      return this.validationGroup;
    };

    return ValidationGroupBuilder;
  }();
});
define('aurelia-validation/validation-rules-collection',['exports', './utilities', './validation-locale'], function (exports, _utilities, _validationLocale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SwitchCaseValidationRulesCollection = exports.ValidationRulesCollection = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationRulesCollection = exports.ValidationRulesCollection = function () {
    function ValidationRulesCollection(config) {
      _classCallCheck(this, ValidationRulesCollection);

      this.isRequired = config ? config.getValue('allPropertiesAreMandatory') : false;
      this.validationRules = [];
      this.validationCollections = [];
      this.isRequiredMessage = null;
    }

    ValidationRulesCollection.prototype.validate = function validate(newValue, locale) {
      var executeRules = true;
      var thisMessage = void 0;
      var checks = void 0;
      if (locale === undefined) {
        locale = _validationLocale.ValidationLocale.Repository.default;
      }
      newValue = _utilities.Utilities.getValue(newValue);
      if (this.isRequiredMessage) {
        thisMessage = typeof this.isRequiredMessage === 'function' ? this.isRequiredMessage(newValue) : this.isRequiredMessage;
      } else {
        thisMessage = locale.translate('isRequired');
      }
      if (_utilities.Utilities.isEmptyValue(newValue)) {
        if (this.isRequired) {
          return Promise.resolve({
            isValid: false,
            message: thisMessage,
            failingRule: 'isRequired',
            latestValue: newValue
          });
        }
        executeRules = false;
      }
      checks = Promise.resolve({
        isValid: true,
        message: '',
        failingRule: null,
        latestValue: newValue
      });
      if (executeRules) {
        this.validationRules.forEach(function (rule) {
          checks = checks.then(function (previousRuleResult) {
            if (previousRuleResult.isValid === false) {
              return previousRuleResult;
            }
            return rule.validate(newValue, locale).then(function (thisRuleResult) {
              if (thisRuleResult === false) {
                return {
                  isValid: false,
                  message: rule.explain(),
                  failingRule: rule.ruleName,
                  latestValue: newValue
                };
              }
              if (!previousRuleResult.isValid) {
                throw Error("ValidationRulesCollection.validate caught an unexpected result while validating it's chain of rules.");
              }
              return previousRuleResult;
            });
          });
        });
      }
      this.validationCollections.forEach(function (validationCollection) {
        checks = checks.then(function (previousValidationResult) {
          if (previousValidationResult.isValid) {
            return validationCollection.validate(newValue, locale);
          }
          return previousValidationResult;
        });
      });
      return checks;
    };

    ValidationRulesCollection.prototype.addValidationRule = function addValidationRule(validationRule) {
      if (validationRule.validate === undefined) {
        throw new Error("That's not a valid validationRule");
      }
      this.validationRules.push(validationRule);
    };

    ValidationRulesCollection.prototype.addValidationRuleCollection = function addValidationRuleCollection(validationRulesCollection) {
      this.validationCollections.push(validationRulesCollection);
    };

    ValidationRulesCollection.prototype.isNotEmpty = function isNotEmpty() {
      this.isRequired = true;
    };

    ValidationRulesCollection.prototype.canBeEmpty = function canBeEmpty() {
      this.isRequired = false;
    };

    ValidationRulesCollection.prototype.withMessage = function withMessage(message) {
      if (this.validationRules.length === 0) {
        this.isRequiredMessage = message;
      } else {
        this.validationRules[this.validationRules.length - 1].withMessage(message);
      }
    };

    return ValidationRulesCollection;
  }();

  var SwitchCaseValidationRulesCollection = exports.SwitchCaseValidationRulesCollection = function () {
    function SwitchCaseValidationRulesCollection(conditionExpression, config) {
      _classCallCheck(this, SwitchCaseValidationRulesCollection);

      this.conditionExpression = conditionExpression;
      this.config = config;
      this.innerCollections = [];
      this.defaultCollection = new ValidationRulesCollection(this.config);
      this.caseLabel = '';
      this.defaultCaseLabel = { description: 'this is the case label for \'default\'' };
    }

    SwitchCaseValidationRulesCollection.prototype.case = function _case(caseLabel) {
      this.caseLabel = caseLabel;
      this.getCurrentCollection(caseLabel, true);
    };

    SwitchCaseValidationRulesCollection.prototype.default = function _default() {
      this.caseLabel = this.defaultCaseLabel;
    };

    SwitchCaseValidationRulesCollection.prototype.getCurrentCollection = function getCurrentCollection(caseLabel) {
      var createIfNotExists = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (caseLabel === this.defaultCaseLabel) {
        return this.defaultCollection;
      }
      var currentCollection = null;
      for (var i = 0; i < this.innerCollections.length; i++) {
        currentCollection = this.innerCollections[i];
        if (currentCollection.caseLabel === caseLabel) {
          return currentCollection.collection;
        }
      }
      if (createIfNotExists) {
        currentCollection = {
          caseLabel: caseLabel,
          collection: new ValidationRulesCollection(this.config)
        };
        this.innerCollections.push(currentCollection);
        return currentCollection.collection;
      }
      return null;
    };

    SwitchCaseValidationRulesCollection.prototype.validate = function validate(newValue, locale) {
      var collection = this.getCurrentCollection(this.conditionExpression(newValue));
      if (collection !== null) {
        return collection.validate(newValue, locale);
      }
      return this.defaultCollection.validate(newValue, locale);
    };

    SwitchCaseValidationRulesCollection.prototype.addValidationRule = function addValidationRule(validationRule) {
      var currentCollection = this.getCurrentCollection(this.caseLabel, true);
      currentCollection.addValidationRule(validationRule);
    };

    SwitchCaseValidationRulesCollection.prototype.addValidationRuleCollection = function addValidationRuleCollection(validationRulesCollection) {
      var currentCollection = this.getCurrentCollection(this.caseLabel, true);
      currentCollection.addValidationRuleCollection(validationRulesCollection);
    };

    SwitchCaseValidationRulesCollection.prototype.isNotEmpty = function isNotEmpty() {
      var collection = this.getCurrentCollection(this.caseLabel);
      if (collection !== null) {
        collection.isNotEmpty();
      } else {
        this.defaultCollection.isNotEmpty();
      }
    };

    SwitchCaseValidationRulesCollection.prototype.canBeEmpty = function canBeEmpty() {
      var collection = this.getCurrentCollection(this.caseLabel);
      if (collection !== null) {
        collection.canBeEmpty();
      } else {
        this.defaultCollection.canBeEmpty();
      }
    };

    SwitchCaseValidationRulesCollection.prototype.withMessage = function withMessage(message) {
      var collection = this.getCurrentCollection(this.caseLabel);
      if (collection !== null) {
        collection.withMessage(message);
      } else {
        this.defaultCollection.withMessage(message);
      }
    };

    return SwitchCaseValidationRulesCollection;
  }();
});
define('aurelia-validation/validation-property',['exports', './validation-rules-collection', './path-observer', './debouncer'], function (exports, _validationRulesCollection, _pathObserver, _debouncer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationProperty = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationProperty = exports.ValidationProperty = function () {
    function ValidationProperty(observerLocator, propertyName, validationGroup, propertyResult, config) {
      var _this = this;

      _classCallCheck(this, ValidationProperty);

      this.propertyResult = propertyResult;
      this.propertyName = propertyName;
      this.validationGroup = validationGroup;
      this.collectionOfValidationRules = new _validationRulesCollection.ValidationRulesCollection(config);
      this.config = config;
      this.latestValue = undefined;
      this.observer = new _pathObserver.PathObserver(observerLocator, validationGroup.subject, propertyName).getObserver();
      this.debouncer = new _debouncer.Debouncer(config.getDebounceTimeout());
      this.subscription = this.observer.subscribe(function () {
        _this.debouncer.debounce(function () {
          var newValue = _this.observer.getValue();
          if (newValue !== _this.latestValue) {
            _this.validate(newValue, true);
          }
        });
      });
      this.dependencyObservers = [];
      var dependencies = this.config.getDependencies();
      for (var i = 0; i < dependencies.length; i++) {
        var dependencyObserver = new _pathObserver.PathObserver(observerLocator, validationGroup.subject, dependencies[i]).getObserver();
        dependencyObserver.subscribe(function () {
          _this.debouncer.debounce(function () {
            _this.validateCurrentValue(true);
          });
        });
        this.dependencyObservers.push(dependencyObserver);
      }
    }

    ValidationProperty.prototype.addValidationRule = function addValidationRule(validationRule) {
      if (validationRule.validate === undefined) {
        throw new Error("That's not a valid validationRule");
      }
      this.collectionOfValidationRules.addValidationRule(validationRule);
      this.validateCurrentValue(false);
    };

    ValidationProperty.prototype.validateCurrentValue = function validateCurrentValue(forceDirty, forceExecution) {
      return this.validate(this.observer.getValue(), forceDirty, forceExecution);
    };

    ValidationProperty.prototype.clear = function clear() {
      this.latestValue = this.observer.getValue();
      this.propertyResult.clear();
    };

    ValidationProperty.prototype.destroy = function destroy() {
      if (this.subscription) {
        this.subscription();
      }
    };

    ValidationProperty.prototype.validate = function validate(newValue, shouldBeDirty, forceExecution) {
      var _this2 = this;

      if (!this.propertyResult.isDirty && shouldBeDirty || this.latestValue !== newValue || forceExecution) {
        this.latestValue = newValue;
        return this.config.locale().then(function (locale) {
          return _this2.collectionOfValidationRules.validate(newValue, locale).then(function (validationResponse) {
            if (_this2.latestValue === validationResponse.latestValue) {
              _this2.propertyResult.setValidity(validationResponse, shouldBeDirty);
            }
            return validationResponse.isValid;
          }).catch(function (err) {
            throw Error('Unexpected behavior: a validation-rules-collection should always fulfil');
          });
        }, function () {
          throw Error('An exception occurred while trying to load the locale');
        });
      }
    };

    return ValidationProperty;
  }();
});
define('aurelia-validation/path-observer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PathObserver = exports.PathObserver = function () {
    function PathObserver(observerLocator, subject, path) {
      _classCallCheck(this, PathObserver);

      this.observerLocator = observerLocator;
      this.path = path.split('.');
      this.subject = subject;
      this.observers = [];
      this.callbacks = [];
      if (this.path.length > 1) {
        this.observeParts();
      }
    }

    PathObserver.prototype.observeParts = function observeParts(propertyName) {
      var _this = this;

      var currentSubject = this.subject;
      var observersAreComplete = void 0;

      if (propertyName !== undefined && propertyName !== null) {
        for (var i = this.observers.length - 1; i >= 0; i--) {
          var currentObserver = this.observers[i];
          var observer = void 0;
          if (currentObserver.propertyName === propertyName) {
            break;
          }
          observer = this.observers.pop();
          if (observer && observer.subscription) {
            observer.subscription();
          }
        }
      }

      observersAreComplete = this.observers.length === this.path.length;

      var _loop = function _loop(_i) {
        var observer = _this.observers[_i];
        var currentPath = _this.path[_i];
        var subscription = void 0;
        var currentValue = void 0;
        if (!observer) {
          observer = _this.observerLocator.getObserver(currentSubject, currentPath);
          _this.observers.push(observer);
          subscription = observer.subscribe(function (newValue, oldValue) {
            _this.observeParts(observer.propertyName);
          });
          observer.subscription = subscription;
        }
        currentValue = observer.getValue();
        if (currentValue === undefined || currentValue === null) {
          return 'break';
        } else {
          currentSubject = currentValue;
        }
      };

      for (var _i = 0; _i < this.path.length; _i++) {
        var _ret = _loop(_i);

        if (_ret === 'break') break;
      }

      if (!observersAreComplete && this.observers.length === this.path.length) {
        var actualObserver = this.observers[this.observers.length - 1];
        for (var _i2 = 0; _i2 < this.callbacks.length; _i2++) {
          actualObserver.subscribe(this.callbacks[_i2]);
        }
      }
    };

    PathObserver.prototype.observePart = function observePart(part) {
      if (part !== this.path[this.path.length - 1]) {
        this.observeParts();
      }
    };

    PathObserver.prototype.getObserver = function getObserver() {
      if (this.path.length === 1) {
        this.subject[this.path[0]];
        return this.observerLocator.getObserver(this.subject, this.path[0]);
      }
      return this;
    };

    PathObserver.prototype.getValue = function getValue() {
      var expectedSubject = this.subject;
      for (var i = 0; this.path.length; i++) {
        var currentObserver = this.observers[i];
        if (currentObserver === null || currentObserver === undefined) {
          this.observeParts(this.path[i]);
          currentObserver = this.observers[i];

          if (currentObserver === null || currentObserver === undefined) {
            break;
          }
        }

        if (currentObserver.obj !== expectedSubject) {
          this.observeParts(this.path[i - 1]);
          break;
        }
        expectedSubject = currentObserver.getValue();
      }

      if (this.observers.length !== this.path.length) {
        return undefined;
      }
      var value = this.observers[this.observers.length - 1].getValue();
      return value;
    };

    PathObserver.prototype.subscribe = function subscribe(callback) {
      var _this2 = this;

      this.callbacks.unshift(callback);
      if (this.observers.length === this.path.length) {
        this.subscription = this.observers[this.observers.length - 1].subscribe(callback);
        return function () {
          return _this2.unsubscribe();
        };
      }
    };

    PathObserver.prototype.unsubscribe = function unsubscribe() {
      this.callbacks = [];
      if (this.subscription) {
        this.subscription();
      }
      for (var i = this.observers.length - 1; i >= 0; i--) {
        var observer = this.observers.pop();
        if (observer && observer.subscription) {
          observer.subscription();
        }
      }
    };

    return PathObserver;
  }();
});
define('aurelia-validation/debouncer',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Debouncer = exports.Debouncer = function () {
    function Debouncer(debounceTimeout) {
      _classCallCheck(this, Debouncer);

      this.currentFunction = null;
      this.debounceTimeout = debounceTimeout;
    }

    Debouncer.prototype.debounce = function debounce(func) {
      var _this = this;

      this.currentFunction = func;
      setTimeout(function () {
        if (func !== null && func !== undefined) {
          if (func === _this.currentFunction) {
            _this.currentFunction = null;
            func();
          }
        }
      }, this.debounceTimeout);
    };

    return Debouncer;
  }();
});
define('aurelia-validation/decorators',['exports', 'aurelia-metadata'], function (exports, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationMetadata = undefined;
  exports.ensure = ensure;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var ValidationMetadata = exports.ValidationMetadata = (_temp = _class = function () {
    function ValidationMetadata() {
      _classCallCheck(this, ValidationMetadata);

      this.properties = [];
    }

    ValidationMetadata.prototype.getOrCreateProperty = function getOrCreateProperty(propertyName) {
      var property = this.properties.find(function (x) {
        return x.propertyName === propertyName;
      });
      if (property === undefined) {
        property = new ValidationPropertyMetadata(propertyName);
        this.properties.push(property);
      }
      return property;
    };

    ValidationMetadata.prototype.setup = function setup(validation) {
      this.properties.forEach(function (property) {
        property.setup(validation);
      });
    };

    return ValidationMetadata;
  }(), _class.metadataKey = 'aurelia:validation', _temp);

  var ValidationPropertyMetadata = function () {
    function ValidationPropertyMetadata(propertyName) {
      _classCallCheck(this, ValidationPropertyMetadata);

      this.propertyName = propertyName;
      this.setupSteps = [];
    }

    ValidationPropertyMetadata.prototype.addSetupStep = function addSetupStep(setupStep) {
      this.setupSteps.push(setupStep);
    };

    ValidationPropertyMetadata.prototype.setup = function setup(validation) {
      validation.ensure(this.propertyName);
      this.setupSteps.forEach(function (setupStep) {
        setupStep(validation);
      });
    };

    return ValidationPropertyMetadata;
  }();

  function ensure(setupStep) {
    console.warn('The ensure decorator has been deprecated and will be removed in the next release.');
    return function (target, propertyName) {
      var validationMetadata = _aureliaMetadata.metadata.getOrCreateOwn(ValidationMetadata.metadataKey, ValidationMetadata, target);
      var property = validationMetadata.getOrCreateProperty(propertyName);
      property.addSetupStep(setupStep);
    };
  }
});
define('aurelia-validation/validate-custom-attribute',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidateCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var ValidateCustomAttribute = exports.ValidateCustomAttribute = (_dec = (0, _aureliaTemplating.customAttribute)('validate'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function ValidateCustomAttribute(element) {
      _classCallCheck(this, ValidateCustomAttribute);

      this.element = element;
      this.processedValidation = null;
      this.viewStrategy = null;
    }

    ValidateCustomAttribute.prototype.valueChanged = function valueChanged(newValue) {
      if (this.value === null || this.value === undefined) {
        return;
      }
      this.processedValidation = this.value;
      if (typeof this.value !== 'string') {
        this.subscribeChangedHandlers(this.element);
      }
      return;
    };

    ValidateCustomAttribute.prototype.subscribeChangedHandlers = function subscribeChangedHandlers(currentElement) {
      var _this = this;

      var viewStrategy = this.value.config.getViewStrategy();
      var validationProperty = viewStrategy.getValidationProperty(this.value, currentElement);
      var children = currentElement.children;
      this.viewStrategy = viewStrategy;
      if (validationProperty !== null && validationProperty !== undefined) {
        this.viewStrategy.prepareElement(validationProperty, currentElement);
        validationProperty.onValidate(function (vp) {
          _this.viewStrategy.updateElement(vp, currentElement);
        });
      }
      for (var i = 0; i < children.length; i++) {
        this.subscribeChangedHandlers(children[i]);
      }
    };

    ValidateCustomAttribute.prototype.attached = function attached() {
      if (this.processedValidation === null || this.processedValidation === undefined) {
        this.valueChanged(this.value);
      }
    };

    return ValidateCustomAttribute;
  }()) || _class) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"nav-bar.html\"></require>\r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  \r\n  <nav-bar router.bind=\"router\"></nav-bar>\r\n\r\n  <div class=\"page-host\">\r\n    <router-view></router-view>\r\n  </div>\r\n</template>\r\n"; });
define('text!customers.html', ['module'], function(module) { module.exports = "<template>\r\n  <section >\r\n      <h2>${heading}</h2>\r\n      <datatable\r\n        columns=\"id, firstName as FirstName\"\r\n        repository.bind=\"repository\"\r\n        search-column=\"firstName\"\r\n        searchable\r\n        sortable\r\n      ></datatable>\r\n  </section>\r\n</template>\r\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-home\"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n          <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template>\r\n  <section class=\"au-animate\">\r\n    <h2>${heading}</h2>\r\n    <form role=\"form\" submit.delegate=\"submit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"fn\">First Name</label>\r\n        <input type=\"text\" value.bind=\"firstName\" class=\"form-control\" id=\"fn\" placeholder=\"first name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"ln\">Last Name</label>\r\n        <input type=\"text\" value.bind=\"lastName\" class=\"form-control\" id=\"ln\" placeholder=\"last name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Full Name</label>\r\n        <p class=\"help-block\">${fullName | upper}</p>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </form>\r\n  </section>\r\n</template>\r\n"; });
define('text!modules/customer/edit.html', ['module'], function(module) { module.exports = "<template>\r\n<div class=\"container\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"panel-title\">\r\n                <h3>Editing ${customer.lastName}</h3>\r\n            </div>\r\n            <button class=\"btn btn-info\"\r\n            click.delegate=\"goBack()\">\r\n            Back\r\n            </button>\r\n            <button class=\"btn btn-info\"\r\n            click.delegate=\"cancel()\"\r\n            disabled.bind=\"isUnchanged\">\r\n            Cancel\r\n            </button>\r\n            <button class=\"btn btn-info\"\r\n            click.delegate=\"save()\"\r\n            disabled.bind=\"isUnchanged || isInvalid\">\r\n            Save\r\n            </button>\r\n            <button class=\"btn btn-info\"\r\n            click.delegate=\"delete()\"\r\n            disabled.bind=\"isNew || !isUnchanged\">\r\n            Delete\r\n            </button>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n      <form class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">First Name</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" placeholder=\"First Name\"  class=\"form-control\"\r\n                value.bind=\"customer.firstName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">Last Name</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\"\r\n                value.bind=\"customer.lastName\" />\r\n            </div>\r\n        </div>\r\n    </form>\r\n            <!-- disabled.bind=\"!validation.result.isValid\" -->\r\n        </div>\r\n    </div>\r\n</div>\r\n</template>\r\n"; });
define('text!modules/customer/index.html', ['module'], function(module) { module.exports = "<template>\r\n\t<section >\r\n\t\t<router-view></router-view>\r\n\t</section>\r\n</template>\r\n"; });
define('text!modules/customer/list.html', ['module'], function(module) { module.exports = "<template>\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <div class=\"panel-title\">\n                <h3>Customers</h3>\n            </div>\n            <button class=\"btn btn-info\"\n            click.delegate=\"new()\">\n            New\n            </button>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-condensed table-hover\">\n                    <thead>\n                        <tr>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr repeat.for=\"customer of customers\"\n                            click.delegate=\"$parent.gotoCustomer(customer)\">\n                            <td>\n                                <a click.delegate=\"$parent.gotoCustomer(customer)\">\n                                ${customer.firstName}\n                            </a></td>\n                            <td>${customer.lastName}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <association-select resource='customers' property=\"lastName\"><association-select>\n    </div>\n</div>\n</template>\n"; });
define('text!modules/users/profile.html', ['module'], function(module) { module.exports = "<template>\r\n  <section class=\"au-animate\">\r\n\r\n<div class=\"container\">\r\n  <div class=\"panel panel-default col-md-6\">\r\n    <div class=\"panel-heading\">Profile</div>\r\n    <div class=\"panel-body\">\r\n      <legend><i class=\"ion-clipboard\"></i> Edit My Profile</legend>\r\n      <form method=\"post\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Profile Picture</label>\r\n          <img class=\"profile-picture\" src.bind=\"profile.picture || 'http://placehold.it/100x100'\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\"><i class=\"ion-person\"></i> Name</label>\r\n          <input type=\"text\" class=\"form-control\" value.bind=\"profile.displayName\"  />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\"><i class=\"ion-at\"></i> Email Address</label>\r\n          <input type=\"email\" class=\"form-control\" value.bind=\"profile.email\" />\r\n        </div>\r\n        <button class=\"btn btn-lg btn-success\"\r\n          click.delegate=\"update()\"\r\n          disabled.bind=\"isUnchanged\">Update Information</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  </section>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map