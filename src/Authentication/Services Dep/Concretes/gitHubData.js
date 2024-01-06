import abstractAuth0Data from "../Interfaces/gitHubData.js";
import dotenv from "dotenv";

dotenv.config();

class gitHubData extends abstractAuth0Data {
  constructor(code) {
    super();
    this._code = code;
    this._client_id = process.env.GITHUB_CLIENT_ID;
    this._client_secret = process.env.GITHUB_CLIENT_SECRET;
  }

  getCode() {
    return this._code;
  }

  getClientId() {
    return this._client_id;
  }

  getClientSecret() {
    return this._client_secret;
  }
}

export default gitHubData;
