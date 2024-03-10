function forcaBrutaTSP(data) {
  const pontos = new Set(
    data
      .map((entrada) => entrada.clienteA)
      .concat(data.map((entrada) => entrada.clienteB))
  );
  const n = pontos.size;
  const permutacao = Array.from(pontos);
  const pontoInicial = permutacao[0];

  let menorDistancia = Infinity;
  let melhorRota = [];

  function calcularDistancia(rota) {
    let distancia = 0;
    for (let i = 0; i < n - 1; i++) {
      const p1 = rota[i];
      const p2 = rota[i + 1];
      const entradaDistancia = data.find(
        (entrada) =>
          (entrada.clienteA === p1 && entrada.clienteB === p2) ||
          (entrada.clienteA === p2 && entrada.clienteB === p1)
      );
      distancia += parseFloat(entradaDistancia.distancia);
    }
    return distancia;
  }

  function permutar(indice, visitados) {
    if (indice === n) {
      const rota = [...visitados, pontoInicial];
      const distancia = calcularDistancia(rota);
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        melhorRota = rota;
      }
    } else {
      for (let i = 1; i < n; i++) {
        if (!visitados.includes(permutacao[i])) {
          permutar(indice + 1, [...visitados, permutacao[i]]);
        }
      }
    }
  }

  permutar(1, [pontoInicial]);

  return melhorRota;
}

function vizinhoMaisProximo(distancias) {
  let clienteAtual = distancias[0].clienteA;
  const rota = [clienteAtual];
  const visitados = { [clienteAtual]: true };
  const totalClientes = new Set(
    distancias.flatMap((d) => [d.clienteA, d.clienteB])
  ).size;

  while (Object.keys(visitados).length < totalClientes) {
    let distanciaMaisProxima = Infinity;
    let clienteMaisProximo = null;

    for (const { clienteA, clienteB, distancia } of distancias) {
      const dist = parseFloat(distancia);
      if (
        clienteA === clienteAtual &&
        !visitados[clienteB] &&
        dist < distanciaMaisProxima
      ) {
        distanciaMaisProxima = dist;
        clienteMaisProximo = clienteB;
      } else if (
        clienteB === clienteAtual &&
        !visitados[clienteA] &&
        dist < distanciaMaisProxima
      ) {
        distanciaMaisProxima = dist;
        clienteMaisProximo = clienteA;
      }
    }

    if (clienteMaisProximo !== null) {
      visitados[clienteMaisProximo] = true;
      rota.push(clienteMaisProximo);
      clienteAtual = clienteMaisProximo;
    } else {
      break;
    }
  }

  return rota;
}

function trocarRota(rota, i, k) {
  const novaRota = rota.slice();
  for (let j = 0; j < Math.floor((k - i) / 2); j++) {
    const temp = novaRota[i + j];
    novaRota[i + j] = novaRota[k - j];
    novaRota[k - j] = temp;
  }
  return novaRota;
}

function distanciaTotal(rota, distancias) {
  let total = 0;
  for (let i = 0; i < rota.length - 1; i++) {
    const clienteAtual = rota[i];
    const proximoCliente = rota[i + 1];
    const distancia = distancias.find(
      (dist) =>
        (dist.clienteA === clienteAtual && dist.clienteB === proximoCliente) ||
        (dist.clienteB === clienteAtual && dist.clienteA === proximoCliente)
    ).distancia;
    total += distancia;
  }
  // Adiciona a distância de volta ao ponto de partida
  const primeiroCliente = rota[0];
  const ultimoCliente = rota[rota.length - 1];
  const distanciaParaInicio = distancias.find(
    (dist) =>
      (dist.clienteA === primeiroCliente && dist.clienteB === ultimoCliente) ||
      (dist.clienteB === primeiroCliente && dist.clienteA === ultimoCliente)
  ).distancia;
  total += distanciaParaInicio;
  return total;
}

function twoOpt(rota, distancias) {
  let melhorado = true;
  while (melhorado) {
    melhorado = false;
    for (let i = 1; i < rota.length - 2; i++) {
      for (let k = i + 1; k < rota.length - 1; k++) {
        const novaRota = trocarRota(rota, i, k);
        const novaDistancia = distanciaTotal(novaRota, distancias);
        if (novaDistancia < distanciaTotal(rota, distancias)) {
          rota = novaRota;
          melhorado = true;
        }
      }
    }
  }
  return rota;
}

module.exports = { vizinhoMaisProximo, twoOpt, forcaBrutaTSP };
