// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	var _router = __webpack_require__(9);

	var _router2 = _interopRequireDefault(_router);

	var _store = __webpack_require__(50);

	var _store2 = _interopRequireDefault(_store);

	var _vuexRouterSync = __webpack_require__(55);

	var _filters = __webpack_require__(56);

	var filters = _interopRequireWildcard(_filters);

	var _mixins = __webpack_require__(57);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _vuexRouterSync.sync)(_store2.default, _router2.default);

	Object.keys(filters).forEach(function (key) {
	  Vue.filter(key, filters[key]);
	});

	Vue.mixin(_mixins2.default);

	new Vue(Vue.util.extend({ el: '#root', router: _router2.default, store: _store2.default }, _App2.default));

	_router2.default.push('/');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "alignItems": "center",
	    "height": 100
	  },
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "color": "#41B883"
	  },
	  "cnt": {
	    "width": 100
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _appHeader = __webpack_require__(4);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    AppHeader: _appHeader2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/components/app-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "width": 100,
	    "position": "relative",
	    "top": 0,
	    "left": 0,
	    "height": 120,
	    "marginBottom": 3,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#0066FF",
	    "backgroundColor": "#0099FF"
	  },
	  "logo": {
	    "position": "relative",
	    "width": 50,
	    "height": 50,
	    "top": 35,
	    "left": 35,
	    "color": "#ffffff",
	    "zIndex": 10
	  },
	  "image": {
	    "width": 44,
	    "height": 44
	  },
	  "text": {
	    "position": "relative",
	    "top": -20,
	    "fontSize": 50,
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      target: 'weex-demo'
	    };
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["header"]
	  }, [_h('div', {
	    staticClass: ["logo"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/')
	      }
	    }
	  }, [_h('image', {
	    staticClass: ["image"],
	    attrs: {
	      "src": "http://localhost:3000/images/back.png"
	    }
	  })]), _h('text', {
	    staticClass: ["text"]
	  }, [_vm._s(_vm.target)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["wrapper"]
	  }, [_h('app-header'), _h('router-view', {
	    staticStyle: {
	      flex: "1"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueRouter = __webpack_require__(10);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _loginPage = __webpack_require__(12);

	var _loginPage2 = _interopRequireDefault(_loginPage);

	var _index = __webpack_require__(16);

	var _index2 = _interopRequireDefault(_index);

	var _longlist = __webpack_require__(20);

	var _longlist2 = _interopRequireDefault(_longlist);

	var _storage = __webpack_require__(24);

	var _storage2 = _interopRequireDefault(_storage);

	var _router = __webpack_require__(28);

	var _router2 = _interopRequireDefault(_router);

	var _routerTaobao = __webpack_require__(32);

	var _routerTaobao2 = _interopRequireDefault(_routerTaobao);

	var _changeNet = __webpack_require__(35);

	var _changeNet2 = _interopRequireDefault(_changeNet);

	var _modal = __webpack_require__(38);

	var _modal2 = _interopRequireDefault(_modal);

	var _picker = __webpack_require__(42);

	var _picker2 = _interopRequireDefault(_picker);

	var _getUser = __webpack_require__(46);

	var _getUser2 = _interopRequireDefault(_getUser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vueRouter2.default);

	exports.default = new _vueRouter2.default({
	    // mode: 'abstract',
	    routes: [{ path: '/index', component: _index2.default }, { path: '/loginPage', component: _loginPage2.default }, { path: '/longlist', component: _longlist2.default }, { path: '/storage', component: _storage2.default }, { path: '/router', component: _router2.default }, { path: '/router/taobao', component: _routerTaobao2.default }, { path: '/changeNet', component: _changeNet2.default }, { path: '/modal', component: _modal2.default }, { path: '/picker', component: _picker2.default }, { path: '/getUser', component: _getUser2.default }, { path: '/', redirect: '/index' }]
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.1
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {});
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined;
	      }
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery;
	    try {
	      parsedQuery = parseQuery(query);
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message);
	      parsedQuery = {};
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key];
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom);
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;
	    var classes = {};
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	    var compareTarget = location.path ? createRoute(null, location) : route;
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;

	  _Vue = Vue;

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	    }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathMap,
	  oldNameMap
	) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null);

	function getRouteRegex (path) {
	  var hit = regexpCache[path];
	  var keys, regexp;

	  if (hit) {
	    keys = hit.keys;
	    regexp = hit.regexp;
	  } else {
	    keys = [];
	    regexp = index(path, keys);
	    regexpCache[path] = { keys: keys, regexp: regexp };
	  }

	  return { keys: keys, regexp: regexp }
	}

	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/';
	  var query = resolveQuery(parsedPath.query, next.query);
	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      );
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) { params[key.name] = val; }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, onAbort);
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function () { onAbort && onAbort(); };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = baseEl ? baseEl.getAttribute('href') : '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  return function boundRouteGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = once(function (resolvedDef) {
	          match.components[key] = resolvedDef;
	          next();
	        });

	        var reject = once(function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason));
	          next(false);
	        });

	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path;
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || []);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn);
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn);
	};

	VueRouter.prototype.onReady = function onReady (cb) {
	  this.history.onReady(cb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(to, current || this.history.current, append);
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.2.1';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/login-page.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "cnt": {
	    "marginTop": 40
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var storage = weex.requireModule('storage');
	exports.default = {
	  data: function data() {
	    return {
	      name: "",
	      password: ""
	    };
	  },

	  methods: {
	    login: function login() {
	      stream.fetch({
	        method: 'POST',
	        type: 'json',
	        url: 'http://localhost:3000/login',
	        headers: {
	          "Content-Type": "application/x-www-form-urlencoded"
	        },
	        body: 'name=' + this.$refs.name.value + '&password=' + this.$refs.password.value
	      }, function (res) {
	        if (res.data.code === 200) {
	          modal.toast({
	            message: '登录成功',
	            duration: 0.3
	          });
	          storage.setItem('username', res.data.result.name);
	          debugger;
	        } else {
	          modal.toast({
	            message: '用户信息验证失败',
	            duration: 0.3
	          });
	        }
	      });
	    }
	  }

	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["cnt"]
	  }, [_h('input', {
	    ref: "name",
	    attrs: {
	      "placeholder": "name",
	      "autofocus": "true"
	    }
	  }, [_h('input', {
	    ref: "password",
	    attrs: {
	      "placeholder": "password",
	      "autofocus": "true"
	    }
	  }, [_h('button', {
	    on: {
	      "click": _vm.login
	    }
	  }, ["确认"])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(17)
	)

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "cnt": {
	    "width": 100,
	    "display": "block",
	    "position": "relative",
	    "overflowX": "hidden",
	    "overflowY": "scroll"
	  },
	  "list": {
	    "display": "inline-block",
	    "width": 100
	  },
	  "panel": {
	    "width": 90,
	    "height": 100,
	    "marginLeft": 5,
	    "marginTop": 35,
	    "marginBottom": 35,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)",
	    "boxSizing": "content-box"
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {

	      listData: [{
	        text: '登录',
	        name: 'login',
	        url: '/LoginPage'
	      },
	      // {
	      //   text: '二维码',
	      //   name: 'qrcode',
	      //   url: '/qrcode'
	      // },
	      {
	        text: '本地存储',
	        name: 'storage',
	        url: '/storage'
	      }, {
	        text: '获取当前用户信息',
	        name: 'getUser',
	        url: '/getUser'
	      },
	      // {
	      //   text: '网络类型切换提醒',
	      //   name: 'changeNet',
	      //   url: '/changeNet'
	      // }, 
	      {
	        text: '路由',
	        name: 'router',
	        url: '/router'
	      }, {
	        text: '长列表滑动',
	        name: 'longlist',
	        url: '/longlist'
	      }, {
	        text: '模态框',
	        name: 'modal',
	        url: '/modal'
	      }]
	    };
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticStyle: {
	      width: "100%"
	    }
	  }, [_h('list', {
	    staticClass: ["list"]
	  }, [_vm._l((_vm.listData), function(num) {
	    return _h('cell', {
	      staticClass: ["cell"]
	    }, [_h('div', {
	      staticClass: ["panel"],
	      on: {
	        "click": function($event) {
	          _vm.jump(("" + (num.url)))
	        }
	      }
	    }, [_h('text', {
	      staticClass: ["text"]
	    }, [_vm._s(num.text)])])])
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/longlist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  "scroller": {
	    "width": 100,
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "borderRight": 0,
	    "borderLeft": 0
	  },
	  "row": {
	    "height": 100,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 30,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  },
	  "text": {
	    "fontSize": 45,
	    "color": "#666666"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "marginTop": 60
	  },
	  "button": {
	    "width": 200,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "fontSize": 40,
	    "marginLeft": 30,
	    "marginRight": 30,
	    "textAlign": "center",
	    "color": "#41B883",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	exports.default = {
	  data: function data() {
	    return {
	      rows: []
	    };
	  },
	  created: function created() {
	    for (var i = 0; i < 30; i++) {
	      this.rows.push('row ' + i);
	    }
	  },

	  methods: {
	    goto10: function goto10(count) {
	      var el = this.$refs.item10[0];
	      dom.scrollToElement(el, {});
	    },
	    goto20: function goto20(count) {
	      var el = this.$refs.item20[0];
	      dom.scrollToElement(el, {
	        offset: 0
	      });
	    }
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["cnt"]
	  }, [_h('text', {
	    staticClass: ["text"]
	  }, ["长列表"]), _h('scroller', {
	    staticClass: ["scroller"]
	  }, [_vm._l((_vm.rows), function(name, index) {
	    return _h('div', {
	      ref: 'item' + index,
	      refInFor: true,
	      staticClass: ["row"]
	    }, [_h('text', {
	      ref: 'text' + index,
	      refInFor: true,
	      staticClass: ["text"]
	    }, [_vm._s(name)])])
	  })]), _h('div', {
	    staticClass: ["group"]
	  }, [_h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.goto10
	    }
	  }, ["Go to 10"]), _h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.goto20
	    }
	  }, ["Go to 20"])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(27)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/storage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	  "input": {
	    "fontSize": 50,
	    "width": 650,
	    "marginTop": 50,
	    "marginLeft": 50,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "color": "#666666",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  },
	  "panel": {
	    "height": 100,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 650,
	    "marginLeft": 50,
	    "marginTop": 50,
	    "marginBottom": 50
	  },
	  "center": {
	    "justifyContent": "center"
	  },
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "color": "#41B883"
	  },
	  "small": {
	    "fontSize": 32,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "color": "#41B883"
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');
	exports.default = {
	  data: function data() {
	    return {
	      msg: '',
	      keys: '[]',
	      length: 0,
	      state: '----'
	    };
	  },

	  methods: {
	    setItem: function setItem() {
	      var _this = this;

	      storage.setItem('name', this.$refs.input.value, function (event) {
	        _this.state = 'set success';
	        console.log('set success');
	      });
	    },
	    getItem: function getItem() {
	      var _this2 = this;

	      storage.getItem('name', function (event) {
	        console.log('get value:', event.data);
	        _this2.state = 'value: ' + event.data;
	      });
	    },
	    removeItem: function removeItem() {
	      var _this3 = this;

	      storage.removeItem('name', function (event) {
	        console.log('delete value:', event.data);
	        _this3.state = 'deleted';
	      });
	    },
	    getAll: function getAll() {
	      storage.getAllKeys(function (event) {
	        // modal.toast({ message: event.result })
	        if (event.result === 'success') {
	          modal.toast({
	            message: 'props: ' + event.data.join(', ')
	          });
	        }
	      });
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["list"]
	  }, [_h('div', {
	    staticClass: ["group", "center"]
	  }, [_h('div', {
	    staticClass: ["panel"]
	  }, [_h('text', {
	    staticClass: ["text"]
	  }, [_vm._s(_vm.state)])])]), _h('input', {
	    ref: "input",
	    staticClass: ["input"],
	    attrs: {
	      "autofocus": "true",
	      "type": "text",
	      "value": (_vm.msg)
	    },
	    on: {
	      "change": function($event) {
	        _vm.msg = $event.target.attr.value
	      }
	    }
	  }, [_h('div', {
	    staticClass: ["group"]
	  }, [_h('div', {
	    staticClass: ["panel"]
	  }, [_h('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.setItem
	    }
	  }, ["set"])]), _h('div', {
	    staticClass: ["panel"]
	  }, [_h('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.getItem
	    }
	  }, ["get"])]), _h('div', {
	    staticClass: ["panel"]
	  }, [_h('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.removeItem
	    }
	  }, ["remove"])]), _h('div', {
	    staticClass: ["panel"]
	  }, [_h('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.getAll
	    }
	  }, ["all"])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(29)
	)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/router.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  "cnt": {
	    "minHeight": 100
	  },
	  "button": {
	    "margin": 30,
	    "fontSize": 60,
	    "width": 90,
	    "textAlign": "center",
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "color": "#666666",
	    "borderColor": "#DDDDDD",
	    "backgroundColor": "#F5F5F5"
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');

	exports.default = {

	  methods: {
	    jump: function jump(url) {
	      navigator.push({
	        url: url,
	        animated: "false"
	      });
	    }
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["cnt"]
	  }, [_h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": function($event) {
	        _vm.jump("/#/index")
	      }
	    }
	  }, ["跳到app内部首页"]), _h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": function($event) {
	        _vm.jump("/#/router/taobao")
	      }
	    }
	  }, ["跳到app外部页面"])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(33)

	/* template */
	var __vue_template__ = __webpack_require__(34)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/router-taobao.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      url: 'https://www.taobao.com'
	    };
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('web', {
	    ref: "webview",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.url
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(36)

	/* template */
	var __vue_template__ = __webpack_require__(37)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/change-net.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 36 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	"use strict";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticStyle: {
	      width: "100%"
	    }
	  }, [_h('text', ["change network"])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(39)
	)

	/* script */
	__vue_exports__ = __webpack_require__(40)

	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "button": {
	    "fontSize": 60,
	    "width": 450,
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginLeft": 150,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "color": "#666666",
	    "borderColor": "#DDDDDD",
	    "backgroundColor": "#F5F5F5"
	  }
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	exports.default = {

	  methods: {
	    showToast: function showToast(event) {
	      console.log('will show toast');
	      modal.toast({
	        message: 'This is a toast',
	        duration: 0.3
	      });
	    },
	    showAlert: function showAlert(event) {
	      console.log('will show alert');
	      modal.alert({
	        message: 'This is a alert',
	        duration: 3,
	        okTitle: '确定'
	      });
	    },
	    showConfirm: function showConfirm(event) {
	      console.log('will show confirm');
	      modal.confirm({
	        message: 'Do you confirm ?',
	        duration: 0.3
	      });
	    },
	    showPrompt: function showPrompt(event) {
	      console.log('will show prompt');
	      modal.prompt({
	        message: 'This is a prompt',
	        duration: 0.3
	      });
	    }
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["cnt"]
	  }, [_h('div', [_h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showToast
	    }
	  }, ["Toast"]), _h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showAlert
	    }
	  }, ["Alert"]), _h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showConfirm
	    }
	  }, ["Confirm"]), _h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.showPrompt
	    }
	  }, ["Prompt"])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(43)
	)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(45)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/picker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "marginBottom": 40,
	    "alignItems": "center"
	  },
	  "label": {
	    "fontSize": 40,
	    "color": "#888888"
	  },
	  "title": {
	    "fontSize": 80,
	    "color": "#41B883"
	  },
	  "button": {
	    "fontSize": 36,
	    "width": 280,
	    "color": "#41B883",
	    "textAlign": "center",
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var picker = weex.requireModule('picker');
	exports.default = {
	  data: function data() {
	    return {
	      value: ''
	    };
	  },

	  methods: {
	    pickTime: function pickTime() {
	      var _this = this;

	      picker.pickTime({
	        value: this.value
	      }, function (event) {
	        if (event.result === 'success') {
	          _this.value = event.data;
	        }
	      });
	    }
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["cnt"]
	  }, [_h('div', {
	    staticClass: ["group"]
	  }, [_h('text', {
	    staticClass: ["label"]
	  }, ["Time: "]), _h('text', {
	    staticClass: ["title"]
	  }, [_vm._s(_vm.value)])]), _h('div', {
	    staticClass: ["group"]
	  }, [_h('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.pickTime
	    }
	  }, ["Pick Time"])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hl/Desktop/weexDemo/WeexDemoSong/test-weex/src/views/getUser.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = {
	  "cnt": {
	    "width": 100,
	    "textAlign": "center"
	  },
	  "ml": {
	    "display": "block",
	    "marginLeft": 10
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	exports.default = {
	  data: function data() {
	    return {
	      userName: "",
	      isShow: false
	    };
	  },

	  methods: {
	    getUserInfo: function getUserInfo() {
	      var _this = this;

	      storage.getItem('username', function (event) {
	        _this.$data.userName = event.data;
	        _this.$data.isShow = true;
	      });
	    }
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["cnt"]
	  }, [_h('button', {
	    on: {
	      "click": _vm.getUserInfo
	    }
	  }, ["获取当前用户信息"]), (_vm.isShow) ? _h('div', {
	    staticClass: ["ml"]
	  }, [_h('text', ["用户名：" + _vm._s(_vm.userName)])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuex = __webpack_require__(51);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _actions = __webpack_require__(52);

	var actions = _interopRequireWildcard(_actions);

	var _mutations = __webpack_require__(54);

	var mutations = _interopRequireWildcard(_mutations);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Vuex is auto installed on the web
	if (WXEnvironment.platform !== 'Web') {
	  Vue.use(_vuex2.default);
	} // import Vue from 'vue'


	var store = new _vuex2.default.Store({
	  actions: actions,
	  mutations: mutations,

	  state: {
	    activeType: null,
	    items: {},
	    users: {},
	    counts: {
	      top: 20,
	      new: 20,
	      show: 15,
	      ask: 15,
	      job: 15
	    },
	    lists: {
	      top: [],
	      new: [],
	      show: [],
	      ask: [],
	      job: []
	    }
	  },

	  getters: {
	    // ids of the items that should be currently displayed based on
	    // current list type and current pagination
	    activeIds: function activeIds(state) {
	      var activeType = state.activeType,
	          lists = state.lists,
	          counts = state.counts;

	      return activeType ? lists[activeType].slice(0, counts[activeType]) : [];
	    },


	    // items that should be currently displayed.
	    // this Array may not be fully fetched.
	    activeItems: function activeItems(state, getters) {
	      return getters.activeIds.map(function (id) {
	        return state.items[id];
	      }).filter(function (_) {
	        return _;
	      });
	    }
	  }
	});

	exports.default = store;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.1.2
	 * (c) 2017 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Vuex = factory());
	}(this, (function () { 'use strict';

	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }

	  store._devtoolHook = devtoolHook;

	  devtoolHook.emit('vuex:init', store);

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState);
	  });

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state);
	  });
	}

	var applyMixin = function (Vue) {
	  var version = Number(Vue.version.split('.')[0]);

	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};

	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit;
	      _init.call(this, options);
	    };
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit () {
	    var options = this.$options;
	    // store injection
	    if (options.store) {
	      this.$store = options.store;
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store;
	    }
	  }
	};

	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {};
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState () {
	      var state = this.$store.state;
	      var getters = this.$store.getters;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
	        if (!module) {
	          return
	        }
	        state = module.context.state;
	        getters = module.context.getters;
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    };
	  });
	  return res
	});

	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {};
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
	        return
	      }
	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {};
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedGetter () {
	      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
	        return
	      }
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val));
	        return
	      }
	      return this.$store.getters[val]
	    };
	  });
	  return res
	});

	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {};
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
	        return
	      }
	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}

	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace;
	      namespace = '';
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/';
	    }
	    return fn(namespace, map)
	  }
	}

	function getModuleByNamespace (store, helper, namespace) {
	  var module = store._modulesNamespaceMap[namespace];
	  if (!module) {
	    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
	  }
	  return module
	}

	/**
	 * Get the first item that pass the test
	 * by second argument function
	 *
	 * @param {Array} list
	 * @param {Function} f
	 * @return {*}
	 */
	/**
	 * Deep copy the given object considering circular structure.
	 * This function caches all nested objects and its copies.
	 * If it detects circular structure, use cached copy to avoid infinite loop.
	 *
	 * @param {*} obj
	 * @param {Array<Object>} cache
	 * @return {*}
	 */


	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
	}

	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}

	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}

	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime;
	  this._children = Object.create(null);
	  this._rawModule = rawModule;
	};

	var prototypeAccessors$1 = { state: {},namespaced: {} };

	prototypeAccessors$1.state.get = function () {
	  return this._rawModule.state || {}
	};

	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};

	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module;
	};

	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key];
	};

	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};

	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced;
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions;
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations;
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters;
	  }
	};

	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn);
	};

	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn);
	  }
	};

	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn);
	  }
	};

	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn);
	  }
	};

	Object.defineProperties( Module.prototype, prototypeAccessors$1 );

	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  var this$1 = this;

	  // register root module (Vuex.Store options)
	  this.root = new Module(rawRootModule, false);

	  // register all nested modules
	  if (rawRootModule.modules) {
	    forEachValue(rawRootModule.modules, function (rawModule, key) {
	      this$1.register([key], rawModule, false);
	    });
	  }
	};

	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};

	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root;
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key);
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};

	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update(this.root, rawRootModule);
	};

	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;

	  var parent = this.get(path.slice(0, -1));
	  var newModule = new Module(rawModule, runtime);
	  parent.addChild(path[path.length - 1], newModule);

	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime);
	    });
	  }
	};

	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1));
	  var key = path[path.length - 1];
	  if (!parent.getChild(key).runtime) { return }

	  parent.removeChild(key);
	};

	function update (targetModule, newModule) {
	  // update target module
	  targetModule.update(newModule);

	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        );
	        return
	      }
	      update(targetModule.getChild(key), newModule.modules[key]);
	    }
	  }
	}

	var Vue; // bind on install

	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};

	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;

	  // store internal state
	  this._committing = false;
	  this._actions = Object.create(null);
	  this._mutations = Object.create(null);
	  this._wrappedGetters = Object.create(null);
	  this._modules = new ModuleCollection(options);
	  this._modulesNamespaceMap = Object.create(null);
	  this._subscribers = [];
	  this._watcherVM = new Vue();

	  // bind commit and dispatch to self
	  var store = this;
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  };
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	  };

	  // strict mode
	  this.strict = strict;

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root);

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state);

	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
	};

	var prototypeAccessors = { state: {} };

	prototypeAccessors.state.get = function () {
	  return this._vm.$data.state
	};

	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.");
	};

	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;

	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;

	  var mutation = { type: type, payload: payload };
	  var entry = this._mutations[type];
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type));
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload);
	    });
	  });
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

	  if (options && options.silent) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    );
	  }
	};

	Store.prototype.dispatch = function dispatch (_type, _payload) {
	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;

	  var entry = this._actions[type];
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type));
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};

	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers;
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn);
	  }
	  return function () {
	    var i = subs.indexOf(fn);
	    if (i > -1) {
	      subs.splice(i, 1);
	    }
	  }
	};

	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;

	  assert(typeof getter === 'function', "store.watch only accepts a function.");
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};

	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm.state = state;
	  });
	};

	Store.prototype.registerModule = function registerModule (path, rawModule) {
	  if (typeof path === 'string') { path = [path]; }
	  assert(Array.isArray(path), "module path must be a string or an Array.");
	  this._modules.register(path, rawModule);
	  installModule(this, this.state, path, this._modules.get(path));
	  // reset store to update getters...
	  resetStoreVM(this, this.state);
	};

	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;

	  if (typeof path === 'string') { path = [path]; }
	  assert(Array.isArray(path), "module path must be a string or an Array.");
	  this._modules.unregister(path);
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1));
	    Vue.delete(parentState, path[path.length - 1]);
	  });
	  resetStore(this);
	};

	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions);
	  resetStore(this, true);
	};

	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing;
	  this._committing = true;
	  fn();
	  this._committing = committing;
	};

	Object.defineProperties( Store.prototype, prototypeAccessors );

	function resetStore (store, hot) {
	  store._actions = Object.create(null);
	  store._mutations = Object.create(null);
	  store._wrappedGetters = Object.create(null);
	  store._modulesNamespaceMap = Object.create(null);
	  var state = store.state;
	  // init all modules
	  installModule(store, state, [], store._modules.root, true);
	  // reset vm
	  resetStoreVM(store, state, hot);
	}

	function resetStoreVM (store, state, hot) {
	  var oldVm = store._vm;

	  // bind store public getters
	  store.getters = {};
	  var wrappedGetters = store._wrappedGetters;
	  var computed = {};
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); };
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    });
	  });

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent;
	  Vue.config.silent = true;
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  });
	  Vue.config.silent = silent;

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store);
	  }

	  if (oldVm) {
	    if (hot) {
	      // dispatch changes in all subscribed watchers
	      // to force getter re-evaluation for hot reloading.
	      store._withCommit(function () {
	        oldVm.state = null;
	      });
	    }
	    Vue.nextTick(function () { return oldVm.$destroy(); });
	  }
	}

	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length;
	  var namespace = store._modules.getNamespace(path);

	  // register in namespace map
	  if (namespace) {
	    store._modulesNamespaceMap[namespace] = module;
	  }

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1));
	    var moduleName = path[path.length - 1];
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state);
	    });
	  }

	  var local = module.context = makeLocalContext(store, namespace, path);

	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key;
	    registerMutation(store, namespacedType, mutation, local);
	  });

	  module.forEachAction(function (action, key) {
	    var namespacedType = namespace + key;
	    registerAction(store, namespacedType, action, local);
	  });

	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key;
	    registerGetter(store, namespacedType, getter, local);
	  });

	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot);
	  });
	}

	/**
	 * make localized dispatch, commit, getters and state
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace, path) {
	  var noNamespace = namespace === '';

	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (!store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      return store.dispatch(type, payload)
	    },

	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (!store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      store.commit(type, payload, options);
	    }
	  };

	  // getters and state object must be gotten lazily
	  // because they will be changed by vm update
	  Object.defineProperties(local, {
	    getters: {
	      get: noNamespace
	        ? function () { return store.getters; }
	        : function () { return makeLocalGetters(store, namespace); }
	    },
	    state: {
	      get: function () { return getNestedState(store.state, path); }
	    }
	  });

	  return local
	}

	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {};

	  var splitPos = namespace.length;
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }

	    // extract local getter type
	    var localType = type.slice(splitPos);

	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    });
	  });

	  return gettersProxy
	}

	function registerMutation (store, type, handler, local) {
	  var entry = store._mutations[type] || (store._mutations[type] = []);
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(local.state, payload);
	  });
	}

	function registerAction (store, type, handler, local) {
	  var entry = store._actions[type] || (store._actions[type] = []);
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: local.state,
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb);
	    if (!isPromise(res)) {
	      res = Promise.resolve(res);
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err);
	        throw err
	      })
	    } else {
	      return res
	    }
	  });
	}

	function registerGetter (store, type, rawGetter, local) {
	  if (store._wrappedGetters[type]) {
	    console.error(("[vuex] duplicate getter key: " + type));
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      local.state, // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  };
	}

	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
	  }, { deep: true, sync: true });
	}

	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}

	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload;
	    payload = type;
	    type = type.type;
	  }

	  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

	  return { type: type, payload: payload, options: options }
	}

	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    );
	    return
	  }
	  Vue = _Vue;
	  applyMixin(Vue);
	}

	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	var index = {
	  Store: Store,
	  install: install,
	  version: '2.1.2',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	};

	return index;

	})));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FETCH_LIST_DATA = FETCH_LIST_DATA;
	exports.LOAD_MORE_ITEMS = LOAD_MORE_ITEMS;
	exports.ENSURE_ACTIVE_ITEMS = ENSURE_ACTIVE_ITEMS;
	exports.FETCH_ITEMS = FETCH_ITEMS;
	exports.FETCH_USER = FETCH_USER;

	var _fetch = __webpack_require__(53);

	var LOAD_MORE_STEP = 10;

	// ensure data for rendering given list type
	function FETCH_LIST_DATA(_ref, _ref2) {
	  var commit = _ref.commit,
	      dispatch = _ref.dispatch,
	      state = _ref.state;
	  var type = _ref2.type;

	  commit('SET_ACTIVE_TYPE', { type: type });
	  return (0, _fetch.fetchIdsByType)(type).then(function (ids) {
	    return commit('SET_LIST', { type: type, ids: ids });
	  }).then(function () {
	    return dispatch('ENSURE_ACTIVE_ITEMS');
	  });
	}

	// load more items
	function LOAD_MORE_ITEMS(_ref3) {
	  var dispatch = _ref3.dispatch,
	      state = _ref3.state;

	  state.counts[state.activeType] += LOAD_MORE_STEP;
	  return dispatch('ENSURE_ACTIVE_ITEMS');
	}

	// ensure all active items are fetched
	function ENSURE_ACTIVE_ITEMS(_ref4) {
	  var dispatch = _ref4.dispatch,
	      getters = _ref4.getters;

	  return dispatch('FETCH_ITEMS', {
	    ids: getters.activeIds
	  });
	}

	function FETCH_ITEMS(_ref5, _ref6) {
	  var commit = _ref5.commit,
	      state = _ref5.state;
	  var ids = _ref6.ids;

	  // only fetch items that we don't already have.
	  var newIds = ids.filter(function (id) {
	    return !state.items[id];
	  });
	  return newIds.length ? (0, _fetch.fetchItems)(newIds).then(function (items) {
	    return commit('SET_ITEMS', { items: items });
	  }) : Promise.resolve();
	}

	function FETCH_USER(_ref7, _ref8) {
	  var commit = _ref7.commit,
	      state = _ref7.state;
	  var id = _ref8.id;

	  return state.users[id] ? Promise.resolve(state.users[id]) : (0, _fetch.fetchUser)(id).then(function (user) {
	    return commit('SET_USER', { user: user });
	  });
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetch = fetch;
	exports.fetchIdsByType = fetchIdsByType;
	exports.fetchItem = fetchItem;
	exports.fetchItems = fetchItems;
	exports.fetchUser = fetchUser;
	var stream = weex.requireModule('stream');
	var baseURL = 'http://localhost:3000/env';

	function fetch(path) {
	    return new Promise(function (resolve, reject) {
	        stream.fetch({
	            method: 'GET',
	            url: baseURL + '/' + path + '.json',
	            type: 'json'
	        }, function (response) {
	            if (response.status == 200) {
	                resolve(response.data);
	            } else {
	                reject(response);
	            }
	        }, function () {});
	    });
	}

	function fetchIdsByType(type) {
	    return fetch(type + 'stories');
	}

	function fetchItem(id) {
	    return fetch('item/' + id);
	}

	function fetchItems(ids) {
	    return Promise.all(ids.map(function (id) {
	        return fetchItem(id);
	    }));
	}

	function fetchUser(id) {
	    return fetch('user/' + id);
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_ACTIVE_TYPE = SET_ACTIVE_TYPE;
	exports.SET_LIST = SET_LIST;
	exports.SET_ITEMS = SET_ITEMS;
	exports.SET_USER = SET_USER;
	function SET_ACTIVE_TYPE(state, _ref) {
	  var type = _ref.type;

	  state.activeType = type;
	}

	function SET_LIST(state, _ref2) {
	  var type = _ref2.type,
	      ids = _ref2.ids;

	  state.lists[type] = ids;
	}

	function SET_ITEMS(state, _ref3) {
	  var items = _ref3.items;

	  items.forEach(function (item) {
	    if (item) {
	      Vue.set(state.items, item.id, item);
	    }
	  });
	}

	function SET_USER(state, _ref4) {
	  var user = _ref4.user;

	  Vue.set(state.users, user.id, user);
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	exports.sync = function (store, router, options) {
	  var moduleName = (options || {}).moduleName || 'route'

	  store.registerModule(moduleName, {
	    state: cloneRoute(router.currentRoute),
	    mutations: {
	      'router/ROUTE_CHANGED': function (state, transition) {
	        store.state[moduleName] = cloneRoute(transition.to, transition.from)
	      }
	    }
	  })

	  var isTimeTraveling = false
	  var currentPath

	  // sync router on store change
	  store.watch(
	    function (state) { return state[moduleName] },
	    function (route) {
	      if (route.fullPath === currentPath) {
	        return
	      }
	      isTimeTraveling = true
	      currentPath = route.fullPath
	      router.push(route)
	    },
	    { sync: true }
	  )

	  // sync store on router navigation
	  router.afterEach(function (to, from) {
	    if (isTimeTraveling) {
	      isTimeTraveling = false
	      return
	    }
	    currentPath = to.fullPath
	    store.commit('router/ROUTE_CHANGED', { to: to, from: from })
	  })
	}

	function cloneRoute (to, from) {
	  var clone = {
	    name: to.name,
	    path: to.path,
	    hash: to.hash,
	    query: to.query,
	    params: to.params,
	    fullPath: to.fullPath,
	    meta: to.meta
	  }
	  if (from) {
	    clone.from = cloneRoute(from)
	  }
	  return Object.freeze(clone)
	}


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.host = host;
	exports.https = https;
	exports.timeAgo = timeAgo;
	exports.unescape = unescape;
	function host(url) {
	  if (!url) return '';
	  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
	  var parts = host.split('.').slice(-3);
	  if (parts[0] === 'www') parts.shift();
	  return parts.join('.');
	}

	function https(url) {
	  if (WXEnvironment.platform === 'iOS' && typeof url === 'string') {
	    return url.replace(/^http\:/, 'https:');
	  }
	  return '';
	}

	function timeAgo(time) {
	  var between = Date.now() / 1000 - Number(time);
	  if (between < 3600) {
	    return pluralize(~~(between / 60), ' minute');
	  } else if (between < 86400) {
	    return pluralize(~~(between / 3600), ' hour');
	  } else {
	    return pluralize(~~(between / 86400), ' day');
	  }
	}

	function pluralize(time, label) {
	  if (time === 1) {
	    return time + label;
	  }
	  return time + label + 's';
	}

	function unescape(text) {
	  var res = text || '';[['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
	    res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
	  });

	  return res;
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  methods: {
	    jump: function jump(to) {
	      if (this.$router) {
	        this.$router.push(to);
	      }
	    }
	  }
	};

/***/ }
/******/ ]);