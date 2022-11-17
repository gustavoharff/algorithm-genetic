import { Individual } from "./individual";
import shuffle from "lodash.shuffle";
import { bin2dec } from "./dec2bin";

// Cria outros individuos copiando apenas o cromosomo de outra listagem
export function cloneIndividuals(individuals: Individual[]) {
  const newIndividuals: Individual[] = [];

  individuals.forEach((item, index) => {
    if (index === 0) {
      const individual1 = new Individual();
      individual1.setChromosome(item.getChromosome());
      newIndividuals.push(individual1);

      const individual2 = new Individual();
      individual2.setChromosome(item.getChromosome());
      newIndividuals.push(individual2);

      const individual3 = new Individual();
      individual3.setChromosome(item.getChromosome());
      newIndividuals.push(individual3);

      const individual4 = new Individual();
      individual4.setChromosome(item.getChromosome());
      newIndividuals.push(individual4);
    }

    if (index === 1) {
      const individual5 = new Individual();
      individual5.setChromosome(item.getChromosome());
      newIndividuals.push(individual5);

      const individual6 = new Individual();
      individual6.setChromosome(item.getChromosome());
      newIndividuals.push(individual6);

      const individual7 = new Individual();
      individual7.setChromosome(item.getChromosome());
      newIndividuals.push(individual7);
    }

    if (index === 2) {
      const individual8 = new Individual();
      individual8.setChromosome(item.getChromosome());
      newIndividuals.push(individual8);

      const individual9 = new Individual();
      individual9.setChromosome(item.getChromosome());
      newIndividuals.push(individual9);
    }

    if (index === 3) {
      const individual10 = new Individual();
      individual10.setChromosome(item.getChromosome());
      newIndividuals.push(individual10);
    }
  });

  // Obter os últimos dois digitos de cada cromossomo
  const ends = newIndividuals.map((individual) =>
    individual.getChromosomeString().slice(4)
  );

  // substituir aleatoriamente os dois ultimos digitos de cada cromossomo
  newIndividuals.forEach((individual) => {
    const chromosome =
      individual.getChromosomeString().slice(0, -2) +
      ends[Math.floor(Math.random() * ends.length)];
    individual.setChromosome(Number(chromosome));
  });


  const substituir = [
    `${newIndividuals[0].getChromosomeString()}${newIndividuals[1].getChromosomeString()}`,
    `${newIndividuals[2].getChromosomeString()}${newIndividuals[3].getChromosomeString()}`,
    `${newIndividuals[4].getChromosomeString()}${newIndividuals[5].getChromosomeString()}`,
    `${newIndividuals[6].getChromosomeString()}${newIndividuals[7].getChromosomeString()}`,
    `${newIndividuals[8].getChromosomeString()}${newIndividuals[9].getChromosomeString()}`,
  ]

  const _0 = Math.random() * substituir[0].length
  const _1 = Math.random() * substituir[1].length
  const _2 = Math.random() * substituir[2].length
  const _3 = Math.random() * substituir[3].length
  const _4 = Math.random() * substituir[4].length

  function setCharAt(string: string,index: number, replacement: string) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

  substituir[0] = setCharAt(substituir[0], _0, substituir[0][_0] === "0" ? "1" : "0" )
  substituir[1] = setCharAt(substituir[1], _1, substituir[1][_1] === "0" ? "1" : "0" )
  substituir[2] = setCharAt(substituir[2], _2, substituir[2][_2] === "0" ? "1" : "0" )
  substituir[3] = setCharAt(substituir[3], _3, substituir[3][_3] === "0" ? "1" : "0" )
  substituir[4] = setCharAt(substituir[4], _4, substituir[4][_4] === "0" ? "1" : "0" )


  newIndividuals.forEach((individual, index) => {
    if (index === 0) {
      console.log(substituir[0].slice(0, 4))
      individual.setChromosome(Number(substituir[0].slice(0, 6)))
    }

    if (index === 1) {
      individual.setChromosome(Number(substituir[0].slice(6, 12)))
    }

    if (index === 2) {
      individual.setChromosome(Number(substituir[1].slice(0, 6)))
    }
    if (index === 3) {
      individual.setChromosome(Number(substituir[1].slice(6, 12)))
    }
    if (index === 4) {
      individual.setChromosome(Number(substituir[2].slice(0, 6)))
    }
    if (index === 5) {
      individual.setChromosome(Number(substituir[2].slice(6, 12)))
    }
    if (index === 6) {
      individual.setChromosome(Number(substituir[3].slice(0, 6)))
    }
    if (index === 7) {
      individual.setChromosome(Number(substituir[3].slice(6, 12)))
    }
    if (index === 8) {
      individual.setChromosome(Number(substituir[4].slice(0, 6)))
    }
    if (index === 8) {
      individual.setChromosome(Number(substituir[4].slice(6, 12)))
    }
  })

  newIndividuals.forEach(individual => {
    const [x, y] = individual.getChromosomeString().slice(4)
    console.log(x, y)
    individual.x = Number(bin2dec(x.toString().padStart(6, "0")))
    individual.y = Number(bin2dec(y.toString().padStart(6, "0")))
    individual.generateF()
  })

  return newIndividuals;
}
