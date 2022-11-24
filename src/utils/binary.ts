import { CHROMOSOME_LENGTH } from "../constants";

export function dec2bin(dec: number | string) {
  if (typeof dec === "string") {
    return (Number(dec) >>> 0).toString(2).padStart(CHROMOSOME_LENGTH, "0");
  }

  return (dec >>> 0).toString(2).padStart(CHROMOSOME_LENGTH, "0");
}

export function bin2dec(bin: string) {
  return parseInt(bin, 2)
}