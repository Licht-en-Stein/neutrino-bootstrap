import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';

const navbar = `
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Cat I <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cat II</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Login</a>
  </li>
  </div>
</nav>
`;

const pictures = [
  'buzz-andersen-145254.jpg',
  'elle-zhu-22896.jpg',
  'mark-basarab-122141.jpg',
  'paul-279363.jpg',
  'teddy-kelley-69798.jpg',
  'teddy-kelley-106391.jpg',
];

const card = img => `
  <div class="card" style="width: 20rem;">
  <img class="card-img-top" src="static/${img}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;

const grid = `
<div class="container">
  <div class="row">
    <div class="col-sm">
      ${card(pictures[0])}
    </div>
    <div class="col-sm">
      ${card(pictures[1])}
    </div>
    <div class="col-sm">
      ${card(pictures[2])}
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      ${card(pictures[3])}
    </div>
    <div class="col-sm">
      ${card(pictures[4])}
    </div>
    <div class="col-sm">
      ${card(pictures[5])}
    </div>
  </div>
</div>
`;


$(() => {
  $('#root').html(navbar)
    .append(grid);
});
