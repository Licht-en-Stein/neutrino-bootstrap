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
      for (let i = 0; i < categories.length; i += 1) {
        $('.navbar-nav').append(`
        <li class="nav-item">
        <a class="nav-link" href="#">${categories[i].name}<span class="sr-only">(current)</span></a>
      </li>
        `);
      }
    });
  $('#root').append(navbarTemplate);
});
