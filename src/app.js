import express from "express";
import routes from "./route";

class App {
  // constructor: metodo que é chamado automaticamente quando for instanciar essa classe
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // metodo onde vai cadastrar todos os middlewares da aplicação
  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
