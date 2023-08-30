import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

export const AuthSymbol = Symbol("AuthService");

export class AuthService {
  private userPool: CognitoUserPool;

  constructor(config: AuthConfig) {
    const { userPoolId, clientId } = config;
    this.userPool = new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    });
  }

  login(username: string, password: string): Promise<CognitoUser> {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool,
    });

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: () => resolve(cognitoUser),
        onFailure: (error) => reject(error),
      });
    });
  }

  logout(cognitoUser: CognitoUser): Promise<void> {
    return new Promise((resolve, reject) => {
      cognitoUser.signOut();
      resolve();
      console.log(reject);
    });
  }
}
