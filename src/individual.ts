import { dec2bin } from "./dec2bin";
import { f } from "./f";

// Classe de individuo
export class Individual {
  private x: number;

  private y: number;

  private chromosome: number;

  private f: number

  private weighting: number

  public constructor(
    x?: number,
    y?: number,
  ) {
    this.x = x || 0
    this.y = y || 0
    this.chromosome = Number(`${dec2bin(Number(this.x))}${dec2bin(Number(this.y))}`)
    this.f = x && y ? f(x, y) : 0
    this.weighting = 0
  }

  public setChromosome(chromosome: number) {
    this.chromosome = chromosome
  }

  public getChromosome() {
    return this.chromosome
  }

  public toString() {
    return `| ${this.x}     | ${this.y}     | ${this.chromosome.toString().padStart(6, "0")}     | ${this.f.toString().padStart(2,"0")}     | ${this.weighting}`
  }

  public getF() {
    return this.f
  }

  public setWeighting(weighting: number) {
    this.weighting = weighting
  }
}
