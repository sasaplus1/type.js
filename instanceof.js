"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = exports.isMap = void 0;
var context = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : global;
function isMap(value) {
    return value instanceof context.Map;
}
exports.isMap = isMap;
function isSet(value) {
    return value instanceof context.Set;
}
exports.isSet = isSet;
