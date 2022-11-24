import { SIZE } from "../constants";
import { Individual } from "../models/individual";

export function getRandomIndividuals() {
  const list: Individual[] = [];

  for (let i = 0; i < SIZE; i++) {
    const x = Math.floor(Math.random() * SIZE)
    const y = Math.floor(Math.random() * SIZE)
    const w = Math.floor(Math.random() * SIZE)
    const z = Math.floor(Math.random() * SIZE)

    list.push(new Individual(x,y, w, z))
  }

  return list
}
