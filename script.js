 const botões = document.querySelectorAll("button");

  botões.forEach(
    function (botão) {
      let curtiu = false;
      botão.addEventListener("click", botãoClicado);

      function botãoClicado() {
        let texto = botão.querySelector("span");
        if (curtiu === false) {
          texto.textContent++;
          curtiu = true;
        } else {
          texto, textContent--;
          curtiu = false;
        }
      }
    }
  )
  const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
  
  btnTemaEscuro.addEventListener("click", mudaTema);

  function mudaTema () {
    const corpoPagina = document.body;
    if(corpoPagina.classList.constains("tema-escuro")){
      corpoPagina.classList.remove("tema-escuro");
    }
    else {
      corpoPagina.classList.add("tema-escuro");
    }
  }
