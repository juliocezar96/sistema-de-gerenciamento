class FetcherError extends Error {
	constructor(message) {
		super(message);
		this.info = null;
		this.status = undefined;
	}
}

export default FetcherError;
