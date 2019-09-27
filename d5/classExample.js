class Pizza {
  constructor(toppings,flavour) {
    this.toppings = [toppings];
    this.flavour = flavour;

  }
  
  changeFlavour(flavour) {
    this.flavour = flavour;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  set size(size){
    if (size === 's' || size === 'm' || size === 'l'){
      this._size = size;
    }
  }

  get size() {
    return this._size;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice)
  }

}

const pizza1 = new Pizza('cheese','BBQ');
const pizza2 = new Pizza('bacon', 'Chipotle');

pizza1.size = 'l';
console.log(pizza1.size);

