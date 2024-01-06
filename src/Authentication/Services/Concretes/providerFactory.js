import abstractProviderFactory from "../Interfaces/providerFactory.js";
import gitHubAuthProvider from "./gitHubAuthProvider.js";

class providerFactoryV1 extends abstractProviderFactory {
  static createGitHubAuthProvider(auth0Data) {
    return new gitHubAuthProvider(auth0Data);
  }
}

export default providerFactoryV1;
