import { CHROMOSOME_LENGTH } from "../constants";
import { Individual } from "../models/individual";
import { setCharAt } from "./set-char-at";

export function switchRandomDigits(list: Individual[]) {
  let backup: string[] = [];

  list.forEach((item, index) => {
    const par = index % 2 === 0;

    if (par) {
      backup.push(item.getChromosome());
    } else {
      backup[backup.length - 1] = `${
        backup[backup.length - 1]
      }${item.getChromosome()}`;
    }
  });

  backup = backup.map((item) => {
    const index = Math.floor(Math.random() * item.length);

    return setCharAt(item, index, item[index] === "1" ? "0" : "1");
  });

  backup.reverse()

  list.forEach((item, index) => {
    const par = index % 2 === 0;

    const start = backup[backup.length - 1].slice(CHROMOSOME_LENGTH * 0, CHROMOSOME_LENGTH * 4);
    const end = backup[backup.length - 1].slice(CHROMOSOME_LENGTH * 4, CHROMOSOME_LENGTH * 8);

    console.log(start, end)

    if (par) {
      item.setChromosome(start);
    } else {
      item.setChromosome(end);
      backup.pop();
    }
  });

  return list;
}
