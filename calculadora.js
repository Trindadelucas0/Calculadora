function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      // limpar visor(id resultado)
      document.getElementById("resultado").value = "";
    }

    if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."
    ) {
      document.getElementById("resultado").value += valor;
    }
    if (valor === "=") {
      let valor_campo = eval(document.getElementById("resultado").value);
      //fazer de string virar numero (eval)
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    // let valor_campo=document.getElementById("resultado").value
    //para deixar menor o codigo colocamos o +=
    document.getElementById("resultado").value += valor;
  }
}
