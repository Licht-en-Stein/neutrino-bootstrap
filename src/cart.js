import $ from 'jquery';

class Cart {
  constructor() {
    $('.shopping-cart').hide();
    this.cart = {};
    this.cart.products = [];
  }

  addItem(product) {
    let total = Object.keys(this.cart.products).length;
    //  check if cart exists using total
    if (total === 0) {
      //  cart is empty - add first product
      total = 1;
    } else {
      //  cart exists - retrive it and prepare to add
      total += 1;
      //  TODO: retrieve stored products
      const storedProducts = JSON.parse(localStorage.getItem('cart'));
      this.cart.products = storedProducts;
      // console.log(this.cart.products);
    }
    // TODO: add products to cart
    this.cart.products.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart.products));
    $('.badge').text(localStorage.getItem('total'));
    $('.shopping-cart').show();
    return this.update();
  }

  removeItem(id) {
    this.id = id;
    //  check what is in cart exists using total
    //  TODO: retrieve stored products
    const storedProducts = JSON.parse(localStorage.getItem('cart'));
    this.cart.products = storedProducts.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cart.products));
    return this.update();
  }

  update() {
    //  update badge and show/hide cart container
    const total = Object.keys(this.cart.products).length;
    if (total === 0) {
      $('.badge').text(0);
      $('.badge').hide();
      $('.shopping-cart').hide();
      $('.cart').hide();
    } else {
      $('.badge').text(total);
      $('.badge').show();
      $('.cart').show();
      // updating items in cart
      $('.shopping-cart-items').empty();
      //  TODO: update the items list here...
      const storedProducts = this.cart.products;
      let totalPrice = 0;
      storedProducts.forEach((product) => {
        // console.log(product);
        totalPrice = parseInt(product.price, 10);
        $('.shopping-cart-items').append(`
          <li class=""clearfix>
          <button type="button" class="close removeItemButton" aria-label="Close" data-id="${product.id}">
            <span aria-hidden="true">&times;</span>
          </button>
          <img class="cart-img" src="/static/assets/images/0${product.catid}.jpg" alt="${product.name}"/>
          <span class="item-name">${product.name}</span>
          <span class="item-price">${product.price}</span>
          <span class="item-quantity">Quantity: 01</span>
          </li>`);
        $('.total').text(`€ ${totalPrice}`);
      });
    }
    $('.removeItemButton').click((eventObj) => {
      //  console.log('removing');
      //  define obj
      const { target } = eventObj;
      //  chrome / ff see different things!
      //  define product obj and retriving data using jquery
      this.removeItem($(target).parent().closest('.removeItemButton').attr('data-id'));
    });
    return this;
  }
  clear() {
    localStorage.clear();
    // TODO: empty this.cart.products
    this.cart.products = [];
    return this.update();
  }
}

export default Cart;
