import FetcherError from './FetcherError';


const fetcher = async (
	resource,
	options
) => {
	const response = await fetch(resource, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers,
		},
	});

	if (!response.ok) {
		const error = new FetcherError(
			'Ocorreu um erro ao buscar os dados.'
		);

		error.info = await response.json();
		error.status = response.status;
		throw error;
	}

	if (options?.method !== 'DELETE' && response.status !== 204) {
		return response.json();
	}
};


fetcher.patch = (resource, data, options) =>
	fetcher(resource, {
		...options,
		body: JSON.stringify(data),
		method: 'PATCH',
	});

fetcher.post = (
	resource,
	data,
	options
) =>
	fetcher(resource, {
		...options,
		body:
			options?.shouldStringify ?? true
				? data
					? JSON.stringify(data)
					: null
				: data,
		method: 'POST',
	});


export default fetcher;
