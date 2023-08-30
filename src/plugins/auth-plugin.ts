import { App } from "vue";
import { AuthService, AuthSymbol } from "../services/AuthService";

export default {
  install: (app: App) => {
    const authService = new AuthService({
      userPoolId: "us-east-2_o08XwWDYO",
      clientId: "2j9p4pnpvnqf0m78q49cloklt2",
    });

    app.provide(AuthSymbol, authService);
    console.log("auth Service", authService);
  },
};
