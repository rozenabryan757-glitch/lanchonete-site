function pedir(item) {
  let numero = "21980862013"; // 21980862013

  let mensagem = `Olá, quero pedir: ${item}`;

  let url = `https://wa.me/${21980862013}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}