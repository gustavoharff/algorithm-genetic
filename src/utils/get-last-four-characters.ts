/**
 * @example
 * getLastFourCactacters('01010100110') // 0110
 */
export function getLastFourCactacters(value: string) {
  return value.slice(value.length - 4)
}
