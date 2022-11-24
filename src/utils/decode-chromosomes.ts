import { CHROMOSOME_LENGTH } from "../constants";
import { Individual } from "../models/individual";
import { bin2dec } from "./binary";

export function decodeChromosomes(list: Individual[]) {

  list.forEach(item => {
    const x = item.getChromosome().slice(CHROMOSOME_LENGTH * 0, CHROMOSOME_LENGTH * 1)
    const y = item.getChromosome().slice(CHROMOSOME_LENGTH * 1, CHROMOSOME_LENGTH * 2)
    const w = item.getChromosome().slice(CHROMOSOME_LENGTH * 2, CHROMOSOME_LENGTH * 3)
    const z = item.getChromosome().slice(CHROMOSOME_LENGTH * 3, CHROMOSOME_LENGTH * 4)

    item.x = bin2dec(x)
    item.y = bin2dec(y)
    item.w = bin2dec(w)
    item.z = bin2dec(z)

    item.generateF()
  })

}