import { Individual } from "../models/individual";

export function sortIndividualsByFunctionDesc(list: Individual[]) {
  list.sort((a, b) => {
    return b.getF() - a.getF();
  });
}
