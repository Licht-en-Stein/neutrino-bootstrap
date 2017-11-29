import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
import mkCarousel from './carousel';

$(() => {
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
  $('#root').append(navbarTemplate);
});
