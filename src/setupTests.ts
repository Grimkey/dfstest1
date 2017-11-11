// src/setupTests.js

global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};

import 'jest-enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });