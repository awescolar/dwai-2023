<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfólio</title>

    <!-- css -->
    <link rel="stylesheet" href="portfolio/style.css" />

    <!-- fontes -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <section class="container">
      <div class="flex pessoa">
        <div class="eu">
          <img src="portfolio/img/evento.jpeg" alt="" />
          <div class="card-text">
            <h3>Davi Lucas</h3>
            <p>Programador Web</p>
          </div>
        </div>
        <div class="bill-gates">
          <h3>Davi Lucas</h3>
          <p>Olá, mundo! Me chamo Davi e sou aspirante a dev júnior. Tenho conhecimento intermediário em css, html e python.</p>
        </div>
      </div>

      <div class="my-projects">
        <div class="public flex column">
          <h2>Meus projetos publicados</h2>
        </div>
        <ul class="flex column card-list">
          <div class="flex row">
            <li class="card">
              <img src="portfolio/img/pagina do congo.png" alt="" />
              <div class="card-text">
                <h3>Guia tiporgráfico</h3>
                <p>Um guia de tipografias</p>
                <a
                  href=""
                  target="_blank"
                  >Acesse o link</a
                >
              </div>
            </li>
            <li class="card">
              <img src="portfolio/img/site-piscinas.jpg" alt="" />
              <div class="card-text">
                <h3>Site das piscinas</h3>
                <p>Web page de uma empresa de piscinas de fibra</p>
                <a
                  href="portfolio/piscinas/index.html"
                  target="_blank"
                  >Acesse o link</a
                >
              </div>
            </li>
            <li class="card-big">
              <img src="portfolio/img/site if.png" alt="" />
              <div class="card-text">
                <h3>homepage do IFRNzn</h3>
                <p>Site acadêmico</p>
              </div>
              <div class="big-link">
                <a
                  href="portfolio/site IFRN/index.html"
                  target="_blank"
                  >Acesse o link</a
                >
                <a href="" class="destaque">Destaque</a>
              </div>
            </li>
          </div>
          <div class="flex row">
            <li class="card">
              <img src="portfolio/img/cesarmau.png" alt="" />
              <div class="card-text">
                <h3>Site da agência web</h3>
                <p>Comercial</p>
                <a href="">Acesse o link</a>
              </div>
            </li>
            <li class="card">
              <img src="portfolio/img/biblioteca.png" alt="" />
              <div class="card-text">
                <h3>Biblioteca virtual</h3>
                <p>Confira todos os livros disponíveis</p>
                <a 
                href="portfolio/biblioteca/index.html"
                target="_blank"
                >
                Acesse o link
                </a>
              </div>
            </li>
            <li class="card-big">
              <img src="portfolio/img/figma tutorial.png" alt="" />
              <div class="card-text">
                <h3>Novas funcionalidades do figma</h3>
                <p>Tutorial das novas funcionalidades do figma</p>
              </div>
              <div class="big-link">
                <a href="" target="_blank">Acesse o link</a>
                <a href="" class="destaque">Destaque</a>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <div class="credito">
        <h3>Informática para Internet - 2023</h3>
      </div>
    </section>
  </body>
</html>

