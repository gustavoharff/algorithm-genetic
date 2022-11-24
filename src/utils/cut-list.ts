import { EXPECTED_VALUE } from "../constants";
import { Individual } from "../models/individual";

export function cutList(list: Individual[]) {
  const index = list.findIndex(item => item.getF() <= EXPECTED_VALUE)

  return list.splice(index)
}
