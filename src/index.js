import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './templates/navbar.html';


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
    <a href="#" class="btn btn-info btn-sm">Go somewhere</a>
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

const carousel = `
  <div id="carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
    <li data-target="#carousel" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm right">
            <div class="jumbotron ">
              <h1 class="display-3">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-info btn-md" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
          <div class="col-sm">
            <img class="d-block w-100" src="../static/adrian-infernus-394882.jpg" alt="First slide">
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <img class="d-block w-100" src="../static/aperture-vintage-346923.jpg" alt="Second slide">
          </div>
          <div class="col-sm">
            <div class="jumbotron">
              <h1 class="display-3">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-info btn-md" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm right">
            <div class="jumbotron">
              <h1 class="display-3">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-info btn-md" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
          <div class="col-sm">
            <img class="d-block w-100" src="../static/james-donovan-180375.jpg" alt="Third slide">
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <img class="d-block w-100" src="../static/sean-afnan-202297.jpg" alt="Fourth slide">
          </div>
          <div class="col-sm">
            <div class="jumbotron">
              <h1 class="display-3">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-info btn-md" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

`;

$(() => {
  $('#root').html(navbar).append(carousel)
    .append(grid);
});
