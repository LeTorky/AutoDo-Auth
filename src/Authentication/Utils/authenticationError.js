class authenticationError extends Error {
  constructor(data) {
    super("Un-authroized");
    this.name = "authenticationError";
    this.code = "401";
    this.status = 401;
    this.data = data;
  }
}

export default authenticationError;
