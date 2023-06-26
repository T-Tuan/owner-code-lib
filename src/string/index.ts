/**
 * 检查一个值是否为空字符串。
 *
 * @param value - 要检查的值。
 * @returns 如果值为为空字符串，则返回 true，否则返回 false。
 */
export function isEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length === 0;
}

/**
 * 生成指定长度的随机字符串。
 *
 * @param length - 随机字符串的长度。默认值为 8。
 * @returns 生成的随机字符串。
 */
export function generateRandomString(length: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
}

/**
 * 获取文件名（不包含扩展名）。
 *
 * @param fileName - 文件名。
 * @returns 提取的文件名。
 */
export const getFileName = (fileName: string): string => {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return fileName;
  }
  return fileName.slice(0, lastDotIndex);
};

/**
 * 获取文件名的后缀。
 *
 * @param filename - 文件名。
 * @returns 文件名的后缀。
 */
export const getFileExtension = (filename: string): string => {
  return filename.slice(filename.lastIndexOf(".") + 1);
};

/**
 * 格式化价格，添加千位分隔符并保留指定的小数位数。
 *
 * @param value - 要格式化的价格。
 * @param decimalPlaces - 可选的小数位数，默认为不处理小数位数。
 * @returns 格式化后的价格。
 */
export function formatPrice(
  value: string | number,
  decimalPlaces: number = -1
): string {
  const numberValue = typeof value === "number" ? value : parseFloat(value);
  if (isNaN(numberValue)) {
    return value.toString();
  }

  const options = {
    minimumFractionDigits: decimalPlaces >= 0 ? decimalPlaces : 0,
    maximumFractionDigits: decimalPlaces >= 0 ? decimalPlaces : 2,
  };

  return numberValue.toLocaleString(undefined, options);
}

/**
 * 将数字转换为中文数字。
 *
 * @param value - 要转换的数字。
 * @returns 转换后的中文数字。
 */
export function numberToChinese(value: string | number): string {
  const numberValue = typeof value === "number" ? value.toString() : value;
  const chineseDigits = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ];
  const chineseUnits = ["", "十", "百", "千", "万", "亿"];

  const numArray = Array.from(numberValue).reverse();
  const chineseArray = numArray.map((num, index) => {
    const digit = parseInt(num);
    const digitChinese = chineseDigits[digit];

    if (digit === 0) {
      // 如果当前数字为零，则不处理
      return "";
    }

    const unit = index % 4;
    const unitChinese = chineseUnits[unit];
    const isUnitFirst = index === 0 || (index > 0 && digit !== 1 && unit === 0);

    return isUnitFirst ? digitChinese + unitChinese : digitChinese;
  });

  return chineseArray.reverse().join("");
}

/**
 * 将小驼峰命名转换为蛇形变量名称。
 *
 * @param camelCase - 要转换的小驼峰命名字符串。
 * @returns 转换后的蛇形变量名称。
 */
export const camelToSnake = (camelCase: string): string => {
  return camelCase.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
};

/**
 * 将蛇形变量名称转换为小驼峰命名。
 *
 * @param snakeCase - 要转换的蛇形变量名称。
 * @returns 转换后的小驼峰命名。
 */
export const snakeToCamel = (snakeCase: string): string => {
  return snakeCase.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
};

/**
 * 格式化数字，如果超过指定值则显示为指定值+。
 *
 * @param value - 要格式化的数字。
 * @param threshold - 阈值，超过该值则显示为该值+。默认值为 99。
 * @returns 格式化后的字符串。
 */
export const formatNumber = (
  value: string | number,
  threshold = 99
): string => {
  const num = Number(value);

  if (isNaN(num)) {
    return "";
  }

  if (num > threshold) {
    return `${threshold}+`;
  }

  return String(num);
};
