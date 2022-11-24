import { Individual } from "../models/individual";
import { getLastFourCactacters } from "./get-last-four-characters";

export function shuffleEndOfChromosomes(list: Individual[]) {
  const ends = list.map((individual) =>
    getLastFourCactacters(individual.getChromosome())
  );

  list.forEach((individual) => {
    const end = ends.splice(Math.floor(Math.random() * ends.length), 1);

    const chromosome = individual.getChromosome().slice(0, -4) + end;

    individual.setChromosome(chromosome);
  });
}
