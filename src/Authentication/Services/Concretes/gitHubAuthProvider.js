import abstractAuthProvider from "../Interfaces/authProvider.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

class gitHubAuthProvider extends abstractAuthProvider {
  static tokenEndPoint = process.env.GITHUB_AUTH_TOKEN_ENDPOINT;

  constructor(gitHubData) {
    super();
    this.gitHubData = gitHubData;
  }

  async authenticate() {
    const client_id = this.gitHubData.getClientId();
    const client_secret = this.gitHubData.getClientSecret();
    const code = this.gitHubData.getCode();

    const data = {
      client_id,
      client_secret,
      code,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const response = await axios.post(
        gitHubAuthProvider.tokenEndPoint,
        data,
        { headers }
      );
      return response;
    } catch (error) {
      return error.response.data;
    }
  }

  async fetchEmail(accessToken, prefix) {
    const { GITHUB_API_DOMAIN, GITHUB_API_EMAIL } = process.env;
    const url = GITHUB_API_DOMAIN + GITHUB_API_EMAIL;
    const headers = {
      Authorization: `${prefix} ${accessToken}`,
      Accept: "application/json",
    };
    try {
      const response = await axios.get(url, { headers });
      let email = response.data?.find((email) => email.primary == true);
      email = email?.email;
      return { email };
    } catch (error) {
      throw error;
    }
  }
}

export default gitHubAuthProvider;
