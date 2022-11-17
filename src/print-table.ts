import { Individual } from "./individual";

export function printTable(individuals: Individual[]) {
  console.log("                                                 ")
  console.log("-------------------------------------------------")
  console.log("| x     | y     | chromosome | f      | weighting")
  console.log("-------------------------------------------------")

  for (const individual of individuals) {
    console.log(individual.toString())
  }
}