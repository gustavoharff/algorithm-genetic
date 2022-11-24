import {
  getFirstFourPositions,
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

let primeiraLista = getRandomIndividuals();

function exec(list: Individual[], interactions: number) {
  let lastList: Individual[] = list;

  for (let i = 0; i < interactions; i++) {
    let primeiraLista = lastList

    printTable("Geração da primeira lista: ", primeiraLista);

    sortIndividualsByFunctionDesc(primeiraLista);

    printTable("Ordenação da primeira lista: ", primeiraLista);

    primeiraLista = getFirstFourPositions(primeiraLista);

    printTable("Melhores resultados da primeira lista: ", primeiraLista);

    setListWeighting(primeiraLista);

    printTable("Atribuição da relevancia para cada item: ", primeiraLista);

    let segundaLista = cloneList(primeiraLista);

    printTable(
      "Criação da segunda listagem copiando apenas os cromossomos: ",
      segundaLista
    );

    shuffleEndOfChromosomes(segundaLista);

    printTable("Embaralhar últimos quatro dígitos: ", segundaLista);

    switchRandomDigits(segundaLista);

    printTable("Embaralhar dígitos: ", segundaLista);

    decodeChromosomes(segundaLista);

    printTable("Decodificar cromossomos: ", segundaLista);

    lastList = segundaLista
  }
}

exec(primeiraLista, 100)
