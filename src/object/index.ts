
/**
 * 检查一个值是否为空对象。
 *
 * @param value - 要检查的值。
 * @returns 如果值为为空对象，则返回 true，否则返回 false。
 */
export function isEmptyObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && Object.keys(value).length === 0;
}

/**
 * 从对象中排除指定的属性，返回一个新的对象。
 *
 * @param obj - 要处理的对象。
 * @param keys - 要排除的属性键名数组。
 * @returns 排除指定属性后的新对象。
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const clone = { ...obj };
  keys.forEach((key) => delete clone[key]);
  return clone;
}
