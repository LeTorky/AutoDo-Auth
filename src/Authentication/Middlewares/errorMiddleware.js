import authenticationError from "../Utils/authenticationError.js";

const errorTypeLookUp = new Set().add(authenticationError.name);

const errorHandler = async (error, req, res, next) => {
  // Handling custom errors.
  const errorType = error.constructor.name;
  if (errorTypeLookUp.has(errorType)) res.status(error.status).send(error.data);
  // Generic errors.
  res.status(500).send({ error: error.message });
};

export default errorHandler;
