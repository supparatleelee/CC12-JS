class Sale {
  name;

  // get the first parameter - name and assign it into class object property.
  constructor(name) {
    this.name = name;
  }

  calaPrice() {
    priceBeforeDiscount = this.price * this.amount;
    discount = priceBeforeDiscount / this.discount;
    this.price = priceBeforeDiscount - discount;
    return this.price;
  }
}

class Beverage extends Sale {
  amount = 0;
  price = 0;
  discount = 0;

  constructor(name, amount, price, discount) {
    //child class call method from the parent class by using super
    super(value);
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

let beverage = new Beverage('Pepsi', 3, 19, 0.1);
console.log(beverage);
console.log(beverage.calaPrice());
