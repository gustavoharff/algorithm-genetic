import { Individual } from "../models/individual";

export function cloneList(list: Individual[]) {
  const individuals: Individual[] = [];

  list.forEach((individual, index) => {
    if (index === 0) {
      const clonedIndividual1 = new Individual(0, 0, 0, 0);
      clonedIndividual1.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual1);

      const clonedIndividual2 = new Individual(0, 0, 0, 0);
      clonedIndividual2.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual2);

      const clonedIndividual3 = new Individual(0, 0, 0, 0);
      clonedIndividual3.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual3);

      const clonedIndividual4 = new Individual(0, 0, 0, 0);
      clonedIndividual4.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual4);
    }

    if (index === 1) {
      const clonedIndividual1 = new Individual(0, 0, 0, 0);
      clonedIndividual1.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual1);

      const clonedIndividual2 = new Individual(0, 0, 0, 0);
      clonedIndividual2.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual2);

      const clonedIndividual3 = new Individual(0, 0, 0, 0);
      clonedIndividual3.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual3);
    }

    if (index === 2) {
      const clonedIndividual1 = new Individual(0, 0, 0, 0);
      clonedIndividual1.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual1);

      const clonedIndividual2 = new Individual(0, 0, 0, 0);
      clonedIndividual2.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual2);
    }

    if (index === 3) {
      const clonedIndividual1 = new Individual(0, 0, 0, 0);
      clonedIndividual1.setChromosome(individual.getChromosome());
      individuals.push(clonedIndividual1);
    }
  });

  return individuals
}
