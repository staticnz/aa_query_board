define(["react", "react-dom", "TFS/WorkItemTracking/RestClient", "TFS/WorkItemTracking/Contracts", "TFS/Work/RestClient", "TFS/WorkItemTracking/Services"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_76__) {
    return function(modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0)
    }([function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3), __webpack_require__(60), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, ReactDOM, react_redux_1, QueryBasedBoardContainer_1, Store_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function init(containerId, tabContext) {
                console.log("index - init");
                ReactDOM.render(React.createElement(react_redux_1.Provider, {
                    store: Store_1.store
                }, React.createElement(QueryBasedBoardContainer_1.QueryBasedBoardPageContainer, {
                    queryId: tabContext.query.id,
                    queryName: tabContext.query.name,
                    queryPath: tabContext.query.path
                })), document.getElementById(containerId))
            }
            exports.init = init
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_2__
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;
        var _Provider = __webpack_require__(4);
        var _Provider2 = _interopRequireDefault(_Provider);
        var _connectAdvanced = __webpack_require__(16);
        var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
        var _connect = __webpack_require__(20);
        var _connect2 = _interopRequireDefault(_connect);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        exports.Provider = _Provider2.default;
        exports.createProvider = _Provider.createProvider;
        exports.connectAdvanced = _connectAdvanced2.default;
        exports.connect = _connect2.default
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.createProvider = createProvider;
            var _react = __webpack_require__(1);
            var _propTypes = __webpack_require__(6);
            var _propTypes2 = _interopRequireDefault(_propTypes);
            var _PropTypes = __webpack_require__(14);
            var _warning = __webpack_require__(15);
            var _warning2 = _interopRequireDefault(_warning);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
            }
            var didWarnAboutReceivingStore = false;

            function warnAboutReceivingStore() {
                if (didWarnAboutReceivingStore) {
                    return
                }
                didWarnAboutReceivingStore = true;
                (0, _warning2.default)("<Provider> does not support changing `store` on the fly. " + "It is most likely that you see this error because you updated to " + "Redux 2.x and React Redux 2.x which no longer hot reload reducers " + "automatically. See https://github.com/reactjs/react-redux/releases/" + "tag/v2.0.0 for the migration instructions.")
            }

            function createProvider() {
                var _Provider$childContex;
                var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "store";
                var subKey = arguments[1];
                var subscriptionKey = subKey || storeKey + "Subscription";
                var Provider = function(_Component) {
                    _inherits(Provider, _Component);
                    Provider.prototype.getChildContext = function getChildContext() {
                        var _ref;
                        return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref
                    };

                    function Provider(props, context) {
                        _classCallCheck(this, Provider);
                        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
                        _this[storeKey] = props.store;
                        return _this
                    }
                    Provider.prototype.render = function render() {
                        return _react.Children.only(this.props.children)
                    };
                    return Provider
                }(_react.Component);
                if (process.env.NODE_ENV !== "production") {
                    Provider.prototype.componentWillReceiveProps = function(nextProps) {
                        if (this[storeKey] !== nextProps.store) {
                            warnAboutReceivingStore()
                        }
                    }
                }
                Provider.propTypes = {
                    store: _PropTypes.storeShape.isRequired,
                    children: _propTypes2.default.element.isRequired
                };
                Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
                return Provider
            }
            exports.default = createProvider()
        }).call(exports, __webpack_require__(5))
    }, function(module, exports) {
        var process = module.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }

        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }(function() {
            try {
                if (typeof setTimeout === "function") {
                    cachedSetTimeout = setTimeout
                } else {
                    cachedSetTimeout = defaultSetTimout
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout
            }
            try {
                if (typeof clearTimeout === "function") {
                    cachedClearTimeout = clearTimeout
                } else {
                    cachedClearTimeout = defaultClearTimeout
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout
            }
        })();

        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                return setTimeout(fun, 0)
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0)
            }
            try {
                return cachedSetTimeout(fun, 0)
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0)
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0)
                }
            }
        }

        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                return clearTimeout(marker)
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker)
            }
            try {
                return cachedClearTimeout(marker)
            } catch (e) {
                try {
                    return cachedClearTimeout.call(null, marker)
                } catch (e) {
                    return cachedClearTimeout.call(this, marker)
                }
            }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue)
            } else {
                queueIndex = -1
            }
            if (queue.length) {
                drainQueue()
            }
        }

        function drainQueue() {
            if (draining) {
                return
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run()
                    }
                }
                queueIndex = -1;
                len = queue.length
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout)
        }
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i]
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue)
            }
        };

        function Item(fun, array) {
            this.fun = fun;
            this.array = array
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};

        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
            return []
        };
        process.binding = function(name) {
            throw new Error("process.binding is not supported")
        };
        process.cwd = function() {
            return "/"
        };
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported")
        };
        process.umask = function() {
            return 0
        }
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            if (process.env.NODE_ENV !== "production") {
                var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
                var isValidElement = function(object) {
                    return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
                };
                var throwOnDirectAccess = true;
                module.exports = __webpack_require__(7)(isValidElement, throwOnDirectAccess)
            } else {
                module.exports = __webpack_require__(13)()
            }
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            var emptyFunction = __webpack_require__(8);
            var invariant = __webpack_require__(9);
            var warning = __webpack_require__(10);
            var ReactPropTypesSecret = __webpack_require__(11);
            var checkPropTypes = __webpack_require__(12);
            module.exports = function(isValidElement, throwOnDirectAccess) {
                var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";

                function getIteratorFn(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if (typeof iteratorFn === "function") {
                        return iteratorFn
                    }
                }
                var ANONYMOUS = "<<anonymous>>";
                var ReactPropTypes = {
                    array: createPrimitiveTypeChecker("array"),
                    bool: createPrimitiveTypeChecker("boolean"),
                    func: createPrimitiveTypeChecker("function"),
                    number: createPrimitiveTypeChecker("number"),
                    object: createPrimitiveTypeChecker("object"),
                    string: createPrimitiveTypeChecker("string"),
                    symbol: createPrimitiveTypeChecker("symbol"),
                    any: createAnyTypeChecker(),
                    arrayOf: createArrayOfTypeChecker,
                    element: createElementTypeChecker(),
                    instanceOf: createInstanceTypeChecker,
                    node: createNodeChecker(),
                    objectOf: createObjectOfTypeChecker,
                    oneOf: createEnumTypeChecker,
                    oneOfType: createUnionTypeChecker,
                    shape: createShapeTypeChecker
                };

                function is(x, y) {
                    if (x === y) {
                        return x !== 0 || 1 / x === 1 / y
                    } else {
                        return x !== x && y !== y
                    }
                }

                function PropTypeError(message) {
                    this.message = message;
                    this.stack = ""
                }
                PropTypeError.prototype = Error.prototype;

                function createChainableTypeChecker(validate) {
                    if (process.env.NODE_ENV !== "production") {
                        var manualPropTypeCallCache = {};
                        var manualPropTypeWarningCount = 0
                    }

                    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                        componentName = componentName || ANONYMOUS;
                        propFullName = propFullName || propName;
                        if (secret !== ReactPropTypesSecret) {
                            if (throwOnDirectAccess) {
                                invariant(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use `PropTypes.checkPropTypes()` to call them. " + "Read more at http://fb.me/use-check-prop-types")
                            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
                                var cacheKey = componentName + ":" + propName;
                                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                                    warning(false, "You are manually calling a React.PropTypes validation " + "function for the `%s` prop on `%s`. This is deprecated " + "and will throw in the standalone `prop-types` package. " + "You may be seeing this warning due to a third-party PropTypes " + "library. See https://fb.me/react-warning-dont-call-proptypes " + "for details.", propFullName, componentName);
                                    manualPropTypeCallCache[cacheKey] = true;
                                    manualPropTypeWarningCount++
                                }
                            }
                        }
                        if (props[propName] == null) {
                            if (isRequired) {
                                if (props[propName] === null) {
                                    return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."))
                                }
                                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."))
                            }
                            return null
                        } else {
                            return validate(props, propName, componentName, location, propFullName)
                        }
                    }
                    var chainedCheckType = checkType.bind(null, false);
                    chainedCheckType.isRequired = checkType.bind(null, true);
                    return chainedCheckType
                }

                function createPrimitiveTypeChecker(expectedType) {
                    function validate(props, propName, componentName, location, propFullName, secret) {
                        var propValue = props[propName];
                        var propType = getPropType(propValue);
                        if (propType !== expectedType) {
                            var preciseType = getPreciseType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."))
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function createAnyTypeChecker() {
                    return createChainableTypeChecker(emptyFunction.thatReturnsNull)
                }

                function createArrayOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (typeof typeChecker !== "function") {
                            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.")
                        }
                        var propValue = props[propName];
                        if (!Array.isArray(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."))
                        }
                        for (var i = 0; i < propValue.length; i++) {
                            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                            if (error instanceof Error) {
                                return error
                            }
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function createElementTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."))
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function createInstanceTypeChecker(expectedClass) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (!(props[propName] instanceof expectedClass)) {
                            var expectedClassName = expectedClass.name || ANONYMOUS;
                            var actualClassName = getClassName(props[propName]);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."))
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function createEnumTypeChecker(expectedValues) {
                    if (!Array.isArray(expectedValues)) {
                        process.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0;
                        return emptyFunction.thatReturnsNull
                    }

                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        for (var i = 0; i < expectedValues.length; i++) {
                            if (is(propValue, expectedValues[i])) {
                                return null
                            }
                        }
                        var valuesString = JSON.stringify(expectedValues);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."))
                    }
                    return createChainableTypeChecker(validate)
                }

                function createObjectOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (typeof typeChecker !== "function") {
                            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.")
                        }
                        var propValue = props[propName];
                        var propType = getPropType(propValue);
                        if (propType !== "object") {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."))
                        }
                        for (var key in propValue) {
                            if (propValue.hasOwnProperty(key)) {
                                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                                if (error instanceof Error) {
                                    return error
                                }
                            }
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function createUnionTypeChecker(arrayOfTypeCheckers) {
                    if (!Array.isArray(arrayOfTypeCheckers)) {
                        process.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
                        return emptyFunction.thatReturnsNull
                    }
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        var checker = arrayOfTypeCheckers[i];
                        if (typeof checker !== "function") {
                            warning(false, "Invalid argument supplid to oneOfType. Expected an array of check functions, but " + "received %s at index %s.", getPostfixForTypeWarning(checker), i);
                            return emptyFunction.thatReturnsNull
                        }
                    }

                    function validate(props, propName, componentName, location, propFullName) {
                        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                            var checker = arrayOfTypeCheckers[i];
                            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                                return null
                            }
                        }
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."))
                    }
                    return createChainableTypeChecker(validate)
                }

                function createNodeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (!isNode(props[propName])) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."))
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function createShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        var propType = getPropType(propValue);
                        if (propType !== "object") {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."))
                        }
                        for (var key in shapeTypes) {
                            var checker = shapeTypes[key];
                            if (!checker) {
                                continue
                            }
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) {
                                return error
                            }
                        }
                        return null
                    }
                    return createChainableTypeChecker(validate)
                }

                function isNode(propValue) {
                    switch (typeof propValue) {
                        case "number":
                        case "string":
                        case "undefined":
                            return true;
                        case "boolean":
                            return !propValue;
                        case "object":
                            if (Array.isArray(propValue)) {
                                return propValue.every(isNode)
                            }
                            if (propValue === null || isValidElement(propValue)) {
                                return true
                            }
                            var iteratorFn = getIteratorFn(propValue);
                            if (iteratorFn) {
                                var iterator = iteratorFn.call(propValue);
                                var step;
                                if (iteratorFn !== propValue.entries) {
                                    while (!(step = iterator.next()).done) {
                                        if (!isNode(step.value)) {
                                            return false
                                        }
                                    }
                                } else {
                                    while (!(step = iterator.next()).done) {
                                        var entry = step.value;
                                        if (entry) {
                                            if (!isNode(entry[1])) {
                                                return false
                                            }
                                        }
                                    }
                                }
                            } else {
                                return false
                            }
                            return true;
                        default:
                            return false
                    }
                }

                function isSymbol(propType, propValue) {
                    if (propType === "symbol") {
                        return true
                    }
                    if (propValue["@@toStringTag"] === "Symbol") {
                        return true
                    }
                    if (typeof Symbol === "function" && propValue instanceof Symbol) {
                        return true
                    }
                    return false
                }

                function getPropType(propValue) {
                    var propType = typeof propValue;
                    if (Array.isArray(propValue)) {
                        return "array"
                    }
                    if (propValue instanceof RegExp) {
                        return "object"
                    }
                    if (isSymbol(propType, propValue)) {
                        return "symbol"
                    }
                    return propType
                }

                function getPreciseType(propValue) {
                    if (typeof propValue === "undefined" || propValue === null) {
                        return "" + propValue
                    }
                    var propType = getPropType(propValue);
                    if (propType === "object") {
                        if (propValue instanceof Date) {
                            return "date"
                        } else if (propValue instanceof RegExp) {
                            return "regexp"
                        }
                    }
                    return propType
                }

                function getPostfixForTypeWarning(value) {
                    var type = getPreciseType(value);
                    switch (type) {
                        case "array":
                        case "object":
                            return "an " + type;
                        case "boolean":
                        case "date":
                        case "regexp":
                            return "a " + type;
                        default:
                            return type
                    }
                }

                function getClassName(propValue) {
                    if (!propValue.constructor || !propValue.constructor.name) {
                        return ANONYMOUS
                    }
                    return propValue.constructor.name
                }
                ReactPropTypes.checkPropTypes = checkPropTypes;
                ReactPropTypes.PropTypes = ReactPropTypes;
                return ReactPropTypes
            }
        }).call(exports, __webpack_require__(5))
    }, function(module, exports) {
        "use strict";

        function makeEmptyFunction(arg) {
            return function() {
                return arg
            }
        }
        var emptyFunction = function emptyFunction() {};
        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
            return this
        };
        emptyFunction.thatReturnsArgument = function(arg) {
            return arg
        };
        module.exports = emptyFunction
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            var validateFormat = function validateFormat(format) {};
            if (process.env.NODE_ENV !== "production") {
                validateFormat = function validateFormat(format) {
                    if (format === undefined) {
                        throw new Error("invariant requires an error message argument")
                    }
                }
            }

            function invariant(condition, format, a, b, c, d, e, f) {
                validateFormat(format);
                if (!condition) {
                    var error;
                    if (format === undefined) {
                        error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.")
                    } else {
                        var args = [a, b, c, d, e, f];
                        var argIndex = 0;
                        error = new Error(format.replace(/%s/g, function() {
                            return args[argIndex++]
                        }));
                        error.name = "Invariant Violation"
                    }
                    error.framesToPop = 1;
                    throw error
                }
            }
            module.exports = invariant
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            var emptyFunction = __webpack_require__(8);
            var warning = emptyFunction;
            if (process.env.NODE_ENV !== "production") {
                var printWarning = function printWarning(format) {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key]
                    }
                    var argIndex = 0;
                    var message = "Warning: " + format.replace(/%s/g, function() {
                        return args[argIndex++]
                    });
                    if (typeof console !== "undefined") {
                        console.error(message)
                    }
                    try {
                        throw new Error(message)
                    } catch (x) {}
                };
                warning = function warning(condition, format) {
                    if (format === undefined) {
                        throw new Error("`warning(condition, format, ...args)` requires a warning " + "message argument")
                    }
                    if (format.indexOf("Failed Composite propType: ") === 0) {
                        return
                    }
                    if (!condition) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                            args[_key2 - 2] = arguments[_key2]
                        }
                        printWarning.apply(undefined, [format].concat(args))
                    }
                }
            }
            module.exports = warning
        }).call(exports, __webpack_require__(5))
    }, function(module, exports) {
        "use strict";
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        module.exports = ReactPropTypesSecret
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            if (process.env.NODE_ENV !== "production") {
                var invariant = __webpack_require__(9);
                var warning = __webpack_require__(10);
                var ReactPropTypesSecret = __webpack_require__(11);
                var loggedTypeFailures = {}
            }

            function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                if (process.env.NODE_ENV !== "production") {
                    for (var typeSpecName in typeSpecs) {
                        if (typeSpecs.hasOwnProperty(typeSpecName)) {
                            var error;
                            try {
                                invariant(typeof typeSpecs[typeSpecName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from " + "React.PropTypes.", componentName || "React class", location, typeSpecName);
                                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret)
                            } catch (ex) {
                                error = ex
                            }
                            warning(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error);
                            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                                loggedTypeFailures[error.message] = true;
                                var stack = getStack ? getStack() : "";
                                warning(false, "Failed %s type: %s%s", location, error.message, stack != null ? stack : "")
                            }
                        }
                    }
                }
            }
            module.exports = checkPropTypes
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var emptyFunction = __webpack_require__(8);
        var invariant = __webpack_require__(9);
        var ReactPropTypesSecret = __webpack_require__(11);
        module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                if (secret === ReactPropTypesSecret) {
                    return
                }
                invariant(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use PropTypes.checkPropTypes() to call them. " + "Read more at http://fb.me/use-check-prop-types")
            }
            shim.isRequired = shim;

            function getShim() {
                return shim
            }
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim
            };
            ReactPropTypes.checkPropTypes = emptyFunction;
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.storeShape = exports.subscriptionShape = undefined;
        var _propTypes = __webpack_require__(6);
        var _propTypes2 = _interopRequireDefault(_propTypes);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
            trySubscribe: _propTypes2.default.func.isRequired,
            tryUnsubscribe: _propTypes2.default.func.isRequired,
            notifyNestedSubs: _propTypes2.default.func.isRequired,
            isSubscribed: _propTypes2.default.func.isRequired
        });
        var storeShape = exports.storeShape = _propTypes2.default.shape({
            subscribe: _propTypes2.default.func.isRequired,
            dispatch: _propTypes2.default.func.isRequired,
            getState: _propTypes2.default.func.isRequired
        })
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;
        exports.default = warning;

        function warning(message) {
            if (typeof console !== "undefined" && typeof console.error === "function") {
                console.error(message)
            }
            try {
                throw new Error(message)
            } catch (e) {}
        }
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }
                return target
            };
            exports.default = connectAdvanced;
            var _hoistNonReactStatics = __webpack_require__(17);
            var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
            var _invariant = __webpack_require__(18);
            var _invariant2 = _interopRequireDefault(_invariant);
            var _react = __webpack_require__(1);
            var _Subscription = __webpack_require__(19);
            var _Subscription2 = _interopRequireDefault(_Subscription);
            var _PropTypes = __webpack_require__(14);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i]
                }
                return target
            }
            var hotReloadingVersion = 0;
            var dummyState = {};

            function noop() {}

            function makeSelectorStateful(sourceSelector, store) {
                var selector = {
                    run: function runComponentSelector(props) {
                        try {
                            var nextProps = sourceSelector(store.getState(), props);
                            if (nextProps !== selector.props || selector.error) {
                                selector.shouldComponentUpdate = true;
                                selector.props = nextProps;
                                selector.error = null
                            }
                        } catch (error) {
                            selector.shouldComponentUpdate = true;
                            selector.error = error
                        }
                    }
                };
                return selector
            }

            function connectAdvanced(selectorFactory) {
                var _contextTypes, _childContextTypes;
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    _ref$getDisplayName = _ref.getDisplayName,
                    getDisplayName = _ref$getDisplayName === undefined ? function(name) {
                        return "ConnectAdvanced(" + name + ")"
                    } : _ref$getDisplayName,
                    _ref$methodName = _ref.methodName,
                    methodName = _ref$methodName === undefined ? "connectAdvanced" : _ref$methodName,
                    _ref$renderCountProp = _ref.renderCountProp,
                    renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
                    _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
                    shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
                    _ref$storeKey = _ref.storeKey,
                    storeKey = _ref$storeKey === undefined ? "store" : _ref$storeKey,
                    _ref$withRef = _ref.withRef,
                    withRef = _ref$withRef === undefined ? false : _ref$withRef,
                    connectOptions = _objectWithoutProperties(_ref, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);
                var subscriptionKey = storeKey + "Subscription";
                var version = hotReloadingVersion++;
                var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
                var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
                return function wrapWithConnect(WrappedComponent) {
                    (0, _invariant2.default)(typeof WrappedComponent == "function", "You must pass a component to the function returned by " + ("connect. Instead received " + JSON.stringify(WrappedComponent)));
                    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
                    var displayName = getDisplayName(wrappedComponentName);
                    var selectorFactoryOptions = _extends({}, connectOptions, {
                        getDisplayName: getDisplayName,
                        methodName: methodName,
                        renderCountProp: renderCountProp,
                        shouldHandleStateChanges: shouldHandleStateChanges,
                        storeKey: storeKey,
                        withRef: withRef,
                        displayName: displayName,
                        wrappedComponentName: wrappedComponentName,
                        WrappedComponent: WrappedComponent
                    });
                    var Connect = function(_Component) {
                        _inherits(Connect, _Component);

                        function Connect(props, context) {
                            _classCallCheck(this, Connect);
                            var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
                            _this.version = version;
                            _this.state = {};
                            _this.renderCount = 0;
                            _this.store = props[storeKey] || context[storeKey];
                            _this.propsMode = Boolean(props[storeKey]);
                            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                            (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
                            _this.initSelector();
                            _this.initSubscription();
                            return _this
                        }
                        Connect.prototype.getChildContext = function getChildContext() {
                            var _ref2;
                            var subscription = this.propsMode ? null : this.subscription;
                            return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2
                        };
                        Connect.prototype.componentDidMount = function componentDidMount() {
                            if (!shouldHandleStateChanges) return;
                            this.subscription.trySubscribe();
                            this.selector.run(this.props);
                            if (this.selector.shouldComponentUpdate) this.forceUpdate()
                        };
                        Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
                            this.selector.run(nextProps)
                        };
                        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
                            return this.selector.shouldComponentUpdate
                        };
                        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
                            if (this.subscription) this.subscription.tryUnsubscribe();
                            this.subscription = null;
                            this.notifyNestedSubs = noop;
                            this.store = null;
                            this.selector.run = noop;
                            this.selector.shouldComponentUpdate = false
                        };
                        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
                            (0, _invariant2.default)(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
                            return this.wrappedInstance
                        };
                        Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
                            this.wrappedInstance = ref
                        };
                        Connect.prototype.initSelector = function initSelector() {
                            var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
                            this.selector = makeSelectorStateful(sourceSelector, this.store);
                            this.selector.run(this.props)
                        };
                        Connect.prototype.initSubscription = function initSubscription() {
                            if (!shouldHandleStateChanges) return;
                            var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
                            this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
                            this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                        };
                        Connect.prototype.onStateChange = function onStateChange() {
                            this.selector.run(this.props);
                            if (!this.selector.shouldComponentUpdate) {
                                this.notifyNestedSubs()
                            } else {
                                this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
                                this.setState(dummyState)
                            }
                        };
                        Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
                            this.componentDidUpdate = undefined;
                            this.notifyNestedSubs()
                        };
                        Connect.prototype.isSubscribed = function isSubscribed() {
                            return Boolean(this.subscription) && this.subscription.isSubscribed()
                        };
                        Connect.prototype.addExtraProps = function addExtraProps(props) {
                            if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
                            var withExtras = _extends({}, props);
                            if (withRef) withExtras.ref = this.setWrappedInstance;
                            if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
                            if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
                            return withExtras
                        };
                        Connect.prototype.render = function render() {
                            var selector = this.selector;
                            selector.shouldComponentUpdate = false;
                            if (selector.error) {
                                throw selector.error
                            } else {
                                return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props))
                            }
                        };
                        return Connect
                    }(_react.Component);
                    Connect.WrappedComponent = WrappedComponent;
                    Connect.displayName = displayName;
                    Connect.childContextTypes = childContextTypes;
                    Connect.contextTypes = contextTypes;
                    Connect.propTypes = contextTypes;
                    if (process.env.NODE_ENV !== "production") {
                        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
                            var _this2 = this;
                            if (this.version !== version) {
                                this.version = version;
                                this.initSelector();
                                var oldListeners = [];
                                if (this.subscription) {
                                    oldListeners = this.subscription.listeners.get();
                                    this.subscription.tryUnsubscribe()
                                }
                                this.initSubscription();
                                if (shouldHandleStateChanges) {
                                    this.subscription.trySubscribe();
                                    oldListeners.forEach(function(listener) {
                                        return _this2.subscription.listeners.subscribe(listener)
                                    })
                                }
                            }
                        }
                    }
                    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent)
                }
            }
        }).call(exports, __webpack_require__(5))
    }, function(module, exports) {
        "use strict";
        var REACT_STATICS = {
            childContextTypes: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            mixins: true,
            propTypes: true,
            type: true
        };
        var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
        };
        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
        module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
            if (typeof sourceComponent !== "string") {
                if (objectPrototype) {
                    var inheritedComponent = getPrototypeOf(sourceComponent);
                    if (inheritedComponent && inheritedComponent !== objectPrototype) {
                        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist)
                    }
                }
                var keys = getOwnPropertyNames(sourceComponent);
                if (getOwnPropertySymbols) {
                    keys = keys.concat(getOwnPropertySymbols(sourceComponent))
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                        try {
                            defineProperty(targetComponent, key, descriptor)
                        } catch (e) {}
                    }
                }
                return targetComponent
            }
            return targetComponent
        }
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            var invariant = function(condition, format, a, b, c, d, e, f) {
                if (process.env.NODE_ENV !== "production") {
                    if (format === undefined) {
                        throw new Error("invariant requires an error message argument")
                    }
                }
                if (!condition) {
                    var error;
                    if (format === undefined) {
                        error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.")
                    } else {
                        var args = [a, b, c, d, e, f];
                        var argIndex = 0;
                        error = new Error(format.replace(/%s/g, function() {
                            return args[argIndex++]
                        }));
                        error.name = "Invariant Violation"
                    }
                    error.framesToPop = 1;
                    throw error
                }
            };
            module.exports = invariant
        }).call(exports, __webpack_require__(5))
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var CLEARED = null;
        var nullListeners = {
            notify: function notify() {}
        };

        function createListenerCollection() {
            var current = [];
            var next = [];
            return {
                clear: function clear() {
                    next = CLEARED;
                    current = CLEARED
                },
                notify: function notify() {
                    var listeners = current = next;
                    for (var i = 0; i < listeners.length; i++) {
                        listeners[i]()
                    }
                },
                get: function get() {
                    return next
                },
                subscribe: function subscribe(listener) {
                    var isSubscribed = true;
                    if (next === current) next = current.slice();
                    next.push(listener);
                    return function unsubscribe() {
                        if (!isSubscribed || current === CLEARED) return;
                        isSubscribed = false;
                        if (next === current) next = current.slice();
                        next.splice(next.indexOf(listener), 1)
                    }
                }
            }
        }
        var Subscription = function() {
            function Subscription(store, parentSub, onStateChange) {
                _classCallCheck(this, Subscription);
                this.store = store;
                this.parentSub = parentSub;
                this.onStateChange = onStateChange;
                this.unsubscribe = null;
                this.listeners = nullListeners
            }
            Subscription.prototype.addNestedSub = function addNestedSub(listener) {
                this.trySubscribe();
                return this.listeners.subscribe(listener)
            };
            Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
                this.listeners.notify()
            };
            Subscription.prototype.isSubscribed = function isSubscribed() {
                return Boolean(this.unsubscribe)
            };
            Subscription.prototype.trySubscribe = function trySubscribe() {
                if (!this.unsubscribe) {
                    this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
                    this.listeners = createListenerCollection()
                }
            };
            Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                    this.unsubscribe = null;
                    this.listeners.clear();
                    this.listeners = nullListeners
                }
            };
            return Subscription
        }();
        exports.default = Subscription
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        exports.createConnect = createConnect;
        var _connectAdvanced = __webpack_require__(16);
        var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
        var _shallowEqual = __webpack_require__(21);
        var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
        var _mapDispatchToProps = __webpack_require__(22);
        var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
        var _mapStateToProps = __webpack_require__(56);
        var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
        var _mergeProps = __webpack_require__(57);
        var _mergeProps2 = _interopRequireDefault(_mergeProps);
        var _selectorFactory = __webpack_require__(58);
        var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i]
            }
            return target
        }

        function match(arg, factories, name) {
            for (var i = factories.length - 1; i >= 0; i--) {
                var result = factories[i](arg);
                if (result) return result
            }
            return function(dispatch, options) {
                throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".")
            }
        }

        function strictEqual(a, b) {
            return a === b
        }

        function createConnect() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$connectHOC = _ref.connectHOC,
                connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
                _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
                mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
                _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
                mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
                _ref$mergePropsFactor = _ref.mergePropsFactories,
                mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
                _ref$selectorFactory = _ref.selectorFactory,
                selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
            return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
                var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                    _ref2$pure = _ref2.pure,
                    pure = _ref2$pure === undefined ? true : _ref2$pure,
                    _ref2$areStatesEqual = _ref2.areStatesEqual,
                    areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
                    _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
                    areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
                    _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
                    areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
                    _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
                    areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
                    extraOptions = _objectWithoutProperties(_ref2, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
                var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
                var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, "mapDispatchToProps");
                var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
                return connectHOC(selectorFactory, _extends({
                    methodName: "connect",
                    getDisplayName: function getDisplayName(name) {
                        return "Connect(" + name + ")"
                    },
                    shouldHandleStateChanges: Boolean(mapStateToProps),
                    initMapStateToProps: initMapStateToProps,
                    initMapDispatchToProps: initMapDispatchToProps,
                    initMergeProps: initMergeProps,
                    pure: pure,
                    areStatesEqual: areStatesEqual,
                    areOwnPropsEqual: areOwnPropsEqual,
                    areStatePropsEqual: areStatePropsEqual,
                    areMergedPropsEqual: areMergedPropsEqual
                }, extraOptions))
            }
        }
        exports.default = createConnect()
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;
        exports.default = shallowEqual;
        var hasOwn = Object.prototype.hasOwnProperty;

        function is(x, y) {
            if (x === y) {
                return x !== 0 || y !== 0 || 1 / x === 1 / y
            } else {
                return x !== x && y !== y
            }
        }

        function shallowEqual(objA, objB) {
            if (is(objA, objB)) return true;
            if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
                return false
            }
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return false;
            for (var i = 0; i < keysA.length; i++) {
                if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
                    return false
                }
            }
            return true
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
        exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
        exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
        var _redux = __webpack_require__(23);
        var _wrapMapToProps = __webpack_require__(44);

        function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
            return typeof mapDispatchToProps === "function" ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, "mapDispatchToProps") : undefined
        }

        function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
            return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function(dispatch) {
                return {
                    dispatch: dispatch
                }
            }) : undefined
        }

        function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
            return mapDispatchToProps && typeof mapDispatchToProps === "object" ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function(dispatch) {
                return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch)
            }) : undefined
        }
        exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
            var _createStore = __webpack_require__(24);
            var _createStore2 = _interopRequireDefault(_createStore);
            var _combineReducers = __webpack_require__(39);
            var _combineReducers2 = _interopRequireDefault(_combineReducers);
            var _bindActionCreators = __webpack_require__(41);
            var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
            var _applyMiddleware = __webpack_require__(42);
            var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
            var _compose = __webpack_require__(43);
            var _compose2 = _interopRequireDefault(_compose);
            var _warning = __webpack_require__(40);
            var _warning2 = _interopRequireDefault(_warning);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function isCrushed() {}
            if (process.env.NODE_ENV !== "production" && typeof isCrushed.name === "string" && isCrushed.name !== "isCrushed") {
                (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. " + "This means that you are running a slower development build of Redux. " + "You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify " + "or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) " + "to ensure you have the correct code for your production build.")
            }
            exports.createStore = _createStore2["default"];
            exports.combineReducers = _combineReducers2["default"];
            exports.bindActionCreators = _bindActionCreators2["default"];
            exports.applyMiddleware = _applyMiddleware2["default"];
            exports.compose = _compose2["default"]
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.ActionTypes = undefined;
        exports["default"] = createStore;
        var _isPlainObject = __webpack_require__(25);
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        var _symbolObservable = __webpack_require__(35);
        var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var ActionTypes = exports.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function createStore(reducer, preloadedState, enhancer) {
            var _ref2;
            if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                enhancer = preloadedState;
                preloadedState = undefined
            }
            if (typeof enhancer !== "undefined") {
                if (typeof enhancer !== "function") {
                    throw new Error("Expected the enhancer to be a function.")
                }
                return enhancer(createStore)(reducer, preloadedState)
            }
            if (typeof reducer !== "function") {
                throw new Error("Expected the reducer to be a function.")
            }
            var currentReducer = reducer;
            var currentState = preloadedState;
            var currentListeners = [];
            var nextListeners = currentListeners;
            var isDispatching = false;

            function ensureCanMutateNextListeners() {
                if (nextListeners === currentListeners) {
                    nextListeners = currentListeners.slice()
                }
            }

            function getState() {
                return currentState
            }

            function subscribe(listener) {
                if (typeof listener !== "function") {
                    throw new Error("Expected listener to be a function.")
                }
                var isSubscribed = true;
                ensureCanMutateNextListeners();
                nextListeners.push(listener);
                return function unsubscribe() {
                    if (!isSubscribed) {
                        return
                    }
                    isSubscribed = false;
                    ensureCanMutateNextListeners();
                    var index = nextListeners.indexOf(listener);
                    nextListeners.splice(index, 1)
                }
            }

            function dispatch(action) {
                if (!(0, _isPlainObject2["default"])(action)) {
                    throw new Error("Actions must be plain objects. " + "Use custom middleware for async actions.")
                }
                if (typeof action.type === "undefined") {
                    throw new Error('Actions may not have an undefined "type" property. ' + "Have you misspelled a constant?")
                }
                if (isDispatching) {
                    throw new Error("Reducers may not dispatch actions.")
                }
                try {
                    isDispatching = true;
                    currentState = currentReducer(currentState, action)
                } finally {
                    isDispatching = false
                }
                var listeners = currentListeners = nextListeners;
                for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];
                    listener()
                }
                return action
            }

            function replaceReducer(nextReducer) {
                if (typeof nextReducer !== "function") {
                    throw new Error("Expected the nextReducer to be a function.")
                }
                currentReducer = nextReducer;
                dispatch({
                    type: ActionTypes.INIT
                })
            }

            function observable() {
                var _ref;
                var outerSubscribe = subscribe;
                return _ref = {
                    subscribe: function subscribe(observer) {
                        if (typeof observer !== "object") {
                            throw new TypeError("Expected the observer to be an object.")
                        }

                        function observeState() {
                            if (observer.next) {
                                observer.next(getState())
                            }
                        }
                        observeState();
                        var unsubscribe = outerSubscribe(observeState);
                        return {
                            unsubscribe: unsubscribe
                        }
                    }
                }, _ref[_symbolObservable2["default"]] = function() {
                    return this
                }, _ref
            }
            dispatch({
                type: ActionTypes.INIT
            });
            return _ref2 = {
                dispatch: dispatch,
                subscribe: subscribe,
                getState: getState,
                replaceReducer: replaceReducer
            }, _ref2[_symbolObservable2["default"]] = observable, _ref2
        }
    }, function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(26),
            getPrototype = __webpack_require__(32),
            isObjectLike = __webpack_require__(34);
        var objectTag = "[object Object]";
        var funcProto = Function.prototype,
            objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectCtorString = funcToString.call(Object);

        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                return false
            }
            var proto = getPrototype(value);
            if (proto === null) {
                return true
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString
        }
        module.exports = isPlainObject
    }, function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(27),
            getRawTag = __webpack_require__(30),
            objectToString = __webpack_require__(31);
        var nullTag = "[object Null]",
            undefinedTag = "[object Undefined]";
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        function baseGetTag(value) {
            if (value == null) {
                return value === undefined ? undefinedTag : nullTag
            }
            return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value)
        }
        module.exports = baseGetTag
    }, function(module, exports, __webpack_require__) {
        var root = __webpack_require__(28);
        var Symbol = root.Symbol;
        module.exports = Symbol
    }, function(module, exports, __webpack_require__) {
        var freeGlobal = __webpack_require__(29);
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        module.exports = root
    }, function(module, exports) {
        (function(global) {
            var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
            module.exports = freeGlobal
        }).call(exports, function() {
            return this
        }())
    }, function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(27);
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var nativeObjectToString = objectProto.toString;
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
                tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) {
                    value[symToStringTag] = tag
                } else {
                    delete value[symToStringTag]
                }
            }
            return result
        }
        module.exports = getRawTag
    }, function(module, exports) {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;

        function objectToString(value) {
            return nativeObjectToString.call(value)
        }
        module.exports = objectToString
    }, function(module, exports, __webpack_require__) {
        var overArg = __webpack_require__(33);
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        module.exports = getPrototype
    }, function(module, exports) {
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg))
            }
        }
        module.exports = overArg
    }, function(module, exports) {
        function isObjectLike(value) {
            return value != null && typeof value == "object"
        }
        module.exports = isObjectLike
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(36)
    }, function(module, exports, __webpack_require__) {
        (function(global, module) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _ponyfill = __webpack_require__(38);
            var _ponyfill2 = _interopRequireDefault(_ponyfill);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var root;
            if (typeof self !== "undefined") {
                root = self
            } else if (typeof window !== "undefined") {
                root = window
            } else if (typeof global !== "undefined") {
                root = global
            } else if (true) {
                root = module
            } else {
                root = Function("return this")()
            }
            var result = (0, _ponyfill2["default"])(root);
            exports["default"] = result
        }).call(exports, function() {
            return this
        }(), __webpack_require__(37)(module))
    }, function(module, exports) {
        module.exports = function(module) {
            if (!module.webpackPolyfill) {
                module.deprecate = function() {};
                module.paths = [];
                module.children = [];
                module.webpackPolyfill = 1
            }
            return module
        }
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = symbolObservablePonyfill;

        function symbolObservablePonyfill(root) {
            var result;
            var _Symbol = root.Symbol;
            if (typeof _Symbol === "function") {
                if (_Symbol.observable) {
                    result = _Symbol.observable
                } else {
                    result = _Symbol("observable");
                    _Symbol.observable = result
                }
            } else {
                result = "@@observable"
            }
            return result
        }
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = combineReducers;
            var _createStore = __webpack_require__(24);
            var _isPlainObject = __webpack_require__(25);
            var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
            var _warning = __webpack_require__(40);
            var _warning2 = _interopRequireDefault(_warning);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function getUndefinedStateErrorMessage(key, action) {
                var actionType = action && action.type;
                var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
                return "Given action " + actionName + ', reducer "' + key + '" returned undefined. ' + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined."
            }

            function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                var reducerKeys = Object.keys(reducers);
                var argumentName = action && action.type === _createStore.ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                if (reducerKeys.length === 0) {
                    return "Store does not have a valid reducer. Make sure the argument passed " + "to combineReducers is an object whose values are reducers."
                }
                if (!(0, _isPlainObject2["default"])(inputState)) {
                    return "The " + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"')
                }
                var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]
                });
                unexpectedKeys.forEach(function(key) {
                    unexpectedKeyCache[key] = true
                });
                if (unexpectedKeys.length > 0) {
                    return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.')
                }
            }

            function assertReducerShape(reducers) {
                Object.keys(reducers).forEach(function(key) {
                    var reducer = reducers[key];
                    var initialState = reducer(undefined, {
                        type: _createStore.ActionTypes.INIT
                    });
                    if (typeof initialState === "undefined") {
                        throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.")
                    }
                    var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                    if (typeof reducer(undefined, {
                            type: type
                        }) === "undefined") {
                        throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.")
                    }
                })
            }

            function combineReducers(reducers) {
                var reducerKeys = Object.keys(reducers);
                var finalReducers = {};
                for (var i = 0; i < reducerKeys.length; i++) {
                    var key = reducerKeys[i];
                    if (process.env.NODE_ENV !== "production") {
                        if (typeof reducers[key] === "undefined") {
                            (0, _warning2["default"])('No reducer provided for key "' + key + '"')
                        }
                    }
                    if (typeof reducers[key] === "function") {
                        finalReducers[key] = reducers[key]
                    }
                }
                var finalReducerKeys = Object.keys(finalReducers);
                var unexpectedKeyCache = void 0;
                if (process.env.NODE_ENV !== "production") {
                    unexpectedKeyCache = {}
                }
                var shapeAssertionError = void 0;
                try {
                    assertReducerShape(finalReducers)
                } catch (e) {
                    shapeAssertionError = e
                }
                return function combination() {
                    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var action = arguments[1];
                    if (shapeAssertionError) {
                        throw shapeAssertionError
                    }
                    if (process.env.NODE_ENV !== "production") {
                        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
                        if (warningMessage) {
                            (0, _warning2["default"])(warningMessage)
                        }
                    }
                    var hasChanged = false;
                    var nextState = {};
                    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                        var _key = finalReducerKeys[_i];
                        var reducer = finalReducers[_key];
                        var previousStateForKey = state[_key];
                        var nextStateForKey = reducer(previousStateForKey, action);
                        if (typeof nextStateForKey === "undefined") {
                            var errorMessage = getUndefinedStateErrorMessage(_key, action);
                            throw new Error(errorMessage)
                        }
                        nextState[_key] = nextStateForKey;
                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey
                    }
                    return hasChanged ? nextState : state
                }
            }
        }).call(exports, __webpack_require__(5))
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = warning;

        function warning(message) {
            if (typeof console !== "undefined" && typeof console.error === "function") {
                console.error(message)
            }
            try {
                throw new Error(message)
            } catch (e) {}
        }
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = bindActionCreators;

        function bindActionCreator(actionCreator, dispatch) {
            return function() {
                return dispatch(actionCreator.apply(undefined, arguments))
            }
        }

        function bindActionCreators(actionCreators, dispatch) {
            if (typeof actionCreators === "function") {
                return bindActionCreator(actionCreators, dispatch)
            }
            if (typeof actionCreators !== "object" || actionCreators === null) {
                throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + ". " + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
            }
            var keys = Object.keys(actionCreators);
            var boundActionCreators = {};
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var actionCreator = actionCreators[key];
                if (typeof actionCreator === "function") {
                    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
                }
            }
            return boundActionCreators
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        exports["default"] = applyMiddleware;
        var _compose = __webpack_require__(43);
        var _compose2 = _interopRequireDefault(_compose);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function applyMiddleware() {
            for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
                middlewares[_key] = arguments[_key]
            }
            return function(createStore) {
                return function(reducer, preloadedState, enhancer) {
                    var store = createStore(reducer, preloadedState, enhancer);
                    var _dispatch = store.dispatch;
                    var chain = [];
                    var middlewareAPI = {
                        getState: store.getState,
                        dispatch: function dispatch(action) {
                            return _dispatch(action)
                        }
                    };
                    chain = middlewares.map(function(middleware) {
                        return middleware(middlewareAPI)
                    });
                    _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
                    return _extends({}, store, {
                        dispatch: _dispatch
                    })
                }
            }
        }
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = compose;

        function compose() {
            for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
                funcs[_key] = arguments[_key]
            }
            if (funcs.length === 0) {
                return function(arg) {
                    return arg
                }
            }
            if (funcs.length === 1) {
                return funcs[0]
            }
            return funcs.reduce(function(a, b) {
                return function() {
                    return a(b.apply(undefined, arguments))
                }
            })
        }
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
            exports.getDependsOnOwnProps = getDependsOnOwnProps;
            exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
            var _verifyPlainObject = __webpack_require__(45);
            var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function wrapMapToPropsConstant(getConstant) {
                return function initConstantSelector(dispatch, options) {
                    var constant = getConstant(dispatch, options);

                    function constantSelector() {
                        return constant
                    }
                    constantSelector.dependsOnOwnProps = false;
                    return constantSelector
                }
            }

            function getDependsOnOwnProps(mapToProps) {
                return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1
            }

            function wrapMapToPropsFunc(mapToProps, methodName) {
                return function initProxySelector(dispatch, _ref) {
                    var displayName = _ref.displayName;
                    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
                        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch)
                    };
                    proxy.dependsOnOwnProps = true;
                    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
                        proxy.mapToProps = mapToProps;
                        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
                        var props = proxy(stateOrDispatch, ownProps);
                        if (typeof props === "function") {
                            proxy.mapToProps = props;
                            proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                            props = proxy(stateOrDispatch, ownProps)
                        }
                        if (process.env.NODE_ENV !== "production")(0, _verifyPlainObject2.default)(props, displayName, methodName);
                        return props
                    };
                    return proxy
                }
            }
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.default = verifyPlainObject;
        var _isPlainObject = __webpack_require__(46);
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        var _warning = __webpack_require__(15);
        var _warning2 = _interopRequireDefault(_warning);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function verifyPlainObject(value, displayName, methodName) {
            if (!(0, _isPlainObject2.default)(value)) {
                (0, _warning2.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".")
            }
        }
    }, function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(47),
            getPrototype = __webpack_require__(53),
            isObjectLike = __webpack_require__(55);
        var objectTag = "[object Object]";
        var funcProto = Function.prototype,
            objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectCtorString = funcToString.call(Object);

        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                return false
            }
            var proto = getPrototype(value);
            if (proto === null) {
                return true
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString
        }
        module.exports = isPlainObject
    }, function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(48),
            getRawTag = __webpack_require__(51),
            objectToString = __webpack_require__(52);
        var nullTag = "[object Null]",
            undefinedTag = "[object Undefined]";
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        function baseGetTag(value) {
            if (value == null) {
                return value === undefined ? undefinedTag : nullTag
            }
            return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value)
        }
        module.exports = baseGetTag
    }, function(module, exports, __webpack_require__) {
        var root = __webpack_require__(49);
        var Symbol = root.Symbol;
        module.exports = Symbol
    }, function(module, exports, __webpack_require__) {
        var freeGlobal = __webpack_require__(50);
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        module.exports = root
    }, function(module, exports) {
        (function(global) {
            var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
            module.exports = freeGlobal
        }).call(exports, function() {
            return this
        }())
    }, function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(48);
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var nativeObjectToString = objectProto.toString;
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
                tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) {
                    value[symToStringTag] = tag
                } else {
                    delete value[symToStringTag]
                }
            }
            return result
        }
        module.exports = getRawTag
    }, function(module, exports) {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;

        function objectToString(value) {
            return nativeObjectToString.call(value)
        }
        module.exports = objectToString
    }, function(module, exports, __webpack_require__) {
        var overArg = __webpack_require__(54);
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        module.exports = getPrototype
    }, function(module, exports) {
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg))
            }
        }
        module.exports = overArg
    }, function(module, exports) {
        function isObjectLike(value) {
            return value != null && typeof value == "object"
        }
        module.exports = isObjectLike
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
        exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
        var _wrapMapToProps = __webpack_require__(44);

        function whenMapStateToPropsIsFunction(mapStateToProps) {
            return typeof mapStateToProps === "function" ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, "mapStateToProps") : undefined
        }

        function whenMapStateToPropsIsMissing(mapStateToProps) {
            return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function() {
                return {}
            }) : undefined
        }
        exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }
                return target
            };
            exports.defaultMergeProps = defaultMergeProps;
            exports.wrapMergePropsFunc = wrapMergePropsFunc;
            exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
            exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
            var _verifyPlainObject = __webpack_require__(45);
            var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function defaultMergeProps(stateProps, dispatchProps, ownProps) {
                return _extends({}, ownProps, stateProps, dispatchProps)
            }

            function wrapMergePropsFunc(mergeProps) {
                return function initMergePropsProxy(dispatch, _ref) {
                    var displayName = _ref.displayName,
                        pure = _ref.pure,
                        areMergedPropsEqual = _ref.areMergedPropsEqual;
                    var hasRunOnce = false;
                    var mergedProps = void 0;
                    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
                        var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
                        if (hasRunOnce) {
                            if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps
                        } else {
                            hasRunOnce = true;
                            mergedProps = nextMergedProps;
                            if (process.env.NODE_ENV !== "production")(0, _verifyPlainObject2.default)(mergedProps, displayName, "mergeProps")
                        }
                        return mergedProps
                    }
                }
            }

            function whenMergePropsIsFunction(mergeProps) {
                return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : undefined
            }

            function whenMergePropsIsOmitted(mergeProps) {
                return !mergeProps ? function() {
                    return defaultMergeProps
                } : undefined
            }
            exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted]
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
            exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
            exports.default = finalPropsSelectorFactory;
            var _verifySubselectors = __webpack_require__(59);
            var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i]
                }
                return target
            }

            function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
                return function impureFinalPropsSelector(state, ownProps) {
                    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps)
                }
            }

            function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
                var areStatesEqual = _ref.areStatesEqual,
                    areOwnPropsEqual = _ref.areOwnPropsEqual,
                    areStatePropsEqual = _ref.areStatePropsEqual;
                var hasRunAtLeastOnce = false;
                var state = void 0;
                var ownProps = void 0;
                var stateProps = void 0;
                var dispatchProps = void 0;
                var mergedProps = void 0;

                function handleFirstCall(firstState, firstOwnProps) {
                    state = firstState;
                    ownProps = firstOwnProps;
                    stateProps = mapStateToProps(state, ownProps);
                    dispatchProps = mapDispatchToProps(dispatch, ownProps);
                    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
                    hasRunAtLeastOnce = true;
                    return mergedProps
                }

                function handleNewPropsAndNewState() {
                    stateProps = mapStateToProps(state, ownProps);
                    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
                    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
                    return mergedProps
                }

                function handleNewProps() {
                    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
                    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
                    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
                    return mergedProps
                }

                function handleNewState() {
                    var nextStateProps = mapStateToProps(state, ownProps);
                    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
                    stateProps = nextStateProps;
                    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
                    return mergedProps
                }

                function handleSubsequentCalls(nextState, nextOwnProps) {
                    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
                    var stateChanged = !areStatesEqual(nextState, state);
                    state = nextState;
                    ownProps = nextOwnProps;
                    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
                    if (propsChanged) return handleNewProps();
                    if (stateChanged) return handleNewState();
                    return mergedProps
                }
                return function pureFinalPropsSelector(nextState, nextOwnProps) {
                    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps)
                }
            }

            function finalPropsSelectorFactory(dispatch, _ref2) {
                var initMapStateToProps = _ref2.initMapStateToProps,
                    initMapDispatchToProps = _ref2.initMapDispatchToProps,
                    initMergeProps = _ref2.initMergeProps,
                    options = _objectWithoutProperties(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
                var mapStateToProps = initMapStateToProps(dispatch, options);
                var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
                var mergeProps = initMergeProps(dispatch, options);
                if (process.env.NODE_ENV !== "production") {
                    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName)
                }
                var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
                return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options)
            }
        }).call(exports, __webpack_require__(5))
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.default = verifySubselectors;
        var _warning = __webpack_require__(15);
        var _warning2 = _interopRequireDefault(_warning);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function verify(selector, methodName, displayName) {
            if (!selector) {
                throw new Error("Unexpected value for " + methodName + " in " + displayName + ".")
            } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
                if (!selector.hasOwnProperty("dependsOnOwnProps")) {
                    (0, _warning2.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.")
                }
            }
        }

        function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
            verify(mapStateToProps, "mapStateToProps", displayName);
            verify(mapDispatchToProps, "mapDispatchToProps", displayName);
            verify(mergeProps, "mergeProps", displayName)
        }
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(61), __webpack_require__(71), __webpack_require__(72), __webpack_require__(73)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, react_redux_1, FetchBoardData_1, UpdateWorkItem_1, UpdateWorkItems_1, QueryBasedBoardPage_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var mapStateToProps = function(state, ownProps) {
                return {
                    boardData: state.boardData,
                    queryId: ownProps.queryId,
                    queryName: ownProps.queryName,
                    queryPath: ownProps.queryPath
                }
            };
            var mapDispatchToProps = function(dispatch) {
                return {
                    fetchQueryBoardData: function(queryId, queryName, queryPath) {
                        return dispatch(FetchBoardData_1.fetchQueryBoardDataAction(queryId, queryName, queryPath))
                    },
                    updateWorkItem: function(workItem) {
                        return dispatch(UpdateWorkItem_1.updateWorkItemAction(workItem))
                    },
                    updateWorkItems: function(workItems) {
                        return dispatch(UpdateWorkItems_1.updateWorkItemsAction(workItems))
                    }
                }
            };
            exports.QueryBasedBoardPageContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(QueryBasedBoardPage_1.QueryBasedBoardPage)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(62), __webpack_require__(67), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, models_1, ActionTypes_1, RestClient_1, Contracts_1, RestClient_2) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.fetchQueryBoardDataAction = function(queryId, queryName, queryPath) {
                return function(dispatch) {
                    console.log("fetchQueryBoardDataAction");
                    var repo = new QueryBasedBoardRepository;
                    var data = repo.getData(queryId, queryName, queryPath).then(function(data) {
                        dispatch(fetchQueryBoardDataCompleted(data))
                    })
                }
            };
            var fetchQueryBoardDataCompleted = function(data) {
                return {
                    type: ActionTypes_1.ActionTypes.FETCH_QUERYBASEDBOARDDATA_COMPLETED,
                    payload: data
                }
            };
            var QueryBasedBoardRepository = function() {
                function QueryBasedBoardRepository() {
                    this.context = VSS.getWebContext();
                    this.witClient = RestClient_1.getClient();
                    this.workClient = RestClient_2.getClient()
                }
                QueryBasedBoardRepository.prototype.getData = function(queryId, queryName, queryPath) {
                    var _this = this;
                    console.log("QueryBasedBoardRepository - getData: " + queryId + "," + queryName + "," + queryPath);
                    var boardData = new models_1.BoardModel(queryId, queryName, queryPath);
                    if (queryId === "") return new Promise(function(resolve) {
                        boardData
                    });
                    return this.witClient.queryById(queryId, this.context.project.id, null, null).then(function(queryResult) {
                        console.log("QueryBasedBoardRepository - getData - queryById: " + queryResult);
                        boardData.queryType = queryResult.queryType;
                        if (queryResult.queryType == Contracts_1.QueryType.Tree) {
                            console.log("QueryBasedBoardRepository - getData - return tree type");
                            return boardData
                        }
                        var workItemIds = queryResult.queryType === Contracts_1.QueryType.Flat ? queryResult.workItems.map(function(x) {
                            return x.id
                        }) : queryResult.workItemRelations.map(function(x) {
                            return x.target.id
                        });
                        if (workItemIds.length === 0) {
                            console.log("QueryBasedBoardRepository - getData - return 0 workitems");
                            return boardData
                        }
                        console.log("QueryBasedBoardRepository - getData - " + workItemIds.length + " workitems");
                        var wiFields = ["System.Title", "System.AssignedTo", "System.State", "System.WorkItemType"];
                        var batchSize = 200;
                        var batchArray = [];
                        var batchStartPos = 0;
                        var batchEndPos = workItemIds.length;
                        var allWorkItemDetails = [];
                        var allWorkItemDetailPromisses = [];
                        for (batchStartPos = 0, batchEndPos = workItemIds.length; batchStartPos < batchEndPos; batchStartPos += batchSize) {
                            batchArray = workItemIds.slice(batchStartPos, batchStartPos + batchSize);
                            allWorkItemDetailPromisses.push(_this.witClient.getWorkItems(batchArray, wiFields))
                        }
                        return Promise.all(allWorkItemDetailPromisses).then(function(workItemDetailsBatches) {
                            workItemDetailsBatches.forEach(function(workItemDetailsBatch) {
                                return allWorkItemDetails.push.apply(allWorkItemDetails, workItemDetailsBatch)
                            });
                            console.log("QueryBasedBoardRepository - getData - " + allWorkItemDetails.length + " workitemDetails");
                            return _this.witClient.getWorkItemTypes(_this.context.project.id).then(function(workItemTypes) {
                                workItemTypes.forEach(function(wiType) {
                                    var _loop_1 = function(fromState) {
                                        wiType.transitions[fromState].forEach(function(toState) {
                                            boardData.stateTransitions.push(new models_1.BoardStateTransitionModel(wiType.name, fromState, toState.to))
                                        })
                                    };
                                    for (var fromState in wiType.transitions) {
                                        _loop_1(fromState)
                                    }
                                });
                                var teamContext = {
                                    projectId: _this.context.project.id,
                                    teamId: _this.context.team.id,
                                    project: "",
                                    team: ""
                                };
                                return _this.workClient.getBacklogConfigurations(teamContext).then(function(backlogConfig) {
                                    var supportedWorkItemTypes = backlogConfig.workItemTypeMappedStates.map(function(x) {
                                        return x.workItemTypeName
                                    });
                                    var supportedWorkItemDetails = allWorkItemDetails.filter(function(x) {
                                        return supportedWorkItemTypes.indexOf(x.fields["System.WorkItemType"]) >= 0
                                    });
                                    if (queryResult.queryType === Contracts_1.QueryType.Flat) {
                                        supportedWorkItemDetails.forEach(function(x) {
                                            return boardData.workItems.push(new models_1.BoardWorkItemModel(x, null))
                                        })
                                    } else if (queryResult.queryType === Contracts_1.QueryType.OneHop) {
                                        queryResult.workItemRelations.forEach(function(queryRelation) {
                                            var filteredWorkItems = supportedWorkItemDetails.filter(function(item) {
                                                return item.id === queryRelation.target.id
                                            });
                                            if (filteredWorkItems.length > 0) {
                                                if (queryRelation.source === null || queryRelation.source === undefined) {
                                                    boardData.workItems.push(new models_1.BoardWorkItemModel(filteredWorkItems[0], null))
                                                } else {
                                                    boardData.workItems.push(new models_1.BoardWorkItemModel(filteredWorkItems[0], queryRelation.source.id))
                                                }
                                            }
                                        })
                                    }
                                    var workItemTypes = [];
                                    if (queryResult.queryType == Contracts_1.QueryType.OneHop) {
                                        workItemTypes = boardData.workItems.filter(function(x) {
                                            return x.parentId !== null
                                        }).map(function(x) {
                                            return x.workItemType
                                        })
                                    } else if (queryResult.queryType === Contracts_1.QueryType.Flat) {
                                        workItemTypes = boardData.workItems.map(function(x) {
                                            return x.workItemType
                                        })
                                    }
                                    var wiTypesMappedStates = backlogConfig.workItemTypeMappedStates.filter(function(x) {
                                        return workItemTypes.indexOf(x.workItemTypeName) >= 0
                                    });
                                    _this.AddStatesByCategory(boardData, wiTypesMappedStates, "Proposed");
                                    _this.AddStatesByCategory(boardData, wiTypesMappedStates, "InProgress");
                                    _this.AddStatesByCategory(boardData, wiTypesMappedStates, "Resolved");
                                    _this.AddStatesByCategory(boardData, wiTypesMappedStates, "Completed");
                                    return boardData
                                })
                            })
                        })
                    }, function(err) {
                        return null
                    })
                };
                QueryBasedBoardRepository.prototype.AddStatesByCategory = function(boardModel, workItemTypeStateInfos, category) {
                    workItemTypeStateInfos.forEach(function(childWiTypeMappedStates) {
                        var _loop_2 = function(stateKey) {
                            if (childWiTypeMappedStates.states[stateKey] === category) {
                                if (!boardModel.states.some(function(x) {
                                        return x.name === stateKey
                                    })) {
                                    boardModel.states.push(new models_1.BoardStateModel(stateKey))
                                }
                            }
                        };
                        for (var stateKey in childWiTypeMappedStates.states) {
                            _loop_2(stateKey)
                        }
                    })
                };
                return QueryBasedBoardRepository
            }();
            exports.QueryBasedBoardRepository = QueryBasedBoardRepository
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(63), __webpack_require__(64), __webpack_require__(65), __webpack_require__(66)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, BoardModel_1, BoardWorkItemModel_1, BoardStateModel_1, BoardStateTransitionModel_1) {
            "use strict";

            function __export(m) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p]
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __export(BoardModel_1);
            __export(BoardWorkItemModel_1);
            __export(BoardStateModel_1);
            __export(BoardStateTransitionModel_1)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardModel = function() {
                function BoardModel(queryId, queryName, queryPath) {
                    this.key = queryId;
                    this.queryId = queryId;
                    this.queryName = queryName;
                    this.queryPath = queryPath;
                    this.allCollapsed = false;
                    this.workItems = [];
                    this.states = [];
                    this.stateTransitions = []
                }
                return BoardModel
            }();
            exports.BoardModel = BoardModel
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardWorkItemModel = function() {
                function BoardWorkItemModel(workItem, parentId) {
                    this.underlyingWorkItem = workItem;
                    this.id = workItem.id;
                    this.parentId = parentId;
                    this.workItemType = workItem.fields["System.WorkItemType"];
                    this.title = workItem.fields["System.Title"];
                    this.state = workItem.fields["System.State"];
                    this.assignedTo = workItem.fields["System.AssignedTo"];
                    this.collapsed = false;
                    if (this.assignedTo === undefined) {
                        this.assignedToName = "Unassigned";
                        this.assignedToAvatarUri = this.GetMemberAvatarUrl("<Unassigned>")
                    } else {
                        this.assignedToName = this.assignedTo.substring(0, this.assignedTo.indexOf("<") - 1);
                        this.assignedToAvatarUri = this.GetMemberAvatarUrl(this.assignedTo)
                    }
                    this.workItemColor = this.GetWorkItemColor(this.workItemType);
                    this.iconCssClasses = this.GetWorkItemIcon(this.workItemType);
                    this.stateColor = this.GetStateColor(this.state)
                }
                BoardWorkItemModel.prototype.GetMemberAvatarUrl = function(memberIdentity) {
                    var i = memberIdentity.lastIndexOf("<");
                    var j = memberIdentity.lastIndexOf(">");
                    var uniqueName = $.trim(memberIdentity.substr(i + 1, j - i - 1));
                    return VSS.getWebContext().host.uri + "_api/_common/IdentityImage?id=&identifier=" + uniqueName
                };
                BoardWorkItemModel.prototype.GetWorkItemColor = function(workItemType) {
                    var witColor = "";
                    switch (workItemType) {
                        case "Shared Steps":
                        case "Shared Parameter":
                        case "Test Case":
                        case "Test Plan":
                        case "Code Review Response":
                        case "Issue":
                        case "Feedback Request":
                        case "Feedback Response":
                        case "Code Review Request":
                        case "Impediment":
                        case "Test Suite":
                            witColor = "#FF9D00";
                            break;
                        case "Product Backlog Item":
                        case "User Story":
                            witColor = "#009CCC";
                            break;
                        case "Task":
                            witColor = "#F2CB1D";
                            break;
                        case "Bug":
                            witColor = "#CC293D";
                            break;
                        case "Feature":
                            witColor = "#773B93";
                            break;
                        case "Epic":
                            witColor = "#FF7B00";
                            break;
                        default:
                            witColor = "#F2CB1D"
                    }
                    return witColor
                };
                BoardWorkItemModel.prototype.GetWorkItemIcon = function(workItemType) {
                    var witIcon = "";
                    switch (workItemType) {
                        case "Test Case":
                        case "Test Plan":
                        case "Test Suite":
                            witIcon = "bowtie-test-case";
                            break;
                        case "Impediment":
                        case "Issue":
                            witIcon = "bowtie-symbol-impediment";
                            break;
                        case "Product Backlog Item":
                        case "User Story":
                            witIcon = "bowtie-symbol-book";
                            break;
                        case "Task":
                            witIcon = "bowtie-symbol-task";
                            break;
                        case "Bug":
                            witIcon = "bowtie-symbol-bug";
                            break;
                        case "Feature":
                            witIcon = "bowtie-symbol-trophy";
                            break;
                        case "Epic":
                            witIcon = "bowtie-symbol-crown";
                            break;
                        default:
                            witIcon = "bowtie-symbol-task"
                    }
                    return witIcon
                };
                BoardWorkItemModel.prototype.GetStateColor = function(state) {
                    var statecolor = "";
                    switch (state) {
                        case "Approved":
                        case "New":
                        case "To Do":
                        case "Design":
                            statecolor = "#b2b2b2";
                            break;
                        case "In Progress":
                        case "Committed":
                        case "Open":
                        case "Ready":
                        case "Active":
                        case "In Planning":
                            statecolor = "#007acc";
                            break;
                        case "Done":
                        case "Closed":
                        case "Inactive":
                        case "Completed":
                            statecolor = "#393";
                            break;
                        case "Removed":
                            statecolor = "#5688e0";
                            break;
                        default:
                            statecolor = "#b2b2b2"
                    }
                    return statecolor
                };
                return BoardWorkItemModel
            }();
            exports.BoardWorkItemModel = BoardWorkItemModel
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardStateModel = function() {
                function BoardStateModel(name) {
                    this.key = name;
                    this.name = name
                }
                return BoardStateModel
            }();
            exports.BoardStateModel = BoardStateModel
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardStateTransitionModel = function() {
                function BoardStateTransitionModel(workItemType, fromState, toState) {
                    this.workItemType = workItemType;
                    this.fromState = fromState;
                    this.toState = toState
                }
                return BoardStateTransitionModel
            }();
            exports.BoardStateTransitionModel = BoardStateTransitionModel
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ActionTypes = {
                FETCH_QUERYBASEDBOARDDATA: "FETCH_QUERYBASEDBOARDDATA",
                FETCH_QUERYBASEDBOARDDATA_COMPLETED: "FETCH_QUERYBASEDBOARDDATA_COMPLETED",
                UPDATE_WORK_ITEM: "UPDATE_WORK_ITEM",
                UPDATE_WORK_ITEMS: "UPDATE_WORK_ITEMS"
            }
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_68__
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_69__
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_70__
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(67)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, ActionTypes_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.updateWorkItemAction = function(workItem) {
                return function(dispatch) {
                    dispatch(updateWorkItemCompleted(workItem))
                }
            };
            var updateWorkItemCompleted = function(workItem) {
                return {
                    type: ActionTypes_1.ActionTypes.UPDATE_WORK_ITEM,
                    payload: workItem
                }
            }
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(67)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, ActionTypes_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.updateWorkItemsAction = function(workItems) {
                return function(dispatch) {
                    dispatch(updateWorkItemsCompleted(workItems))
                }
            };
            var updateWorkItemsCompleted = function(workItems) {
                return {
                    type: ActionTypes_1.ActionTypes.UPDATE_WORK_ITEMS,
                    payload: workItems
                }
            }
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        var __extends = this && this.__extends || function() {
            var extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b
            } || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]
            };
            return function(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
            }
        }();
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(74), __webpack_require__(79), __webpack_require__(69)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, OneHopQueryBasedBoard_1, FlatQueryBasedBoard_1, Contracts_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var QueryBasedBoardPage = function(_super) {
                __extends(QueryBasedBoardPage, _super);

                function QueryBasedBoardPage() {
                    var _this = _super.call(this) || this;
                    console.log("QueryBasedBoardPage - constructor");
                    return _this
                }
                QueryBasedBoardPage.prototype.componentDidMount = function() {
                    console.log("QueryBasedBoardPage - componentDidMount");
                    this.props.fetchQueryBoardData(this.props.queryId, this.props.queryName, this.props.queryPath)
                };
                QueryBasedBoardPage.prototype.render = function() {
                    console.log("QueryBasedBoardPage - render " + this.props);
                    if (this.props.queryId === "") {
                        return React.createElement("div", {
                            className: "message-block invalid"
                        }, React.createElement("div", {
                            className: "message-text"
                        }, "Please save your query before using the query based board."))
                    } else if (this.props.queryPath !== null && !(this.props.queryPath.startsWith("My Queries/") || this.props.queryPath.startsWith("Shared Queries/"))) {
                        return React.createElement("div", {
                            className: "agile-error-page hub-no-content-gutter",
                            style: {
                                paddingLeft: "20px"
                            }
                        }, React.createElement("p", null, React.createElement("span", {
                            className: "error-header",
                            style: {
                                color: "#C00000",
                                fontSize: "16px"
                            }
                        }, "Query Based Boards only work for Personal and Shared Queries, not for special system queries like 'Assigned To Me', 'Unsaved Work Items' ...")))
                    } else if (this.props.boardData === null) {
                        return React.createElement("div", null)
                    } else if (this.props.boardData.queryType == 2) {
                        return React.createElement("div", {
                            className: "agile-error-page hub-no-content-gutter",
                            style: {
                                paddingLeft: "20px"
                            }
                        }, React.createElement("p", null, React.createElement("span", {
                            className: "error-header",
                            style: {
                                color: "#C00000",
                                fontSize: "16px"
                            }
                        }, "Query Based Boards cannot be based on work item queries returning a tree. Only flat list and onehop queries are supported.")))
                    } else if (this.props.boardData.workItems.length === 0) {
                        return React.createElement("div", {
                            className: "message-block invalid"
                        }, React.createElement("div", {
                            className: "message-text"
                        }, "Query returned no results."))
                    } else if (this.props.boardData.queryType === Contracts_1.QueryType.OneHop) {
                        return React.createElement(OneHopQueryBasedBoard_1.OneHopQueryBasedBoard, {
                            boardData: this.props.boardData,
                            updateWorkItem: this.props.updateWorkItem,
                            updateWorkItems: this.props.updateWorkItems
                        })
                    }
                    if (this.props.boardData.queryType === Contracts_1.QueryType.Flat) {
                        return React.createElement(FlatQueryBasedBoard_1.FlatQueryBasedBoard, {
                            boardData: this.props.boardData,
                            updateWorkItem: this.props.updateWorkItem
                        })
                    }
                    return React.createElement("div", null)
                };
                return QueryBasedBoardPage
            }(React.Component);
            exports.QueryBasedBoardPage = QueryBasedBoardPage
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        var __extends = this && this.__extends || function() {
            var extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b
            } || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]
            };
            return function(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
            }
        }();
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(75), __webpack_require__(77)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, BoardGroupCard_1, BoardCardStateGroup_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var OneHopQueryBasedBoard = function(_super) {
                __extends(OneHopQueryBasedBoard, _super);

                function OneHopQueryBasedBoard() {
                    var _this = _super.call(this) || this;
                    _this.onCollapse = _this.onCollapse.bind(_this);
                    _this.onExpand = _this.onExpand.bind(_this);
                    _this.onCollapseAll = _this.onCollapseAll.bind(_this);
                    _this.onExpandAll = _this.onExpandAll.bind(_this);
                    return _this
                }
                OneHopQueryBasedBoard.prototype.onCollapse = function(wiModel) {
                    wiModel.collapsed = true;
                    this.props.updateWorkItem(wiModel)
                };
                OneHopQueryBasedBoard.prototype.onExpand = function(wiModel) {
                    wiModel.collapsed = false;
                    this.props.updateWorkItem(wiModel)
                };
                OneHopQueryBasedBoard.prototype.onCollapseAll = function(wiModels) {
                    console.log("onCollapseAll");
                    wiModels.forEach(function(x) {
                        return x.collapsed = true
                    });
                    this.props.updateWorkItems(wiModels)
                };
                OneHopQueryBasedBoard.prototype.onExpandAll = function(wiModels) {
                    console.log("onExpandAll");
                    wiModels.forEach(function(x) {
                        return x.collapsed = false
                    });
                    this.props.updateWorkItems(wiModels)
                };
                OneHopQueryBasedBoard.prototype.render = function() {
                    var _this = this;
                    if (this.props.boardData === undefined) {
                        return React.createElement("div", null)
                    }
                    return React.createElement("div", {
                        id: "taskboard",
                        className: "taskboard"
                    }, React.createElement("div", {
                        className: "taskboardTableHeaderScrollContainer",
                        style: {
                            minWidth: 233 + this.props.boardData.states.length * 209
                        }
                    }, React.createElement("div", {
                        className: "tableHeaderInnerContainer",
                        style: {
                            paddingRight: "17px"
                        }
                    }, React.createElement("table", {
                        id: "taskboard-table-header",
                        style: {
                            width: "100%",
                            tableLayout: "fixed"
                        }
                    }, React.createElement("thead", null, React.createElement("tr", {
                        key: "taskBoardRow",
                        className: "taskboard-row"
                    }, React.createElement("th", {
                        key: "taskboardExpander",
                        className: "taskboard-expander header-row"
                    }, this.props.boardData.allCollapsed != undefined && this.props.boardData.allCollapsed != null && this.props.boardData.allCollapsed == true ? React.createElement("button", {
                        onClick: function() {
                            return _this.onExpandAll(_this.props.boardData.workItems.filter(function(x) {
                                return x.parentId == undefined || x.parentId == null
                            }))
                        },
                        className: "expand-collapse-button",
                        id: "expand-collapse-button"
                    }, React.createElement("div", {
                        className: "bowtie-icon bowtie-chevron-down-all"
                    }), React.createElement("div", {
                        className: "expand-collapse-text"
                    }, "Expand all")) : React.createElement("button", {
                        onClick: function() {
                            return _this.onCollapseAll(_this.props.boardData.workItems.filter(function(x) {
                                return x.parentId == undefined || x.parentId == null
                            }))
                        },
                        className: "expand-collapse-button",
                        id: "expand-collapse-button"
                    }, React.createElement("div", {
                        className: "bowtie-icon bowtie-chevron-up-all"
                    }), React.createElement("div", {
                        className: "expand-collapse-text"
                    }, "Collapse all"))), React.createElement("th", {
                        key: "taskboardParent",
                        className: "taskboard-cell taskboard-parent"
                    }, React.createElement("span", {
                        className: "witState"
                    }), React.createElement("span", {
                        className: "witRemainingWork"
                    })), this.props.boardData.states.map(function(state, index) {
                        return React.createElement("th", {
                            key: "taskboardCell" + index,
                            className: "taskboard-cell",
                            id: "taskboard-table-header_s" + index,
                            style: {
                                width: 100 / _this.props.boardData.states.length + "%"
                            }
                        }, React.createElement("span", {
                            className: "witState"
                        }, state.name), React.createElement("span", {
                            className: "witRemainingWork"
                        }))
                    })))))), React.createElement("div", {
                        className: "taskboardTableBodyScrollContainer scrollable",
                        style: {
                            minWidth: 233 - 17 + this.props.boardData.states.length * 209
                        }
                    }, React.createElement("table", {
                        id: "taskboard-table-body",
                        style: {
                            width: "100%",
                            tableLayout: "fixed"
                        }
                    }, React.createElement("tbody", null, this.props.boardData.workItems.filter(function(x) {
                        return x.parentId === null
                    }).map(function(parentWorkItem, parentWorkItemIndex) {
                        return parentWorkItem.collapsed != undefined && parentWorkItem.collapsed != null && parentWorkItem.collapsed == true ? React.createElement("tr", {
                            className: "taskboard-row taskboard-row-summary ui-droppable",
                            id: "taskboard-summary-row-" + parentWorkItemIndex,
                            style: {}
                        }, React.createElement("td", {
                            className: "taskboard-expander"
                        }, React.createElement("button", {
                            onClick: function() {
                                return _this.onExpand(parentWorkItem)
                            },
                            className: "bowtie-icon bowtie-toggle-tree-collapsed",
                            title: "Expand this row"
                        })), React.createElement("td", {
                            className: "taskboard-cell taskboard-parent taskboard-parent-width",
                            colSpan: _this.props.boardData.states.length + 1
                        }, React.createElement("div", {
                            className: "tbPivotItem"
                        }, React.createElement("div", {
                            className: "ellipsis"
                        }, React.createElement("span", {
                            className: "collapsed-tile-gutter",
                            style: {
                                borderLeftColor: parentWorkItem.workItemColor
                            }
                        }), React.createElement("span", {
                            className: "icon bowtie-icon bowtie-status-warning pivot-warning",
                            style: {
                                display: "none"
                            }
                        }), React.createElement("span", {
                            className: "witTitle"
                        }, parentWorkItem.title), React.createElement("div", {
                            className: "witStateSummary"
                        }))))) : React.createElement("tr", {
                            className: "taskboard-row taskboard-content-row",
                            id: "taskboard-row-" + parentWorkItemIndex
                        }, React.createElement("td", {
                            className: "taskboard-expander highlight-on-row-change"
                        }, React.createElement("button", {
                            onClick: function() {
                                return _this.onCollapse(parentWorkItem)
                            },
                            className: "bowtie-icon bowtie-toggle-tree-expanded",
                            title: "Collapse this row"
                        })), React.createElement("td", {
                            className: "taskboard-cell taskboard-parent highlight-on-row-change",
                            id: "taskboard-table-body_p232"
                        }, React.createElement(BoardGroupCard_1.BoardGroupCard, {
                            key: parentWorkItem.id,
                            workItem: parentWorkItem,
                            onSave: _this.props.updateWorkItem
                        })), _this.props.boardData.states.map(function(state, index) {
                            return React.createElement(BoardCardStateGroup_1.BoardCardStateGroup, {
                                boardData: _this.props.boardData,
                                groupId: parentWorkItem.id.toString(),
                                groupState: state,
                                workItems: _this.props.boardData.workItems.filter(function(x) {
                                    return x.parentId === parentWorkItem.id && x.state === state.name
                                }),
                                updateWorkItem: _this.props.updateWorkItem
                            })
                        }))
                    })))))
                };
                return OneHopQueryBasedBoard
            }(React.Component);
            exports.OneHopQueryBasedBoard = OneHopQueryBasedBoard
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        var __extends = this && this.__extends || function() {
            var extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b
            } || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]
            };
            return function(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
            }
        }();
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(62), __webpack_require__(76)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, models_1, Services_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardGroupCard = function(_super) {
                __extends(BoardGroupCard, _super);

                function BoardGroupCard() {
                    var _this = _super.call(this) || this;
                    _this.onOpenWorkItem = _this.onOpenWorkItem.bind(_this);
                    return _this
                }
                BoardGroupCard.prototype.onOpenWorkItem = function() {
                    var _this = this;
                    Services_1.WorkItemFormNavigationService.getService().then(function(service) {
                        service.openWorkItem(_this.props.workItem.id, false).then(function(wi) {
                            var updatedWi = new models_1.BoardWorkItemModel(wi, _this.props.workItem.parentId);
                            _this.props.onSave(updatedWi)
                        })
                    })
                };
                BoardGroupCard.prototype.render = function() {
                    return React.createElement("div", {
                        className: "tbTile ui-draggable ui-draggable-handle parentTbTile",
                        id: "tile-" + this.props.workItem.id,
                        tabIndex: 0,
                        style: {
                            borderLeftColor: this.props.workItem.workItemColor
                        }
                    }, React.createElement("div", {
                        className: "tbTileContent"
                    }, React.createElement("div", {
                        className: "id-title-container"
                    }, React.createElement("div", {
                        "data-reactroot": "",
                        className: "ms-TooltipHost host_71241a33"
                    }, React.createElement("i", {
                        "aria-describedby": "work-item-type-icon-control-tooltip0",
                        "aria-label": this.props.workItem.workItemType,
                        className: "work-item-type-icon-control work-item-type-icon bowtie-icon " + this.props.workItem.iconCssClasses,
                        style: {
                            color: this.props.workItem.workItemColor
                        }
                    })), React.createElement("div", {
                        className: "title ellipsis"
                    }, React.createElement("span", {
                        className: "clickable-title",
                        role: "button",
                        onClick: this.onOpenWorkItem
                    }, this.props.workItem.title))), React.createElement("div", {
                        className: "container witExtra"
                    }, React.createElement("div", {
                        className: "field-container onTileEditDiv non-combo-behavior ellipsis identity"
                    }, React.createElement("div", {
                        className: "field-inner-element ellipsis onTileEditTextDiv unassigned"
                    }, React.createElement("div", {
                        id: "vss_34"
                    }, React.createElement("span", {
                        className: "identity-picker-display element-height-medium",
                        "data-signin": "string_entityid_unassigned",
                        tabIndex: -1
                    }, React.createElement("img", {
                        src: this.props.workItem.assignedToAvatarUri,
                        alt: "",
                        draggable: false,
                        className: "user-picture-resolved element-2d-medium",
                        "data-objectid": "STRING_ENTITYID_Unassigned",
                        style: {
                            background: "none 0% 0% / 100% no-repeat"
                        }
                    }), React.createElement("span", {
                        className: "identity-picker-resolved-name"
                    }, this.props.workItem.assignedToName)))))), React.createElement("div", {
                        className: "field-container onTileEditDiv non-combo-behavior ellipsis  additional-field lastAdditionalField"
                    }, React.createElement("div", {
                        className: "field-label ellipsis"
                    }, "State"), React.createElement("div", {
                        className: "field-inner-element ellipsis onTileEditTextDiv"
                    }, React.createElement("div", {
                        className: "workitem-state-color-cell onTileEditTextDiv"
                    }, React.createElement("span", {
                        className: "workitem-state-circle onTileEditTextDiv",
                        style: {
                            backgroundColor: this.props.workItem.stateColor,
                            borderColor: this.props.workItem.stateColor
                        }
                    }), React.createElement("span", {
                        className: "workitem-state-value onTileEditTextDiv"
                    }, this.props.workItem.state))))))
                };
                return BoardGroupCard
            }(React.Component);
            exports.BoardGroupCard = BoardGroupCard
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_76__
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        var __extends = this && this.__extends || function() {
            var extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b
            } || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]
            };
            return function(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
            }
        }();
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(62), __webpack_require__(78), __webpack_require__(68)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, ReactDOM, models_1, BoardCard_1, RestClient_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardCardStateGroup = function(_super) {
                __extends(BoardCardStateGroup, _super);

                function BoardCardStateGroup() {
                    var _this = _super.call(this) || this;
                    _this.dropAllowed = function() {
                        if (BoardCard_1.BoardCard.DraggingWorkItem) {
                            var workItem_1 = BoardCard_1.BoardCard.DraggingWorkItem;
                            if (workItem_1.state.toLocaleLowerCase() === _this.props.groupState.name.toLocaleLowerCase()) {
                                return false
                            }
                            if (workItem_1.parentId !== null && workItem_1.parentId.toString() !== _this.props.groupId) {
                                return false
                            }
                            if (_this.props.boardData.stateTransitions.some(function(x) {
                                    return x.workItemType.toLocaleLowerCase() === workItem_1.workItemType.toLocaleLowerCase() && x.fromState.toLocaleLowerCase() === workItem_1.state.toLocaleLowerCase() && x.toState.toLocaleLowerCase() === _this.props.groupState.name.toLocaleLowerCase()
                                })) {
                                return true
                            }
                        }
                        return false
                    };
                    _this.ondragEnter = function(event) {
                        if (_this.dropAllowed()) {
                            var dropzoneElement = event.target;
                            dropzoneElement.classList.add("dragHover")
                        }
                    };
                    _this.ondragLeave = function(event) {
                        event.target.classList.remove("dragHover")
                    };
                    _this.onDrop = function(event) {
                        BoardCard_1.BoardCard.DraggingDropped = true;
                        event.target.classList.remove("dragHover");
                        if (_this.dropAllowed()) {
                            var workItem_2 = BoardCard_1.BoardCard.DraggingWorkItem;
                            var patchDocument = [{
                                op: "add",
                                path: "/fields/System.State",
                                value: _this.props.groupState.name
                            }];
                            _this.witClient.updateWorkItem(patchDocument, workItem_2.id).then(function(wi) {
                                var updatedWi = new models_1.BoardWorkItemModel(wi, workItem_2.parentId);
                                _this.props.updateWorkItem(updatedWi);
                                BoardCard_1.BoardCard.DraggingWorkItem = null
                            }, function(reason) {
                                var relatedTarget = event.relatedTarget;
                                relatedTarget.style.webkitTransform = relatedTarget.style.transform = "translate(0px, 0px)";
                                BoardCard_1.BoardCard.DraggingWorkItem = null
                            })
                        } else {
                            var relatedTarget = event.relatedTarget;
                            relatedTarget.style.webkitTransform = relatedTarget.style.transform = "translate(0px, 0px)";
                            BoardCard_1.BoardCard.DraggingWorkItem = null
                        }
                    };
                    _this.witClient = RestClient_1.getClient();
                    return _this
                }
                BoardCardStateGroup.prototype.componentDidMount = function() {
                    interact.dynamicDrop(true);
                    interact(ReactDOM.findDOMNode(this)).dropzone({
                        ondragenter: this.ondragEnter,
                        ondragleave: this.ondragLeave,
                        ondrop: this.onDrop
                    })
                };
                BoardCardStateGroup.prototype.componentWillUnmount = function() {
                    interact(ReactDOM.findDOMNode(this)).unset()
                };
                BoardCardStateGroup.prototype.render = function() {
                    var _this = this;
                    return React.createElement("td", {
                        className: "taskboard-cell ui-droppable",
                        style: {
                            paddingBottom: "40px",
                            width: 100 / this.props.boardData.states.length + "%"
                        }
                    }, this.props.workItems.map(function(stateWorkItem, stateWorkItemIndex) {
                        return React.createElement(BoardCard_1.BoardCard, {
                            key: stateWorkItem.id,
                            workItem: stateWorkItem,
                            onSave: _this.props.updateWorkItem
                        })
                    }))
                };
                return BoardCardStateGroup
            }(React.Component);
            exports.BoardCardStateGroup = BoardCardStateGroup
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        var __extends = this && this.__extends || function() {
            var extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b
            } || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]
            };
            return function(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
            }
        }();
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(62), __webpack_require__(76)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, ReactDOM, models_1, Services_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BoardCard = function(_super) {
                __extends(BoardCard, _super);

                function BoardCard() {
                    var _this = _super.call(this) || this;
                    _this.dragStartListener = function(event) {
                        BoardCard.DraggingWorkItem = _this.props.workItem;
                        BoardCard.DraggingDropped = false;
                        _this.draggingX = 0;
                        _this.draggingY = 0;
                        _this.DraggingContainer = document.getElementById("taskboard");
                        _this.draggingScrolLeft = _this.DraggingContainer.scrollLeft;
                        _this.draggingScrollTop = _this.DraggingContainer.scrollTop
                    };
                    _this.drageMoveListener = function(event) {
                        if (!event.interaction.interacting()) {
                            return
                        }
                        var target = event.target,
                            x = _this.draggingX + event.dx,
                            y = _this.draggingY + event.dy;
                        event.target.style.zIndex = 1e4;
                        target.style.webkitTransform = target.style.transform = "translate(" + (x + (_this.DraggingContainer.scrollLeft - _this.draggingScrolLeft)) + "px, " + (y + (_this.DraggingContainer.scrollTop - _this.draggingScrollTop)) + "px)";
                        _this.draggingX = x;
                        _this.draggingY = y
                    };
                    _this.dragEndListener = function(event) {
                        if (BoardCard.DraggingDropped === false) {
                            var target = event.target;
                            target.style.webkitTransform = target.style.transform = "translate(0px, 0px)";
                            BoardCard.DraggingWorkItem = null
                        }
                    };
                    _this.onOpenWorkItem = _this.onOpenWorkItem.bind(_this);
                    return _this
                }
                BoardCard.prototype.componentDidMount = function() {
                    interact(ReactDOM.findDOMNode(this)).draggable({
                        inertia: false,
                        onstart: this.dragStartListener,
                        onmove: this.drageMoveListener,
                        onend: this.dragEndListener
                    }).autoScroll({
                        enabled: true,
                        container: document.getElementById("taskboard"),
                        margin: 30,
                        distance: 5,
                        interval: 10
                    }).restrict({
                        drag: {
                            restriction: "#taskboard-table-body",
                            endOnly: true,
                            elementRect: {
                                top: 0,
                                left: 0,
                                bottom: 1,
                                right: 1
                            }
                        }
                    })
                };
                BoardCard.prototype.componentWillUnmount = function() {
                    interact(ReactDOM.findDOMNode(this)).unset()
                };
                BoardCard.prototype.onOpenWorkItem = function() {
                    var _this = this;
                    Services_1.WorkItemFormNavigationService.getService().then(function(service) {
                        service.openWorkItem(_this.props.workItem.id, false).then(function(wi) {
                            var updatedWi = new models_1.BoardWorkItemModel(wi, _this.props.workItem.parentId);
                            _this.props.onSave(updatedWi)
                        })
                    })
                };
                BoardCard.prototype.render = function() {
                    return React.createElement("div", {
                        draggable: true,
                        className: "tbTile ui-draggable ui-draggable-handle childTbTile",
                        id: "tile-" + this.props.workItem.id,
                        "aria-label": "Task, T4, Column New",
                        tabIndex: 0,
                        style: {
                            borderLeftColor: this.props.workItem.workItemColor
                        }
                    }, React.createElement("div", {
                        className: "tbTileContent"
                    }, React.createElement("div", {
                        className: "id-title-container"
                    }, React.createElement("div", {
                        "data-reactroot": "",
                        className: "ms-TooltipHost host_71241a33"
                    }, React.createElement("i", {
                        "aria-describedby": "work-item-type-icon-control-tooltip3",
                        "aria-label": this.props.workItem.workItemType,
                        className: "work-item-type-icon-control work-item-type-icon bowtie-icon " + this.props.workItem.iconCssClasses,
                        style: {
                            color: this.props.workItem.workItemColor
                        }
                    })), React.createElement("div", {
                        className: "title ellipsis"
                    }, React.createElement("span", {
                        className: "clickable-title",
                        role: "button",
                        onClick: this.onOpenWorkItem
                    }, this.props.workItem.title))), React.createElement("div", {
                        className: "container witExtra"
                    }, React.createElement("div", {
                        className: "field-container onTileEditDiv non-combo-behavior ellipsis identity"
                    }, React.createElement("div", {
                        className: "field-inner-element ellipsis onTileEditTextDiv unassigned"
                    }, React.createElement("div", {
                        id: "vss_37"
                    }, React.createElement("span", {
                        className: "identity-picker-display element-height-medium",
                        "data-signin": "string_entityid_unassigned",
                        tabIndex: -1
                    }, React.createElement("img", {
                        src: this.props.workItem.assignedToAvatarUri,
                        alt: "",
                        draggable: false,
                        className: "user-picture-resolved element-2d-medium",
                        style: {
                            background: "none 0% 0% / 100% no-repeat"
                        }
                    }), React.createElement("span", {
                        className: "identity-picker-resolved-name"
                    }, this.props.workItem.assignedToName))))))))
                };
                return BoardCard
            }(React.Component);
            exports.BoardCard = BoardCard
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        var __extends = this && this.__extends || function() {
            var extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b
            } || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]
            };
            return function(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
            }
        }();
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(77)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, React, BoardCardStateGroup_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var FlatQueryBasedBoard = function(_super) {
                __extends(FlatQueryBasedBoard, _super);

                function FlatQueryBasedBoard() {
                    return _super.call(this) || this
                }
                FlatQueryBasedBoard.prototype.render = function() {
                    var _this = this;
                    if (this.props.boardData === undefined) {
                        return React.createElement("div", null)
                    }
                    return React.createElement("div", {
                        id: "taskboard",
                        className: "taskboard"
                    }, React.createElement("div", {
                        id: "taskboardTableHeaderScrollContainer",
                        className: "taskboardTableHeaderScrollContainer",
                        style: {
                            minWidth: this.props.boardData.states.length * 209
                        }
                    }, React.createElement("div", {
                        className: "tableHeaderInnerContainer",
                        style: {
                            paddingRight: "17px"
                        }
                    }, React.createElement("table", {
                        id: "taskboard-table-header",
                        style: {
                            width: "100%",
                            tableLayout: "fixed"
                        }
                    }, React.createElement("thead", null, React.createElement("tr", {
                        key: "taskBoardRow",
                        className: "taskboard-row"
                    }, this.props.boardData.states.map(function(state, index) {
                        return React.createElement("th", {
                            key: "taskboardCell" + index,
                            className: "taskboard-cell",
                            id: "taskboard-table-header_s" + index,
                            style: {
                                width: 100 / _this.props.boardData.states.length + "%"
                            }
                        }, React.createElement("span", {
                            className: "witState"
                        }, state.name), React.createElement("span", {
                            className: "witRemainingWork"
                        }))
                    })))))), React.createElement("div", {
                        className: "taskboardTableBodyScrollContainer scrollable",
                        style: {
                            minWidth: this.props.boardData.states.length * 209
                        }
                    }, React.createElement("table", {
                        id: "taskboard-table-body",
                        style: {
                            width: "100%",
                            tableLayout: "fixed"
                        }
                    }, React.createElement("tbody", null, React.createElement("tr", {
                        className: "taskboard-row taskboard-content-row",
                        id: "taskboard"
                    }, this.props.boardData.states.map(function(state, index) {
                        return React.createElement(BoardCardStateGroup_1.BoardCardStateGroup, {
                            boardData: _this.props.boardData,
                            groupId: null,
                            groupState: state,
                            workItems: _this.props.boardData.workItems.filter(function(x) {
                                return x.state === state.name
                            }),
                            updateWorkItem: _this.props.updateWorkItem
                        })
                    }))))))
                };
                return FlatQueryBasedBoard
            }(React.Component);
            exports.FlatQueryBasedBoard = FlatQueryBasedBoard
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(23), __webpack_require__(81), __webpack_require__(82)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, redux_1, redux_thunk_1, reducers_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.store = redux_1.createStore(reducers_1.state, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default)))
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports) {
        "use strict";
        exports.__esModule = true;

        function createThunkMiddleware(extraArgument) {
            return function(_ref) {
                var dispatch = _ref.dispatch,
                    getState = _ref.getState;
                return function(next) {
                    return function(action) {
                        if (typeof action === "function") {
                            return action(dispatch, getState, extraArgument)
                        }
                        return next(action)
                    }
                }
            }
        }
        var thunk = createThunkMiddleware();
        thunk.withExtraArgument = createThunkMiddleware;
        exports["default"] = thunk
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(23), __webpack_require__(83)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, redux_1, QueryBasedBoard_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.state = redux_1.combineReducers({
                boardData: QueryBasedBoard_1.queryBasedBoardReducer
            })
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(84), __webpack_require__(67)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, Index_1, ActionTypes_1) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.queryBasedBoardReducer = function(state, action) {
                if (state === void 0) {
                    state = null
                }
                switch (action.type) {
                    case ActionTypes_1.ActionTypes.FETCH_QUERYBASEDBOARDDATA_COMPLETED:
                        return handleFetchQueryBasedBoardDataCompleted(state, action.payload);
                    case ActionTypes_1.ActionTypes.UPDATE_WORK_ITEM:
                        return handleUpdateWorkItem(state, action.payload);
                    case ActionTypes_1.ActionTypes.UPDATE_WORK_ITEMS:
                        return handleUpdateWorkItems(state, action.payload)
                }
                return state
            };
            var handleFetchQueryBasedBoardDataCompleted = function(state, payload) {
                return payload
            };
            var handleUpdateWorkItem = function(state, payload) {
                return handleUpdateWorkItems(state, [payload])
            };
            var handleUpdateWorkItems = function(state, payload) {
                var newState = new Index_1.BoardModel(state.queryId, state.queryName, state.queryPath);
                newState.queryType = state.queryType;
                newState.states = state.states;
                newState.stateTransitions = state.stateTransitions;
                state.workItems.forEach(function(x) {
                    var updatedWorkItemfilter = payload.filter(function(item) {
                        return item.id === x.id
                    });
                    if (updatedWorkItemfilter.length > 0) {
                        newState.workItems.push(updatedWorkItemfilter[0])
                    } else {
                        newState.workItems.push(x)
                    }
                });
                newState.allCollapsed = newState.workItems.filter(function(x) {
                    return x.parentId == undefined || x.parentId == null
                }).every(function(x) {
                    return x.collapsed == true
                });
                console.log("newstate.allCollapsed" + newState.allCollapsed);
                return newState
            }
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }, function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(63), __webpack_require__(64), __webpack_require__(65), __webpack_require__(66)], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, BoardModel_1, BoardWorkItemModel_1, BoardStateModel_1, BoardStateTransitionModel_1) {
            "use strict";

            function __export(m) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p]
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __export(BoardModel_1);
            __export(BoardWorkItemModel_1);
            __export(BoardStateModel_1);
            __export(BoardStateTransitionModel_1)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }])
});