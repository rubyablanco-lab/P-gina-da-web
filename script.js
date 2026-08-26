 const botões = document.querySelectorAll("button");

  botões.forEach(
    function (botão) {
      let curtiu = false;
      botão.addEventListener("click", botãoClicado);

      function botãoClicado() {
        console.log(" botão clicado");
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