import { Router } from "express";
import * as APIController from "../controller/RepoController";

const router = Router();

export default router
  .get("/repos/:name", APIController.getRepo)
  .get("/repos", APIController.getRepos)
  .get("/metrics", APIController.getMetrics);
