/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string = "gpu - not defined";

  displayConfiguration(): void {
    console.log(`CPU: ${this.cpu}
RAM: ${this.ram}
Storage: ${this.storage}
GPU: ${this.gpu ?? "No GPU"}`);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }

  reset(): void {
    this.computer = new Computer();
  }
}

function clientCode(): void {
  const builder = new ComputerBuilder();

  const computer1 = builder
    .setCPU("Intel i7")
    .setRAM("16GB")
    .setStorage("512GB SSD")
    .build();
  computer1.displayConfiguration();
  builder.reset();

  const computer2 = builder
    .setCPU("AMD Ryzen 5")
    .setRAM("8GB")
    .setStorage("1TB HDD")
    .setGPU("Nvidia GTX 1660")
    .build();
  computer2.displayConfiguration();
  builder.reset();

  const computer3 = builder.setCPU("Intel i5").build();
  computer3.displayConfiguration();
  builder.reset();
}

clientCode();
