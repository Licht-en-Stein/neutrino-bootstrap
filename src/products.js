import $ from 'jquery';
import cardTemplate from './templates/card-template.html';

//  create product box in grid
export function mkProductCard(product) {
  const $el = $(cardTemplate);
  $el.find('div:nth-child(1)').addClass(`card ${product.category_id}`);
  $el.find('.card-title').text(product.name);
  $el.find('.card-text').text(`Price: ${product.price}€`);
  $el.find('.card-img-top').attr('src', `./static/assets/images/${product.type}.jpg`);
  $el.find('.detailsButton').attr('data-name', `${product.name}`);
  $el.find('.detailsButton').attr('data-price', `${product.price}`);
  // $el.find('.detailsButton').attr('src', `./static/assets/images/${product.type}.jpg`);
  return $el;
}

//  filter and refresh the products
//  TODO 1.3: Add refresh Products

export default function refreshProducts(products, type) {
  $('#products-grid').empty();
  $('#products-grid').append('<div class="row"></div>');
  // check if request all product
  if (type === 'All') {
    products.forEach((product) => {
      $('.row').append(mkProductCard(product));
    });
    $('#infos').text(`${type} Products (${Object.keys(products).length})`);
  } else {
    // request only one product
    products.filter(product => product.type === type)
      .forEach((product) => {
        // console.log(product);
        $('.row').append(mkProductCard(product));
      });
    const activeCategory = $('.navbar-nav .active').text();
    $('#infos').text(`Total products in ${activeCategory} (${Object.keys(products.filter(product => product.type === type)).length})`);
  }
  $('.detailsButton').click((eventObj) => {
    const { target } = eventObj;
    $('.modal-title').text(`More info about ${target.getAttribute('data-name')}`);
    $('.modal-body').text(`The price is ${target.getAttribute('data-price')}€`);
    $('#detailsModal').modal('toggle');
  });
}
