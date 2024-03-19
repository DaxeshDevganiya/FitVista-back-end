import { Router } from "express";
import {
    AssignTrainer,
    
} from "../controllers/Admin.controller.js";

const router = Router();


router.route("/updateTrainer/:id").put(AssignTrainer);


export default router;
