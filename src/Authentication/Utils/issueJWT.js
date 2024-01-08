import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const privateKeyPath = process.env.PRIVATE_KEY_PATH;

const privateKey = fs.readFileSync(privateKeyPath, "utf8");

const issueJWT = (payLoad) => {
  payLoad["exp"] = Math.floor(Date.now() / 1000) + 86400;
  const token = jwt.sign(payLoad, privateKey, { algorithm: "RS256" });
  return token;
};

export default issueJWT;
