import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const privateKey = fs.readFileSync("./privatekey.pem", "utf8");

const issueJWT = (payLoad) => {
  const token = jwt.sign(payLoad, privateKey, { algorithm: "RS256" });
  return token;
};

export default issueJWT;
