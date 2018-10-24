import '../node_modules/chai/chai.js';
import Calculator from '../public/calculator.js';
const calculator = new Calculator();

import Tests from './Tests.js';
const tests = new Tests(calculator, chai);
tests.runTests();