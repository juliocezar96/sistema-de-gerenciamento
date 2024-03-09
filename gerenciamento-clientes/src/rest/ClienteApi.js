import fetcher from '../services/index';

class ClienteApi {
    async buscarClientes() {
		return fetcher(`http://localhost:3000/clientes`);
	}

    async buscarClientePorId(id) {
		return fetcher(`http://localhost:3000/clientes/${id}`);
	}

    async criarCliente(
        nome,
        email,
        telefone, 
        latitude,
        longitude
        ) {
		return fetcher.post(
			`http://localhost:3000/clientes`,{
                nome,
                email,
                telefone, 
                latitude,
                longitude,
            }
		);
	}
}

const ClienteApiImpl = new ClienteApi();
export default ClienteApiImpl;
