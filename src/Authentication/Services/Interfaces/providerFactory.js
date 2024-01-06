import abstractClass from "../../Utils/abstraction.js";

class abstractProviderFactory extends abstractClass {
  constructor() {
    super(abstractProviderFactory);
  }
  static createGitHubAuthProvider() {
    abstractClass.staticAbstractMethodFactory(
      abstractProviderFactory.createAuth0Provider,
      abstractProviderFactory
    );
  }
}

export default abstractProviderFactory;
