

/**
 * 获取值的类型字符串。
 *
 * @param value - 要获取类型的值。
 * @returns 值的类型字符串。
 */
function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * 检查一个值是否为 Undefined 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Undefined 类型，则返回 true，否则返回 false。
 */
export function isUndefined(value: unknown): value is undefined {
  return getType(value) === 'Undefined';
}

/**
 * 检查一个值是否为 Null 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Null 类型，则返回 true，否则返回 false。
 */
export function isNull(value: unknown): value is null {
  return getType(value) === 'Null';
}

/**
 * 检查一个值是否为 Boolean 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Boolean 类型，则返回 true，否则返回 false。
 */
export function isBoolean(value: unknown): value is boolean {
  return getType(value) === 'Boolean';
}

/**
 * 检查一个值是否为 Number 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Number 类型，则返回 true，否则返回 false。
 */
export function isNumber(value: unknown): value is number {
  return getType(value) === 'Number';
}

/**
 * 检查一个值是否为 String 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 String 类型，则返回 true，否则返回 false。
 */
export function isString(value: unknown): value is string {
  return getType(value) === 'String';
}

/**
 * 检查一个值是否为 Symbol 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Symbol 类型，则返回 true，否则返回 false。
 */
export function isSymbol(value: unknown): value is symbol {
  return getType(value) === 'Symbol';
}

/**
 * 检查一个值是否为 Object 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Object 类型，则返回 true，否则返回 false。
 */
export function isObject(value: unknown): value is object {
  return getType(value) === 'Object';
}

/**
 * 检查一个值是否为 Array 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Array 类型，则返回 true，否则返回 false。
 */
export function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

/**
 * 检查一个值是否为 Function 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Function 类型，则返回 true，否则返回 false。
 */
export function isFunction(value: unknown): value is Function {
  return getType(value) === 'Function';
}

/**
 * 检查一个值是否为 Date 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Date 类型，则返回 true，否则返回 false。
 */
export function isDate(value: unknown): value is Date {
  return getType(value) === 'Date';
}

/**
 * 检查一个值是否为 RegExp 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 RegExp 类型，则返回 true，否则返回 false。
 */
export function isRegExp(value: unknown): value is RegExp {
  return getType(value) === 'RegExp';
}

/**
 * 检查一个值是否为 Error 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Error 类型，则返回 true，否则返回 false。
 */
export function isError(value: unknown): value is Error {
  return getType(value) === 'Error';
}

/**
 * 检查一个值是否为 Map 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Map 类型，则返回 true，否则返回 false。
 */
export function isMap(value: unknown): value is Map<any, any> {
  return getType(value) === 'Map';
}

/**
 * 检查一个值是否为 Set 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Set 类型，则返回 true，否则返回 false。
 */
export function isSet(value: unknown): value is Set<any> {
  return getType(value) === 'Set';
}

/**
 * 检查一个值是否为 Promise 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 Promise 类型，则返回 true，否则返回 false。
 */
export function isPromise(value: unknown): value is Promise<any> {
  return getType(value) === 'Promise';
}
