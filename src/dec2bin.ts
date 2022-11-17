// Função para converter um numero inteiro para binário
export function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

export function bin2dec(bin: string) {
  return parseInt(bin, 2)
}