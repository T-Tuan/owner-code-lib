/**
 * 检查一个值是否为空数组。
 *
 * @param value - 要检查的值。
 * @returns 如果值为空数组，则返回 true，否则返回 false。
 */
export function isEmptyArray(value: unknown): value is any[] {
  return Array.isArray(value) && value.length === 0;
}

/**
 * 获取两个数组的交集，通过指定字段属性进行判断。
 *
 * @param arr1 - 第一个数组。
 * @param arr2 - 第二个数组。
 * @param key - 可选的字段属性，用于判断交集。
 * @returns 交集的数组。
 */
export function getArrayIntersection<T, K extends keyof T = keyof T>(
  arr1: T[],
  arr2: T[],
  key?: K
): T[] {
  if (key) {
    const set = new Set(arr1.map((item) => item[key]));
    return arr2.filter((item) => set.has(item[key]));
  }
  return arr1.filter((item) => arr2.includes(item));
}
