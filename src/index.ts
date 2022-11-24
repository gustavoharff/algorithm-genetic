import {
  cutList,
  getRandomIndividuals,
  setListWeighting,
  sortIndividualsByFunctionDesc,
} from "./utils";
import { printTable } from "./print-table";
import { cloneList } from "./utils/clone-list";
import { shuffleEndOfChromosomes } from "./utils/shuffle-end-of-chromosomes";
import { switchRandomDigits } from "./utils/switch-random-digits";
import { decodeChromosomes } from "./utils/decode-chromosomes";
import { Individual } from "./models/individual";
import { EXPECTED_VALUE } from "./constants";

let primeiraLista = getRandomIndividuals();

printTable("Geração da primeira lista: ", primeiraLista);

function exec(list: Individual[], interactions: number) {
  let lastList: Individual[] = list;

  for (let i = 0; i < interactions; i++) {
    primeiraLista = lastList;

    // printTable("Geração da primeira lista: ", primeiraLista);

    sortIndividualsByFunctionDesc(primeiraLista);

    // printTable("Ordenação da primeira lista: ", primeiraLista);

    primeiraLista = cutList(primeiraLista);

    // printTable("Melhores resultados da primeira lista: ", primeiraLista);

    setListWeighting(primeiraLista);

    // printTable("Atribuição da relevancia para cada item: ", primeiraLista);

    let segundaLista = cloneList(primeiraLista);

    // printTable(
    //   "Criação da segunda listagem copiando apenas os cromossomos: ",
    //   segundaLista
    // );

    shuffleEndOfChromosomes(segundaLista);

    // printTable("Embaralhar últimos quatro dígitos: ", segundaLista);

    switchRandomDigits(segundaLista);

    // printTable("Embaralhar dígitos: ", segundaLista);

    decodeChromosomes(segundaLista);

    // printTable("Decodificar cromossomos: ", segundaLista);

    sortIndividualsByFunctionDesc(segundaLista);

    setListWeighting(segundaLista);

    segundaLista = cutList(segundaLista);

    if (segundaLista[0].getF() === EXPECTED_VALUE) {
      printTable("Resultado: ", segundaLista);
      return segundaLista[0];
    }

    lastList = segundaLista;
  }
}

const individual = exec(primeiraLista, 1000);

if (individual) {
  console.log("Encontou o invididuo");
  console.log(individual?.toString());
}
