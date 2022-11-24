## Algorítimos genéticos

Nomes: Gustavo Harff e Rafael Reichel

Foi criada várias funções em arquivos separados para que o código fique mais compreensível:

1. [getRandomIndividuals](#getrandomindividuals): Responsável por gerar uma lista de indivíduos aleatóriamente.
2. [sortIndividualsByFunctionDesc](#sortindividualsbyfunctiondesc): Responsável por ordenar essa listagem com base no retorno de `f` em ordem decrescente.
3. [cutList](#cutlist): Responável por cortar a listagem apartir do valor mais aproximado de `185`.
4. [setListWeighting](#setlistweighting): Após cortada e ordenada, essa funções é responsável por atribuir o valor da ponderação para cada item da listagem.
5. [cloneList](#clonelist): Após ter a primeira listagem pronta, a função `cloneList` copia a primeira listagem seguindo algumas regras:

   1. Copiará apenas o valor do chromossomo de cada indivíduo.
   2. Para o 1º item da listagem, deverá criar mais 4 itens novos.
   3. Para o 2º item da listagem, deverá criar mais 3 itens novos.
   4. Para o 3º item da listagem, deverá criar mais 2 itens novos.
   5. Para o 4º item da listagem, deverá criar mais 1 itens novos.

6. [shuffleEndOfChromosomes](#shuffleendofchromosomes): Responsável por fazer o embaralhamento de todos os quatro dígitos finais dos cromossomos.
7. [switchRandomDigits](#switchrandomdigits): Responsável por fazer a troca de 1 dígito a cada dois individuos de forma aleatória.
8. [decodeChromosomes](#decodechromosomes): Responsável por fazer a decodificação dos cromossomos (definir as variáveis `x`, `y`, `w` e `z`).

As chamadas destas funções são feitas nesta mesma ordem e em loop para conseguir obter o melhor resultado para `f`.

## Funções e classes

### Classe Indivíduo

```typescript
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

    this.chromosome = `${binX}${binY}${binW}${binZ}`;
    this.f = 5 * x + y ** 2 + w + z ** 3;
    this.weighting = 0;
  }

  public generateF() {
    this.f = 5 * this.x + this.y ** 2 + this.w + this.z ** 3;
  }
}
```

### getRandomIndividuals

```typescript
function getRandomIndividuals() {
  const list: Individual[] = [];

  for (let i = 0; i < SIZE; i++) {
    const x = Math.floor(Math.random() * SIZE);
    const y = Math.floor(Math.random() * SIZE);
    const w = Math.floor(Math.random() * SIZE);
    const z = Math.floor(Math.random() * SIZE);

    list.push(new Individual(x, y, w, z));
  }

  return list;
}
```

### sortIndividualsByFunctionDesc

```typescript
function sortIndividualsByFunctionDesc(list: Individual[]) {
  list.sort((a, b) => {
    return b.getF() - a.getF();
  });
}
```
### cutList

```typescript
function cutList(list: Individual[]) {
  const index = list.findIndex(item => item.getF() <= EXPECTED_VALUE) // 185

  return list.splice(index)
}
```

### setListWeighting

```typescript
function setListWeighting(list: Individual[]) {
  list.forEach((item, index) => {
    item.setWeighting(list.length - index);
  });
}
```
### cloneList

```typescript
function cloneList(list: Individual[]) {
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
```

### shuffleEndOfChromosomes

```typescript
function shuffleEndOfChromosomes(list: Individual[]) {
  const ends = list.map((individual) =>
    getLastFourCactacters(individual.getChromosome())
  );

  list.forEach((individual) => {
    const end = ends.splice(Math.floor(Math.random() * ends.length), 1);

    const chromosome = individual.getChromosome().slice(0, -4) + end;

    individual.setChromosome(chromosome);
  });
}

```

### switchRandomDigits

```typescript
function switchRandomDigits(list: Individual[]) {
  let backup: string[] = [];

  list.forEach((item, index) => {
    const par = index % 2 === 0;

    if (par) {
      backup.push(item.getChromosome());
    } else {
      backup[backup.length - 1] = `${
        backup[backup.length - 1]
      }${item.getChromosome()}`;
    }
  });

  backup = backup.map((item) => {
    const index = Math.floor(Math.random() * item.length);

    return setCharAt(item, index, item[index] === "1" ? "0" : "1");
  });

  backup.reverse()

  list.forEach((item, index) => {
    const par = index % 2 === 0;

    const start = backup[backup.length - 1].slice(CHROMOSOME_LENGTH * 0, CHROMOSOME_LENGTH * 4);
    const end = backup[backup.length - 1].slice(CHROMOSOME_LENGTH * 4, CHROMOSOME_LENGTH * 8);

    if (par) {
      item.setChromosome(start);
    } else {
      item.setChromosome(end);
      backup.pop();
    }
  });

  return list;
}
```

### decodeChromosomes

```typescript
function decodeChromosomes(list: Individual[]) {
  list.forEach(item => {
    const x = item.getChromosome().slice(CHROMOSOME_LENGTH * 0, CHROMOSOME_LENGTH * 1)
    const y = item.getChromosome().slice(CHROMOSOME_LENGTH * 1, CHROMOSOME_LENGTH * 2)
    const w = item.getChromosome().slice(CHROMOSOME_LENGTH * 2, CHROMOSOME_LENGTH * 3)
    const z = item.getChromosome().slice(CHROMOSOME_LENGTH * 3, CHROMOSOME_LENGTH * 4)

    item.x = bin2dec(x)
    item.y = bin2dec(y)
    item.w = bin2dec(w)
    item.z = bin2dec(z)

    item.generateF()
  })
}

```

## Conclusão

Nem todas as tentativas deram certo para encontrar o resultado `185`, mas é possível notar perfeitamente que o algorítmo consegue ter um progresso a cada época executada.

Abaixo está disponível um exemplo da primeira listagem gerada e da último onde o algorítmo conseguiu encontrar o resultado corretamente.

Geração da primeira lista: 

| x      | y      | w      | z      | chromosome                   | function    | weighting|
|--------|--------|--------|--------|------------------------------|-----------|------------|
| 001    | 005    | 002    | 003    | 0001010100100011             | 00059     | 0          | 
| 000    | 000    | 005    | 000    | 0000000001010000             | 00005     | 0          |
| 003    | 000    | 004    | 004    | 0011000001000100             | 00083     | 0          |
| 004    | 001    | 004    | 002    | 0100000101000010             | 00033     | 0          |
| 002    | 002    | 001    | 005    | 0010001000010101             | 00140     | 0          |
| 002    | 000    | 002    | 007    | 0010000000100111             | 00355     | 0          |
| 001    | 000    | 006    | 005    | 0001000001100101             | 00136     | 0          |
| 007    | 007    | 001    | 003    | 0111011100010011             | 00112     | 0          |

Resultado:

| x      | y      | w      | z      | chromosome                   | function  | weighting  |
|--------|--------|--------|--------|------------------------------|-----------|------------|
| 011    | 000    | 005    | 005    | 1011000001010101             | 00185     | 9          |
| 011    | 000    | 004    | 005    | 1011000001000101             | 00184     | 8          |
| 011    | 000    | 004    | 005    | 1011000001000101             | 00184     | 7          |
| 011    | 000    | 004    | 005    | 1011000001000101             | 00184     | 6          |
| 011    | 000    | 004    | 005    | 1011000001000101             | 00184     | 5          |
| 011    | 000    | 004    | 005    | 1011000001000101             | 00184     | 4          |
| 011    | 000    | 004    | 004    | 1011000001000100             | 00123     | 3          |
| 011    | 000    | 004    | 004    | 1011000001000100             | 00123     | 2          |
| 011    | 000    | 004    | 001    | 1011000001000001             | 00060     | 1          |

Encontou o invididuo

| x      | y      | w      | z      | chromosome                   | function  | weighting  |
|--------|--------|--------|--------|------------------------------|-----------|------------|
| 011    | 000    | 005    | 005    | 1011000001010101             | 00185     | 9          |