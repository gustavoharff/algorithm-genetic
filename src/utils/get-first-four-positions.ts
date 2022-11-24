import { Individual } from "../models/individual";

export function getFirstFourPositions(list: Individual[]) {
  return list.slice(0, 4)
}
