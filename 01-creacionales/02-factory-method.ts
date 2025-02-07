/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

interface Hamburguer {
  name: string;
  price: number;

  prepare(): void;
}

class CheeseBurger implements Hamburguer {
  name = "Cheese Burger";
  price = 10;

  prepare(): void {
    console.log(`Preparando ${this.name}...`);
  }
}

class ChickenBurger implements Hamburguer {
  name = "Chicken Burger";
  price = 15;

  prepare(): void {
    console.log(`Preparando ${this.name}...`);
  }
}

class BeefBurger implements Hamburguer {
  name = "Beef Burger";
  price = 20;

  prepare(): void {
    console.log(`Preparando ${this.name}...`);
  }
}

class BeanBurguer implements Hamburguer {
  name = "Bean Burger";
  price = 15;

  prepare(): void {
    console.log(`Preparando ${this.name}...`);
  }
}

abstract class Restaurant {
  orderHamburguer(type: string): Hamburguer {
    const burger = this.createHamburguer(type);

    burger.prepare();

    return burger;
  }

  protected abstract createHamburguer(type: string): Hamburguer;
}

class FastFoodRestaurant extends Restaurant {
  override createHamburguer(type: string): Hamburguer {
    switch (type) {
      case "cheese":
        return new CheeseBurger();
      case "chicken":
        return new ChickenBurger();
      case "beef":
        return new BeefBurger();
      default:
        throw new Error("Tipo de hamburguesa no soportado.");
    }
  }
}

class VeganRestaurant extends Restaurant {
  override createHamburguer(type: string): Hamburguer {
    switch (type) {
      case "bean":
        return new BeanBurguer();
      default:
        throw new Error("Tipo de hamburguesa no soportado.");
    }
  }
}

function main() {
  const fastFood = new FastFoodRestaurant();
  const cheeseBurger = fastFood.orderHamburguer("cheese");

  console.log(cheeseBurger);

  const veganRestaurant = new VeganRestaurant();
  const beanBurger = veganRestaurant.orderHamburguer("bean");

  console.log(beanBurger);
}

main();
