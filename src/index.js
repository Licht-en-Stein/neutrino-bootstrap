import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
import carouselTemplate from './templates/carousel.html';
import carouselItemTemplate from './templates/carousel-item.html';


function mkIndicator(number) {
  return $(`<li data-target="#carousel-indicators" data-slide-to="${number}"></li>`);
}

function mkSlide(item) {
  const $el = $(carouselItemTemplate);
  $el.find('h2').text(item.name);
  return $el;
}

function mkCarousel(items) {
  // we create a jquery object${number}
  const $el = $(carouselTemplate);
  // we create a reference to the elements in which we want to put things
  const $indicators = $el.find('.carousel-indicators');
  const $slides = $el.find('.carousel-inner');

  items.forEach((item, number) => {
    const $indicator = mkIndicator(number);
    const $slide = mkSlide(item);

    if (number === 0) {
      $slide.addClass('active');
      $indicator.addClass('active');
    }

    $slides.append($slide);
    $indicators.append($indicator);
  });

  return $el;
}

const categories = [
  { name: 'First' },
  { name: 'Second' },
];

$(() => {
  const $carousel = mkCarousel(categories);
  $('#root')
    .append(navbarTemplate)
    .append($carousel);
  $carousel.carousel();
});
