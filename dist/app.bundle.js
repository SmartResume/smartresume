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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Applicant_js__ = __webpack_require__(/*! ./classes/Applicant.js */ 1);\n\n\nconst user = new __WEBPACK_IMPORTED_MODULE_0__classes_Applicant_js__[\"a\" /* default */]('John', 'Lennon', 'Abbey Road', 'London', '00001', 'walrus@gmail.com', '123455', 'cool dude', '')\nconsole.log(user.email);\nuser.email = 'asd@gmail.com';\nconsole.log(user.email);\n/**\n* Applicant: (firstName, lastName, streetAddress, city, postalCode, email, phoneNumber, praiseWords, skillSet)\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwbGljYW50IGZyb20gJy4vY2xhc3Nlcy9BcHBsaWNhbnQuanMnO1xuXG5jb25zdCB1c2VyID0gbmV3IEFwcGxpY2FudCgnSm9obicsICdMZW5ub24nLCAnQWJiZXkgUm9hZCcsICdMb25kb24nLCAnMDAwMDEnLCAnd2FscnVzQGdtYWlsLmNvbScsICcxMjM0NTUnLCAnY29vbCBkdWRlJywgJycpXG5jb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcbnVzZXIuZW1haWwgPSAnYXNkQGdtYWlsLmNvbSc7XG5jb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcbi8qKlxuKiBBcHBsaWNhbnQ6IChmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBwb3N0YWxDb2RlLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHByYWlzZVdvcmRzLCBza2lsbFNldClcbiovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/classes/Applicant.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Applicant{\n    constructor(firstName, lastName, streetAddress, city, postalCode, email, phoneNumber, praiseWords, skillSet){\n        this._firstName = firstName,\n        this._lastName = lastName,\n        this._streetAddress = streetAddress,\n        this._city = city,\n        this._postalCode = postalCode,\n        this._email = email,\n        this._phoneNumber = phoneNumber,\n        this._praiseWords = praiseWords,\n        this._skillSet = skillSet\n    }\n    get firstName(){\n        return this._firstName;\n    }\n    set firstName(firstName){\n        this._firstName = firstName;\n    }\n    get lastName(){\n        return this._firstName\n    }\n    set lastName(lastName){\n        this._lastName = lastName;\n    }\n    get streetAddress(){\n        return this._streetAddress;\n    }\n    set streetAddress(streetAddress){\n        this._streetAddress = streetAddress;\n    }\n    get city(){\n        return this._city;\n    }\n    set city(city){\n        this._city = city;\n    }\n    get postalCode(){\n        return this._postalCode;\n    }\n    set postalCode(postalCode){\n        this._postalCode = postalCode;\n    }\n    get email(){\n        return this._email;\n    }\n    set email(email){\n        this._email = email;\n    }\n    get phoneNumber(){\n        return this._phoneNumber;\n    }\n    set phoneNumber(phoneNumber){\n        this._phoneNumber = phoneNumber;\n    }\n    get praiseWords(){\n        return this._praiseWords;\n    }\n    set praiseWords(praiseWords){\n        this._praiseWords = praiseWords;\n    }\n    get skillSet(){\n        return this._skillSet;\n    }\n    set skillSet(skillSet){\n        return this._skillSet;\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Applicant;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0FwcGxpY2FudC5qcz9hZjEyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2FudHtcbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBwb3N0YWxDb2RlLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHByYWlzZVdvcmRzLCBza2lsbFNldCl7XG4gICAgICAgIHRoaXMuX2ZpcnN0TmFtZSA9IGZpcnN0TmFtZSxcbiAgICAgICAgdGhpcy5fbGFzdE5hbWUgPSBsYXN0TmFtZSxcbiAgICAgICAgdGhpcy5fc3RyZWV0QWRkcmVzcyA9IHN0cmVldEFkZHJlc3MsXG4gICAgICAgIHRoaXMuX2NpdHkgPSBjaXR5LFxuICAgICAgICB0aGlzLl9wb3N0YWxDb2RlID0gcG9zdGFsQ29kZSxcbiAgICAgICAgdGhpcy5fZW1haWwgPSBlbWFpbCxcbiAgICAgICAgdGhpcy5fcGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlcixcbiAgICAgICAgdGhpcy5fcHJhaXNlV29yZHMgPSBwcmFpc2VXb3JkcyxcbiAgICAgICAgdGhpcy5fc2tpbGxTZXQgPSBza2lsbFNldFxuICAgIH1cbiAgICBnZXQgZmlyc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdE5hbWU7XG4gICAgfVxuICAgIHNldCBmaXJzdE5hbWUoZmlyc3ROYW1lKXtcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIH1cbiAgICBnZXQgbGFzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0TmFtZVxuICAgIH1cbiAgICBzZXQgbGFzdE5hbWUobGFzdE5hbWUpe1xuICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgIH1cbiAgICBnZXQgc3RyZWV0QWRkcmVzcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyZWV0QWRkcmVzcztcbiAgICB9XG4gICAgc2V0IHN0cmVldEFkZHJlc3Moc3RyZWV0QWRkcmVzcyl7XG4gICAgICAgIHRoaXMuX3N0cmVldEFkZHJlc3MgPSBzdHJlZXRBZGRyZXNzO1xuICAgIH1cbiAgICBnZXQgY2l0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY2l0eTtcbiAgICB9XG4gICAgc2V0IGNpdHkoY2l0eSl7XG4gICAgICAgIHRoaXMuX2NpdHkgPSBjaXR5O1xuICAgIH1cbiAgICBnZXQgcG9zdGFsQ29kZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdGFsQ29kZTtcbiAgICB9XG4gICAgc2V0IHBvc3RhbENvZGUocG9zdGFsQ29kZSl7XG4gICAgICAgIHRoaXMuX3Bvc3RhbENvZGUgPSBwb3N0YWxDb2RlO1xuICAgIH1cbiAgICBnZXQgZW1haWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICAgIH1cbiAgICBzZXQgZW1haWwoZW1haWwpe1xuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xuICAgIH1cbiAgICBnZXQgcGhvbmVOdW1iZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICAgIH1cbiAgICBzZXQgcGhvbmVOdW1iZXIocGhvbmVOdW1iZXIpe1xuICAgICAgICB0aGlzLl9waG9uZU51bWJlciA9IHBob25lTnVtYmVyO1xuICAgIH1cbiAgICBnZXQgcHJhaXNlV29yZHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByYWlzZVdvcmRzO1xuICAgIH1cbiAgICBzZXQgcHJhaXNlV29yZHMocHJhaXNlV29yZHMpe1xuICAgICAgICB0aGlzLl9wcmFpc2VXb3JkcyA9IHByYWlzZVdvcmRzO1xuICAgIH1cbiAgICBnZXQgc2tpbGxTZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NraWxsU2V0O1xuICAgIH1cbiAgICBzZXQgc2tpbGxTZXQoc2tpbGxTZXQpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc2tpbGxTZXQ7XG4gICAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzc2VzL0FwcGxpY2FudC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);