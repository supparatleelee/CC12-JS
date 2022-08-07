function shoppingCartInput() {
  const shoppingCart = {};

  // we can declare the object's key directly by . like this as well!
  shoppingCart.product = prompt('Product Name:');
  shoppingCart.quantity = +prompt('Quantity:');
  shoppingCart.price = +prompt('Total Price:');
  shoppingCart.discount = +prompt('Promotion (%):');

  shoppingCart.price =
    shoppingCart.price - (shoppingCart.price * shoppingCart.discount) / 100;

  return shoppingCart;
}

shoppingCartInput();
