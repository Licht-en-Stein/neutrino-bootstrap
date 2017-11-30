import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
import mkCarousel from './carousel';
import productCardTemplate from './templates/product-card.html';

function mkProductCard(product) {
  const $card = $(productCardTemplate);
  $card.find('.card-title').text(product.name);
  $card.find('.card-img-top').attr('src', `http://via.placeholder.com/360x240?text=${product.name}`);
  return $card;
}

function mkProductsGrid(products) {
  const $containerEl = $('<div class="container-fluid"></div>');
  const $rowEl = $('<div class="row"></div>');
  $containerEl.append($rowEl);
  products.forEach((product) => {
    const $colEl = $('<div class="col-md-4"></div>');
    $colEl.append(mkProductCard(product));
    $rowEl.append($colEl);
  });
  return $containerEl;
}

$(() => {
  $('#root').append(navbarTemplate);
  $.ajax('./static/categories.json')
    .done((categories) => {
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      $carousel.carousel();
      $('.navbar-nav').empty();

      const $navbarNav = $('.navbar-nav').empty();

      categories.forEach((category) => {
        $navbarNav.append(`
          <li class="nav-item">
        <a class="nav-link" href="#">${category.name}</a>
      </li>`);
      });
    });
  $.ajax('./static/products.json')
    .done((products) => {
      const $productsGrid = mkProductsGrid(products);
      $('#root').append($productsGrid);
    });
});
