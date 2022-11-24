import { Individual } from "../models/individual";

export function setListWeighting(list: Individual[]) {
  list.forEach((item, index) => {
    item.setWeighting(list.length - index);
  });
}
