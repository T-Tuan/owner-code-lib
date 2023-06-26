import { isUndefined, isNull } from "./typeCheck";
import { isEmptyArray } from "./array";
import { isEmptyObject } from "./object";
import { isEmptyString } from "./string";
/**
 * 检查一个值是否为 `undefined` 或 `null`。
 *
 * @param value - 要检查的值。
 * @returns 如果值为 `undefined` 或 `null`，则返回 `true`，否则返回 `false`。
 */
export function isNullOrUndefined(value: unknown): value is undefined | null {
  return value === undefined || value === null;
}

/**
 * 检查一个值是否为空。
 *
 * @param value - 要检查的值。
 * @returns 如果值为空，则返回 true，否则返回 false。
 */
export function isEmpty(
  value: unknown
): value is undefined | null | [] | {} | "" {
  return (
    isUndefined(value) ||
    isNull(value) ||
    isEmptyArray(value) ||
    isEmptyObject(value) ||
    isEmptyString(value)
  );
}

/**
 * 倒计时方法，每秒执行一次回调函数。
 *
 * @param time - 倒计时时间，单位为秒。
 * @param callback - 每秒执行的回调函数，参数为当前剩余时间。
 * @returns 用于取消倒计时的函数。
 */
export const countdown = (
  time: number,
  callback: (remainingTime: number) => void
): (() => void) => {
  let remainingTime = time;

  const intervalId = setInterval(() => {
    remainingTime--;
    callback(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
};

/**
 * 检测给定的值是否在指定范围内。
 *
 * @param value - 要检测的值。
 * @param range - 范围，包含最小值和最大值。
 * @returns 如果值在范围内，则返回 true，否则返回 false。
 */
export function isValueInRange(
  value: number,
  range: [number, number]
): boolean {
  const [min, max] = range;
  return value >= min && value <= max;
}

/**
 * 使用深度优先搜索算法递归查找指定属性值的节点，并返回匹配节点的数据、父级数据列表和层级关系。
 *
 * @param arr - 要进行搜索的数组。
 * @param prop - 需要查找的属性名。
 * @param value - 需要查找的属性值。
 * @param parentData - 父级数据列表。
 * @param level - 当前层级。
 * @returns 匹配节点的数据、父级数据列表和层级关系。
 *
 * @beta
 */
export function findNodeByProp(
  arr: any[],
  prop: string,
  value: any,
  parentData: any[] = [],
  level: number = 0
): { data: any; parents: any[]; indices: number[] } | null {
  for (let i = 0; i < arr.length; i++) {
    const data = arr[i];

    if (data[prop] === value) {
      return {
        data,
        parents: parentData,
        indices: [
          i,
          ...parentData.map((_, index) => parentData.length - index - 1),
        ],
      };
    }

    if (Array.isArray(data)) {
      const result = findNodeByProp(
        data,
        prop,
        value,
        [...parentData, arr],
        level + 1
      );
      if (result) {
        return result;
      }
    }
  }

  return null;
}
