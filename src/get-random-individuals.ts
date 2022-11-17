import { Individual } from "./individual";

const MAX = 7;

// Função para gerar 7 individuos randomicamente
export function getRandomIndividuals() {
  let list: Individual[] = [];

  for (let i = 0; i < MAX; i++) {
    const x = Math.floor(Math.random() * MAX)
    const y = Math.floor(Math.random() * MAX)

    list.push(new Individual(x,y))
  }

  list.sort((a, b) => {
    return b.getF() - a.getF()
  })

  list = list.slice(0, 4)

  list.forEach((item, index) => {
    item.setWeighting(list.length - index)
  })

  return list
}
