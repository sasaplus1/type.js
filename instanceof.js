const context = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : global;
export function isMap(value) {
    return value instanceof context.Map;
}
export function isSet(value) {
    return value instanceof context.Set;
}
