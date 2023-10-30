const ctx = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : global;

export function isMap<K, V>(value: unknown, context: typeof globalThis = ctx): value is Map<K, V> {
  return value instanceof context.Map;
}

export function isSet<T>(value: unknown, context: typeof globalThis = ctx): value is Set<T> {
  return value instanceof context.Set;
}
