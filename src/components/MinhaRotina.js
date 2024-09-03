import React from 'react';

function MinhaRotina() {
  return (
    <html>
      <head>
        <title>Minha Rotina</title>
      </head>
      <body>
        <h1>Minha Rotina Diária</h1>
        <h2><strong>Anderson Lucas</strong></h2>
        <img src="https://christianosantos.com/files/cs1/avatar-homem.jpg" alt="" />
        <p>
        Minha rotina diária começa com uma sessão de exercícios na academia, o que me ajuda a manter a saúde e a energia ao longo do dia. Depois, trabalho no meu projeto de programação, focando em aprimorar minhas habilidades em Java e banco de dados. Durante a tarde, continuo estudando Java e explorando técnicas avançadas de banco de dados. No final do dia, gosto de relaxar jogando ou aprendendo algo novo.
        </p>
        <video width="320" height="240" controls>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>"Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação." Charlie Brown Jr</p>
        <audio src="https://christianosantos.com/files/cs1/musica03.mp3" autoPlay loop />
      </body>
    </html>
  );
}

export default MinhaRotina;