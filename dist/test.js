"use strict";

var _script = _interopRequireDefault(require("../dist/script.js"));

var _Tests = _interopRequireDefault(require("./Tests.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');

class Screen {
  constructor() {
    this.innerHTML = '';
  }

}

const screen = new Screen();
const calculator = new _script.default(screen);
const tests = new _Tests.default(calculator, screen, chai);
tests.runTests();