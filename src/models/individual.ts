import { CHROMOSOME_LENGTH } from "../constants";
import { dec2bin } from "../utils";

export class Individual {
  public x: number;

  public y: number;

  public w: number;

  public z: number;

  private chromosome: string;

  private f: number;

  private weighting: number;

  public constructor(x: number, y: number, w: number, z: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.z = z;

    const binX = dec2bin(this.x);
    const binY = dec2bin(this.y);
    const binW = dec2bin(this.w);
    const binZ = dec2bin(this.z);

    this.chromosome = `${binX}${binY}${binW}${binZ}`
    this.f = 5 * x + y ** 2 + w + z ** 3;
    this.weighting = 0;
  }

  public generateF() {
    this.f = 5 * this.x + this.y ** 2 + this.w + this.z ** 3;
  }

  public setChromosome(chromosome: string) {
    this.chromosome = chromosome;
  }

  public getChromosome() {
    return this.chromosome;
  }

  public toString() {
    return `| ${this.x.toString().padStart(3, "0")}    | ${this.y
      .toString()
      .padStart(3, "0")}    | ${this.w
      .toString()
      .padStart(3, "0")}    | ${this.z
      .toString()
      .padStart(3, "0")}    | ${this.getChromosome().padEnd(28, " ")} | ${this.f
      .toString()
      .padStart(5, "0")}     | ${this.weighting}`;
  }

  public getF() {
    return this.f;
  }

  public setWeighting(weighting: number) {
    this.weighting = weighting;
  }
}
