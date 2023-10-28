const context = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : global;

export function isMap<K, V>(value: unknown): value is Map<K, V> {
  return value instanceof context.Map;
}

export function isSet<T>(value: unknown): value is Set<T> {
  return value instanceof context.Set;
}
