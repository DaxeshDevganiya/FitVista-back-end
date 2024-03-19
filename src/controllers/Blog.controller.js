import {Blog} from "../models/blog.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addBlog=asyncHandler(async(req,res)=>{
    try{
        const{title,image,description,category}=req.body;
    const blog=new Blog({
        title,image,description,category
    });
    const saveBlog= await blog.save();
    res.status(200).json({
        message:"Blog added successfully",
        saveBlog,
        status:200,
    })
    }catch(error){
        console.log("Error in adding blog", error);
        res.status(500).json({ message: error, status: 500 });
    }
    
});

const getBlogs = asyncHandler(async (req, res) => {
    try {
      const blogs = await Blog.find();
      const numberOfBlogs = blogs.length;
      res.status(200).json({ blogs, numberOfBlogs, status: 200 });
    } catch (error) {
      console.log("Error in getting blogs", error);
      res.status(500).json({ message: error, status: 500 });
    }
  });

  const getBlog = asyncHandler(async (req, res) => {
    try {
      const blogId = req.params.id;
      const blog = await Blog.findById(blogId);
      if (blog) {
        res.status(200).json({ blog, status: 200 });
      } else {
        res.status(404).json({ message: "Blog not found", status: 404 });
      }
    } catch (error) {
      console.log("Error in getting Blog", error);
      res.status(500).json({ message: error, status: 500 });
    }
  });

  const updateBlog = asyncHandler(async (req, res) => {
    try {
      const blogId = req.params.id;
      const { title,image,description,category } =
        req.body;
      const blog = await Blog.findById(blogId);
      if (blog) {
        blog.title = title;
      
        blog.category = category;
      
        blog.description = description;
        blog.image = image;
        const updatedBlog = await blog.save();
        console.log("Blog updated successfully");
        res.status(200).json({
          message: "Blog updated successfully",
          updatedBlog,
          status: 200,
        });
      } else {
        res.status(404).json({ message: "Blog not found", status: 404 });
      }
    } catch (error) {
      console.log("Error in updating product", error);
      res.status(500).json({ message: error, status: 500 });
    }
  });

  const deleteBlog = asyncHandler(async (req, res) => {
    try {
      const blogId = req.params.id;
      const blog = await Blog.findByIdAndDelete(blogId);
      if (blog) {
        res.status(200).json({
          message: "Blog deleted successfully",
          status: 200,
        });
      } else {
        res.status(404).json({ message: "Blog not found", status: 404 });
      }
    } catch (error) {
      console.log("Error in deleting Blog", error);
      res.status(500).json({ message: error, status: 500 });
    }
  });
export{addBlog,getBlogs,getBlog,updateBlog,deleteBlog};