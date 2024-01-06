import providerFactoryV1 from "./../Services/Concretes/providerFactory.js";
import gitHubData from "../Services Dep/Concretes/gitHubData.js";
import authenticationError from "../Utils/authenticationError.js";
import emailNotFoundError from "../Utils/emailNotFoundError.js";
import issueJWT from "../Utils/issueJWT.js";

const authenticate = async (req, res, next) => {
  const { code } = req.body;
  const dataObject = new gitHubData(code);
  const provider = providerFactoryV1.createGitHubAuthProvider(dataObject);
  try {
    const { data } = await provider.authenticate();
    if (!data["access_token"]) throw new authenticationError(data);
    const { email } = await provider.fetchEmail(
      data["access_token"],
      data["token_type"]
    );
    if (!email)
      throw new emailNotFoundError({
        error: "Email not found or not enough scopes.",
      });
    const token = issueJWT({ email });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export default authenticate;
