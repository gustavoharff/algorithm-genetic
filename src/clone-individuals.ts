import { Individual } from "./individual";
import shuffle from "lodash.shuffle";

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
    individual.getChromosome().toString().padStart(6, "0").slice(4)
  );

  // substituir aleatoriamente os dois ultimos digitos de cada cromossomo
  newIndividuals.forEach((individual) => {
    const chromosome =
      individual.getChromosome().toString().padStart(6, "0").slice(0, -2) +
      ends[Math.floor(Math.random() * ends.length)];
    individual.setChromosome(Number(chromosome));
  });

  

  newIndividuals.forEach(individual => {

  })

  return newIndividuals;
}
