import { Router } from "express";

import UserController from "./controllers/UserController";

const router = Router();

router.post("/", new UserController().create);
router.get("/allusers", new UserController().getAllUsers)

export default router;