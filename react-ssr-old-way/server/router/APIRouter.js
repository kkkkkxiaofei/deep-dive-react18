import { Router } from "express";
import * as APIController from "../controller/RepoController";

const router = Router();

export default router.get('/repos', APIController.getRepos)