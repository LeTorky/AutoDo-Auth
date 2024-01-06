import abstractClass from "../../Utils/abstraction.js";

class abstractAuthProvider extends abstractClass {
  constructor() {
    super(abstractAuthProvider);
  }

  async authenticate() {
    this.abstractMethodFactory(this.authenticate);
  }

  async fetchEmail(accessToken) {
    this.abstractMethodFactory(this.fetchEmail);
  }
}

export default abstractAuthProvider;
