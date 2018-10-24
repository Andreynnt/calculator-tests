import Calculator from '../dist/calculator.js';
import Tests from './Tests.js';
var chai = require('chai');

const calculator = new Calculator();
const tests = new Tests(calculator, chai);
tests.runTests();