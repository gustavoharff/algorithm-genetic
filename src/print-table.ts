import { Individual } from "./models/individual";

export function printTable(title: string, individuals: Individual[]) {
  console.log(" ")
  console.log(title)
  console.log("--------------------------------------------------------------------------------------------")
  console.log("| x      | y      | w      | z      | chromosome                   | function    | weighting")
  console.log("--------------------------------------------------------------------------------------------")

  for (const individual of individuals) {
    console.log(individual.toString())
  }
}