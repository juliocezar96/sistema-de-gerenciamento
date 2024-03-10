const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const toRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};

function getdistanciaEntreClientes(clientes) {
  const distancias = [];
  for (let i = 0; i < clientes.length; i++) {
    for (let j = i + 1; j < clientes.length; j++) {
      const clienteA = clientes[i];
      const clienteB = clientes[j];
      const distancia = haversine(
        clienteA.latitude,
        clienteA.longitude,
        clienteB.latitude,
        clienteB.longitude
      );
      distancias.push({
        clienteA: i,
        clienteB: j,
        distancia: distancia.toFixed(2),
      });
    }
  }
  return distancias;
}

const ordenarClientesPorOrdemVisitacao = (clientes, path) => {
  return clientes.sort((a, b) => {
    return path.indexOf(a.id) - path.indexOf(b.id);
  });
};
module.exports = {
  getdistanciaEntreClientes,
  ordenarClientesPorOrdemVisitacao,
};
