import { cloneIndividuals } from "./clone-individuals";
import { getRandomIndividuals } from "./get-random-individuals";
import { printTable } from "./print-table";

const primeiraLista = getRandomIndividuals()

printTable(primeiraLista)

const segundaLista = cloneIndividuals(primeiraLista)

printTable(segundaLista)
// console.log(segundaLista)

