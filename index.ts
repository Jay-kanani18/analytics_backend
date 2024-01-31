import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { TemplateController } from './app/controllers/template';
import { ClusterConfig } from './cluster';
import { AdminController } from './app/controllers/admin';
import { CatagoryController } from './app/controllers/catagory';
import { ChartController } from './app/controllers/chart';
import { ProjectController } from './app/controllers/project';
import { Database } from './config/database';

// ("./app/utils/response.ts")


export class Server {


  async init() {
    let db = new Database()
    await db.connect()
    const app = express();


    



    useExpressServer(app, {
      cors: true,
      controllers: [AdminController, CatagoryController, ChartController, ProjectController, TemplateController]

    });

    const clusterConfig = new ClusterConfig();


    const PORT = process.env.PORT || 3000;
    clusterConfig.initaliseCLuster(false, (isReady: boolean) => {
      app.listen(PORT, () => {
        console.log("Node app is running at localhost:" + PORT);
      });
    });

  }





}

let server = new Server()

server.init()
