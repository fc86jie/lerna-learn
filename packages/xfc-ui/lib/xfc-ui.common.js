/******/ var __webpack_modules__ = ({

/***/ 407:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ !function() {
/******/ 	__webpack_require__.p = "";
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ../../node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/button/src/button.vue?vue&type=template&id=7ac4dcdc


const _hoisted_1 = { class: "x-button" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, "XButton"))
}
;// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=7ac4dcdc

;// CONCATENATED MODULE: ../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/button/src/button.vue?vue&type=script&lang=js

/* harmony default export */ var buttonvue_type_script_lang_js = ({
  name: 'XButton',
});

;// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ../../node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(407);
;// CONCATENATED MODULE: ./packages/button/src/button.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(buttonvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var src_button = (__exports__);
;// CONCATENATED MODULE: ./packages/button/index.js
/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-09 11:56:08
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-09 12:20:16
 * @FilePath: \packages\ui\packages\button\index.js
 * @Description:
 */



src_button.install = app => {
  app.component(src_button.name, src_button);
};

/* harmony default export */ var packages_button = (src_button);

;// CONCATENATED MODULE: ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/header/src/header.vue?vue&type=template&id=9a10cb1a


function headervue_type_template_id_9a10cb1a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", null, "XHeader"))
}
;// CONCATENATED MODULE: ./packages/header/src/header.vue?vue&type=template&id=9a10cb1a

;// CONCATENATED MODULE: ../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/header/src/header.vue?vue&type=script&lang=js

/* harmony default export */ var headervue_type_script_lang_js = ({
  name: 'XHeader',
});

;// CONCATENATED MODULE: ./packages/header/src/header.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./packages/header/src/header.vue




;
const header_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(headervue_type_script_lang_js, [['render',headervue_type_template_id_9a10cb1a_render]])

/* harmony default export */ var header = (header_exports_);
;// CONCATENATED MODULE: ./packages/header/index.js
/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-09 11:56:17
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-09 12:08:28
 * @FilePath: \packages\ui\packages\header\index.js
 * @Description:
 */



header.install = app => {
  app.component(header.name, header);
};

/* harmony default export */ var packages_header = (header);

;// CONCATENATED MODULE: ./packages/index.js
/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-09 11:55:23
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-09 12:09:43
 * @FilePath: \packages\ui\packages\index.js
 * @Description:
 */




const componentList = { XButton: packages_button, XHeader: packages_header };

const install = app => {
  Object.keys(componentList).forEach(componentName => {
    let comp = componentList[componentName];
    app.component(comp.name, comp);
  });
};

/* harmony default export */ var packages_0 = ({
  install,
});

;// CONCATENATED MODULE: ../../node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
module.exports = __webpack_exports__;

//# sourceMappingURL=xfc-ui.common.js.map