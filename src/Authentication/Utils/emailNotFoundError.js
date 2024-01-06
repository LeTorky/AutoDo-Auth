class emailNotFoundError extends Error {
  constructor(data) {
    super("Email not found");
    this.name = "authenticationError";
    this.code = "404";
    this.status = 404;
    this.data = data;
  }
}

export default emailNotFoundError;
