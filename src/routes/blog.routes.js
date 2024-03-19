import { Router } from "express";
import {
    addBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} from "../controllers/Blog.controller.js";

const router = Router();

router.route("/addBlog").post(addBlog);
router.route("/getBlogs").get(getBlogs);
router.route("/getBlog/:id").get(getBlog);
router.route("/updateBlog/:id").put(updateBlog);
router.route("/deleteBlog/:id").delete(deleteBlog);

export default router;
